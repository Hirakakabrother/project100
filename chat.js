// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC3egzdFneX1Ymc4Q5du8Y8IM8mWOKSAZo",
    authDomain: "letschatwebapp-8bd9e.firebaseapp.com",
    databaseURL: "https://letschatwebapp-8bd9e-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-8bd9e",
    storageBucket: "letschatwebapp-8bd9e.appspot.com",
    messagingSenderId: "679748029082",
    appId: "1:679748029082:web:bd761d71085bab0eec2d23"
  };
  
  // Initialize Firebase

//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



