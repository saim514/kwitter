// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBOtKEbCjy3_kKin7QDLPS0ynizQ0gJtM4",
      authDomain: "kwitter-a6923.firebaseapp.com",
      projectId: "kwitter-a6923",
      storageBucket: "kwitter-a6923.appspot.com",
      messagingSenderId: "993084911945",
      appId: "1:993084911945:web:4152c263bd15dd71ce2a98"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
