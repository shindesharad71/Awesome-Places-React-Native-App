const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const fs = require('fs');
const UUID = require('uuid-v4');

const gcconfig = {
    projectId: 'awesome-places-r-1520617147968',
    keyFileName: 'awesome-places.json'
};

const gcs = require('@google-cloud/storage')(gcconfig);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.storeImage = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const body = JSON.parse(request.body);
        fs.writeFileSync('/tmp/uploaded-image.jpg', body.image, 'base64', err => {
            console.log(err);
            return response.status(500).json({error: err});
        });
        const bucket = gcs.bucket('awesome-places-r-1520617147968.appspot.com');
        const uuid = UUID();
        bucket.upload('/tmp/uploaded-image.jpg', {
            uploadType: 'media',
            destination: '/places'+ uuid + '.jpg',
            metadata: {
                contentType: 'image/jpeg',
                firebaseStorageDownloadTokens: uuid
            }
        });
    });


    response.send("Hello from Firebase!");
});
