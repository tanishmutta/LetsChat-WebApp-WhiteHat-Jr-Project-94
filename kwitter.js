function login() {
    user_name = document.getElementById("username_input").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html"
}