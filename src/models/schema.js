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
                "uid": {
                    "name": "uid",
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
                            "uid",
                            "expression"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "11d8d8666b75aca92dab270377cdebb1"
};