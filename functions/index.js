const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// trigger - for request
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello, ninjas!");
});

// const createNotification = (notification => {
//     return admin.firestore()
//         .collection('notifications')
//         .add(notification)
//         .then()
//         .catch(err => {
//             console.log(err);
//         }) 
// })

// trigger - for firestore
// exports.projectCreated = functions.firestore
//     .document('projects/{projectId}')
//     .onCreate(doc => {

//         const project = doc.data();
//         const notification = {
//             content: 'added a new project',
//             user: `${project.authorFirstName} ${project.authorLastName}`,
//             time: admin.firestore.FieldValue.serverTimestamp()
//         }

//         return createNotification(notification);
// })

// exports.userJoined = functions.auth
//     .user()
//     .onCreate(user => {

//         return admin.firestore()
//             .collection('users')
//             .doc(user.uid)
//             .get()
//             .then(doc => {

//                 const newUser = doc.data();
//                 const notification = {
//                     content: 'joined the party',
//                     user: `${newUser.firstName} ${newUser.lastName}`,
//                     time: admin.firestore.FieldValue.serverTimestamp()
//                 }

//                 return createNotification(notification);
//             }).catch(err => {
//                 console.log(err);
//             }) 
//     })

// exports.projectCreated = functions.firestore
//     .document('projects/{projectId}')
//     .onCreate(doc => {

//         const project = doc.data();
//         const notification = {
//             content: 'added a new project',
//             user: `${project.authorFirstName} ${project.authorLastName}`,
//             time: admin.firestore.FieldValue.serverTimestamp()
//         }

//         return createNotification(notification);
// })

exports.helloUser = functions.firestore
    .document('room/{roomId}')
    .onUpdate(event =>{
        console.log("Event is : ", event); 
    });
