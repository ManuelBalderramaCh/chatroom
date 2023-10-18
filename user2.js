const AWS = require('aws-sdk');
const fs = require('fs');

const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));
AWS.config.update({
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    region: credentials.region
});

const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

const participant1 = "user2";
const participant2 = "user1";
const senderQueueUrl = "https://sqs.us-east-1.amazonaws.com/391965235034/user2"; 
const receiverQueueUrl = "https://sqs.us-east-1.amazonaws.com/391965235034/user1"; 

process.stdin.on('data', (data) => {
    const message = data.toString().trim();
    const params = {
        MessageBody: `${participant1}: ${message}`,
        QueueUrl: senderQueueUrl
    };

    sqs.sendMessage(params, (err, data) => {
        if (err) {
            console.error("Error al enviar el mensaje:", err);
        } else {
            console.log(`Mensaje enviado: ${participant1}: ${message}`);
        }
    });
});

const receiveParams = {
    QueueUrl: receiverQueueUrl,
    WaitTimeSeconds: 20
};

function receiveMessages() {
    sqs.receiveMessage(receiveParams, (err, data) => {
        if (err) {
            console.error("Error al recibir mensajes:", err);
        } else if (data.Messages) {
            const message = data.Messages[0];
            console.log(`Recibido del remitente: ${message.Body}`);
            const deleteParams = {
                QueueUrl: receiverQueueUrl,
                ReceiptHandle: message.ReceiptHandle
            };
            
        } else {
            console.log("No hay mensajes en la cola.");
            receiveMessages();
        }
    });
}

receiveMessages();