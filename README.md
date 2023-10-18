# Actividad | Implementación de un chat room.

## Sistema de mensajeria que simula un chat room entre dos usuarios en este caso `user1` y `user2`.

## Contamos con los siguientes archivos relevantes

`credentials.json` contiene las credenciales de AWS.
`user1.js` este script implementa el SQS (Simple Queue Service), que intercambia mensajes con el script `user2.js` a través de colas (este script tiene el mismo funcionamiento que `user1.js`).

## Paquetes 

Para poder implementar SQS, debemos instalar la dependencia `aws-sdk` con el siguiente comando:

```shell
npm install aws-sdk
```
## Muestra del funcionamiento del programa 



