var signUpForm = document.getElementById("sign-up-form");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var email = emailInput.value;
    var password = passwordInput.value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        alert("An error occurred");

        console.log(errorCode);
        console.log(errorMessage);
    });
});

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        var name, email, photoUrl, uid, emailVerified;

        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;

        alert("Welcome " + email);
    } else {
        // No user is signed in.
    }
});