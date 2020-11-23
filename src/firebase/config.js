import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCx8vQG-BgphSkFtkqF69svpUTTEF4-RFU",
    authDomain: "rico-firegram.firebaseapp.com",
    databaseURL: "https://rico-firegram.firebaseio.com",
    projectId: "rico-firegram",
    storageBucket: "rico-firegram.appspot.com",
    messagingSenderId: "833124599411",
    appId: "1:833124599411:web:973ed5ec17b6787a428c06"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };