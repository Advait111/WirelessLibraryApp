import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDFkQqNP7zxsZk6Qn2M0y7tJh1gRHPFuNo",
    authDomain: "test-a58d3.firebaseapp.com",
    projectId: "test-a58d3",
    storageBucket: "test-a58d3.appspot.com",
    messagingSenderId: "823294359406",
    appId: "1:823294359406:web:88c8b0aa967525381c337f"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();