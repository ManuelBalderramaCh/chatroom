# Actividad | Implementación de un chat room.

## Sistema de mensajeria que simula un chat room entre dos usuarios en este caso `user1` y `user2`.
## Creacion del SQS
Entramos a AWS y buscamos en los servicios SQS (Simple Queue Service)
Creamos una nueva cola con el nombre de user1 y dejamos toda la configuracion por default. Creamos la cola directamente.
![Creacion
](https://github.com/ManuelBalderramaCh/chatroom/assets/79774861/48ace973-f014-42fb-b329-b5584c2f7ae3)

Despues en credenciales de seguridad, obtenemos una ID de clave de acceso y la clave de acceso secreta que no se proporcionaran en imagen por seguridad ;).

Por ultimo en nuestra carpeta del proyecto en el archivo `credentials.json` pasaremos las llaves de acceso requeridas.

## Contamos con los siguientes archivos relevantes

`credentials.json` contiene las credenciales de AWS.
`user1.js` este script implementa el SQS (Simple Queue Service), que intercambia mensajes con el script `user2.js` a través de colas (este script tiene el mismo funcionamiento que `user1.js`).

## Paquetes 

Para poder implementar SQS, debemos instalar la dependencia `aws-sdk` con el siguiente comando:

```shell
npm install aws-sdk
```
## Muestra del funcionamiento del programa 
![Consola
](https://github.com/ManuelBalderramaCh/chatroom/blob/main/imgs/Colas%20en%20aws.jpeg)

## Mensajes enviados y recibidos
![Enviados
](https://github.com/ManuelBalderramaCh/chatroom/blob/main/imgs/Mensajes%20enviados.jpeg)

![Recibidos
](https://github.com/ManuelBalderramaCh/chatroom/blob/main/imgs/mensajes%20recibidos.jpeg)

