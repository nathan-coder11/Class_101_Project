const firebaseConfig = {
    apiKey: "AIzaSyCcFwrQ9QzBTrr7jhlZzWAHMVxXYloTGSg",
    authDomain: "let-s-chat-b31c6.firebaseapp.com",
    databaseURL: "https://let-s-chat-b31c6-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-b31c6",
    storageBucket: "let-s-chat-b31c6.appspot.com",
    messagingSenderId: "491360610280",
    appId: "1:491360610280:web:9959ee15d55d16e169265d"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code

 //End code
 });});}
getData();