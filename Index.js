function login() {
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;

    // Use a simple regular expression to check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email) || password.trim() === "") {
        alert("Please enter a valid Email and Password!");
    } else {
        alert("Login successful");
        window.location.assign('./Amazon-clone/Index.html');
    }
}
function register() {
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;

    if (email.trim() === "" || password.trim() === "") {
        alert("Please enter your Email and Password!");
    } else {
        alert("Registered successfully");
        document.getElementById("Email").value = "";
        document.getElementById("Password").value = "";
    }
}
