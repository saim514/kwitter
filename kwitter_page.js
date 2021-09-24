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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(message_data);
console.log(firebase_message_id);
Name = message_data['name'];
like = message_data['like'];
message = message_data['message'];
name_with_tag = "<h4>" + Name + "<img class='user_tick' src='tick.png'></h4> ";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + like + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}



function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       likes:0     
      });
      document.getElementById("msg").innerHTML = "";

}