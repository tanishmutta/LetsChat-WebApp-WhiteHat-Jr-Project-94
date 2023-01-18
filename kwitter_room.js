var firebaseConfig = {
    apiKey: "AIzaSyCUbvuq2VDtdSUCvoOaNRQoUdq37Cord-U",
    authDomain: "classtest-dabf4.firebaseapp.com",
    databaseURL: "https://classtest-dabf4-default-rtdb.firebaseio.com",
    projectId: "classtest-dabf4",
    storageBucket: "classtest-dabf4.appspot.com",
    messagingSenderId: "213270467649",
    appId: "1:213270467649:web:3ac48c835f3f12ea4ae2c0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

   function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name" , room_name);
    window.location = "kwitter_page.html"; 
   }