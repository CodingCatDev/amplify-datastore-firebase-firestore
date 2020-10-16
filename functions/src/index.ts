import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const firestore = admin.firestore();

// If expression not changed for 1 minute just remove.
// A hack and should implement https://firebase.google.com/docs/firestore/solutions/presence
export const userUpdate = functions.database.ref('/status/{uid}').onUpdate(
  async (change, context) => {
    // Get the data written to Realtime Database
    const eventStatus = change.after.val();

    // Then use other event data to create a reference to the
    // corresponding Firestore document.
    const userStatusFirestoreRef = firestore.doc(`status/${context.params.uid}`);

    // It is likely that the Realtime Database change that triggered
    // this event has already been overwritten by a fast change in
    // online / offline status, so we'll re-read the current data
    // and compare the timestamps.
    const statusSnapshot = await change.after.ref.once('value');
    const status = statusSnapshot.val();
    console.log(status, eventStatus);
    // If the current timestamp for this data is newer than
    // the data that triggered this event, we exit this function.
    if (status.last_changed > eventStatus.last_changed) {
      return null;
    }

    // Otherwise, we convert the last_changed field to a Date
    eventStatus.last_changed = new Date(eventStatus.last_changed);

    // Cleanup rooms that user was involved with
    const promiseArray: any[] = [];
    userStatusFirestoreRef.get().then(doc => {
      if (doc.exists) {
        const { rooms } = doc.data() as any;
        rooms.forEach((room: number) => {
          promiseArray.push(firestore.doc(`rooms/${room}/users/${context.params.uid}`).delete()
            .then(() => console.log(`Deleted User ${context.params.uid} from Room ${room}`))
            .catch(err => console.log(err)));
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

    await Promise.all(promiseArray);

    // ... and write it to Firestore.
    return userStatusFirestoreRef.set(eventStatus, { merge: true });
  });

// Extract user data to generic data
export const expressionUpdate = functions.firestore.document(`/rooms/{roomId}/users/{userId}`)
  .onUpdate((change, context) => {
    const data = change.after.data();
    if (!data) {
      return false;     // If no data don't update
    }
    if (data && data['expression']) {
      return firestore.doc(`/rooms/${context.params.roomId}/expression/${context.eventId}`).set(
        data
      );
    } else {
      console.log('No Expression found');
      return false;     // If data has no expressions don't update
    }
  });

//Aggregate data
export const aggregateExpression = functions.firestore.document(`/rooms/{roomId}/expression/{expressionId}`)
  .onCreate((change, context) => {
    const data = change.data();
    if (!data) {
      return false;     // If no data don't update
    }
    if (data && data['expression']) {
      const date = new Date();
      const minutestamp = `${date.getUTCFullYear()}${date.getUTCMonth()}${date.getDate()}${date.getUTCHours()}${date.getUTCMinutes()}`;
      const aggRef = firestore.doc(`/rooms/${context.params.roomId}/aggregate/${minutestamp}`);

      const expression: [string] = data['expression'];
      let happy = 0;
      let sad = 0;
      let neutral = 0;
      let surprised = 0;
      let angry = 0;

      expression.forEach(e => {
        switch (e) {
          case 'happy':
            happy++;
            break;

          case 'sad':
            sad++;
            break;

          case 'neutral':
            neutral++;
            break;

          case 'surprised':
            surprised++;
            break;

          case 'angry':
            angry++;
            break;
        }
      })

      return firestore.runTransaction(async (transaction) => {
        const aggDoc = await transaction.get(aggRef);
        const aggData = aggDoc.data();
        if (aggData) {
          happy = aggData.happy + happy;
          sad = aggData.sad + sad;
          neutral = aggData.neutral + neutral;
          surprised = aggData.surprised + surprised;
          angry = aggData.angry + angry;
        }
        transaction.set(aggRef, {
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          happy,
          sad,
          neutral,
          surprised,
          angry
        });
      });
    } else {
      console.log('No Expression found');
      return false;     // If data has no expressions don't update
    }
  });
