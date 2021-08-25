import firebase from 'firebase'
require("@firebase/firestore")


  const firebaseConfig = {
    apiKey: "AIzaSyARU3FqkOAkssjzYNsrFArXeE6MBynPU7M",
    authDomain: "complaint-forum-fa9a4.firebaseapp.com",
    projectId: "complaint-forum-fa9a4",
    storageBucket: "complaint-forum-fa9a4.appspot.com",
    messagingSenderId: "460727509821",
    appId: "1:460727509821:web:b95a7459aa8152a7491b54"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

