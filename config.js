import firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQAYX09hqBeXnhfbAXeR6Tu_1RFVJFPF0",
  authDomain: "complaintforum-989f3.firebaseapp.com",
  projectId: "complaintforum-989f3",
  storageBucket: "complaintforum-989f3.appspot.com",
  messagingSenderId: "162513070317",
  appId: "1:162513070317:web:6e861f962ac1c096ebc4e4",
  measurementId: "G-KH8B117KWP",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
