export const schema = {
    "models": {
        "FvDRoom": {
            "name": "FvDRoom",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "users": {
                    "name": "users",
                    "isArray": true,
                    "type": {
                        "model": "FvDUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "roomID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "FvDRooms",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "FvDUser": {
            "name": "FvDUser",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "roomID": {
                    "name": "roomID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "expression": {
                    "name": "expression",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "last_changed": {
                    "name": "last_changed",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "FvDUsers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRoom",
                        "fields": [
                            "roomID",
                            "id",
                            "expression"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "05273f66de051b17eb060c7acfe1778b"
};