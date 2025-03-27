// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCB0-m4O2Y7w5PoMb_Y73suuabivsAPB3Q",
authDomain: "signin-signup-aa194.firebaseapp.com",
projectId: "signin-signup-aa194",
storageBucket: "signin-signup-aa194.firebasestorage.app",
messagingSenderId: "988862249883",
appId: "1:988862249883:web:f9f60484bc2a3a7a9e7f3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let signUpBtn = document.getElementById("signupbtn");
signUpBtn.addEventListener("click", function(event){
    event.preventDefault();

    // inputs
    const email = document.getElementById("upemail").value;
    const password = document.getElementById("uppassword").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("Account created successfully");
        document.getElementById("signUp").style.display = "none";
        document.getElementById("signIn").style.display = "block";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });   
})


let signInBtn = document.getElementById("signinbtn");
signInBtn.addEventListener("click", function(event){
    event.preventDefault();

    // inputs
    const email = document.getElementById("inemail").value;
    const password = document.getElementById("inpassword").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Signin successfully");
        document.getElementById("signUp").style.display = "block";
        document.getElementById("signIn").style.display = "none";
    })
    .catch((error) => {
        alert(`Error : ${error.message}`);
    });
})

document.querySelector(".inbtn").addEventListener("click", function(){
    document.getElementById("signUp").style.display = "none";
    document.getElementById("signIn").style.display = "block";
})

document.querySelector(".upbtn").addEventListener("click", function(){
    document.getElementById("signUp").style.display = "block";
    document.getElementById("signIn").style.display = "none";
})

document.getElementById("forgotps").addEventListener("click", function() {
    let email = prompt("Enter your email to reset password:");
    if (email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset mail sent!");
            })
            .catch((error) => {
                alert(`Error: ${error.message}`);
            });
    } else {
        alert("Please enter a valid email.");
    }
});