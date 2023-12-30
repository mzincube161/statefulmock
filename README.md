# Stateful mock package (Coming soon)

### Description

This Node.js package will allow you to run stateful mocks that act as a real server. When a request is sent you can choose to persist that data and fetch it 
later on to rehydrate a response

You can validate data and send back error responses to the users

### Example json
```json
{
  "paths": [
    {
      "method": "PUT",
      "match": "/api/v1/user/{id}",
      "validators": [
        {
          "operand": "and",
          "rules": [
            {
              "field": "${request.header.userId}",
              "operator": "==",
              "value": "${database.data.userId}"
            }
          ],
          "errorResponse": {
            "statusCode": 400,
            "headers": {},
            "body": {
              "error": {
                "message": "You are not authorized to access this resource"
              }
            }
          }
        }
      ],
      "syncResponse": {
        "statusCode": 200,
        "headers": {},
        "jsonBody": {
          "id": "${functions.randomUUID}",
          "name": "${request.body.name}",
          "lastUpdated": "${functions.date.now}"
        },
        "proxy": {
          "enabled": false
        },
        "persist": {
          "enabled": true,
          "merge": true,
          "updateIfEmpty": false,
          "id": "${path.id}",
          "data": {
            "id": "${request.path.id}",
            "name": "${request.body.name}",
            "userId": "${request.headers.userId}"
          }
        }
      },
      "asyncResponse": {
        "enabled": false,
        "config": {
          "delay": 1000,
          "asyncType": "URL"
        },
        "url": "",
        "body": {}
      },
      "persistence": {
        "enabled": true,
        "databaseResourceId": "${request.path.id}",
        "persistenceType": "LOCAL"
      }
    }
  ]
}
```