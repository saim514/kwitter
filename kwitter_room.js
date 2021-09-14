// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBOtKEbCjy3_kKin7QDLPS0ynizQ0gJtM4",
      authDomain: "kwitter-a6923.firebaseapp.com",
      databaseURL: "https://kwitter-a6923-default-rtdb.firebaseio.com",
      projectId: "kwitter-a6923",
      storageBucket: "kwitter-a6923.appspot.com",
      messagingSenderId: "993084911945",
      appId: "1:993084911945:web:4152c263bd15dd71ce2a98"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML  = "Welcome " + user_name + " !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name-" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr> ";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();
function addRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child("room_name").update({
   purpose: "add room name"
   });

   localStorage.setItem("room_name",room_name);

   window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}