import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyDEQ-moSaPkw8kA3hjkn9f0ouP8E1uF0Vo",  
  authDomain: "oste-parking.firebaseapp.com",
  databaseURL: "https://oste-parking.firebaseio.com",
  projectId: "oste-parking",
  storageBucket: "",
  messagingSenderId: "876385138793",
  appId: "1:876385138793:web:661f6b5198eea14b"
};

firebase.initializeApp(config);

const database = firebase.database()

const auth = firebase.auth()

export { firebase, auth, database as default }

// database.ref('spots').remove()
// database.ref('freeDates').remove()

// for (let i = 1; i <= 200; i++) {
//   database.ref('spots').push({
//     number: i,
//     owner: '',
//     ownerid: '',
//     freeOn: 0,
//     taken: 0
//   })
// }

// database.ref('freeDates').push(0)