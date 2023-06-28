// Check if password matches

// If it matches -> put success class
// If it doesn't match -> put error class in both password fields (for red border), add span to .input-style-password and add "*Passwords do not match" message.

const pwd = document.getElementById("password");
const confirmPwd = document.getElementById("confirm_password");
const message = document.getElementById("message");

pwd.addEventListener("keyup", check);
confirmPwd.addEventListener("keyup", check);

function check() {
    if (pwd.value == '' && confirmPwd.value == '') {
        pwd.style.borderColor = "";
        confirmPwd.style.borderColor = "";
        message.innerHTML = "";
    } else if (pwd.value == confirmPwd.value) {
        pwd.style.borderColor = "green";
        confirmPwd.style.borderColor = "green";
        message.style.color = "green";
        message.innerHTML = "Passwords matched!"
    } else {
        pwd.style.borderColor = "red";
        confirmPwd.style.borderColor = "red";
        message.style.color = "red";
        message.innerHTML = "*Passwords do not match."
    }
}


