var firebaseConfig = {
  apiKey: "AIzaSyC46aCBACceEpakhIqciYU1AxZXKSIj0oU",
  authDomain: "ibeam-info-tech-form.firebaseapp.com",
  databaseURL: "https://ibeam-info-tech-form-default-rtdb.firebaseio.com",
  projectId: "ibeam-info-tech-form",
  storageBucket: "ibeam-info-tech-form.appspot.com",
  messagingSenderId: "250923473910",
  appId: "1:250923473910:web:437bf64c3bcd0e6d8e85d7",
  measurementId: "G-3E8E3SD98W",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

/* Refrernce Firebase */

var messageRef = firebase.database().ref("message");

document.getElementById("contactForm").addEventListener("submit", sumbitForm);

function sumbitForm(e) {
  e.preventDefault();

  /* Get all Values */
  var firtsName = getAllValues("fname");
  var LastName = getAllValues("lname");
  var email = getAllValues("email");
  var phoneNumber = getAllValues("phoneNumber");
  var commentArea = getAllValues("commentArea");

  /* Save Messages */
  saveMessage(firtsName, LastName, email, phoneNumber, commentArea);

  alert("Form Sumbited");
}

/* Function To get all values from form */
function getAllValues(id) {
  return document.getElementById(id).value;
}

/* Save Messages To Firebase  */

function saveMessage(firtsName, LastName, email, phoneNumber, commentArea) {
  var newMessagesRef = messageRef.push();
  newMessagesRef.set({
    firtsName: firtsName,
    LastName: LastName,
    email: email,
    phoneNumber: phoneNumber,
    commentArea: commentArea,
  });
}

/*GO to top btn */
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let rootElement = document.documentElement;
scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/*NAV bar responsive*/

let handBurger = document.querySelector(".header .fas.fa-bars");
let navBar = document.querySelector(".nav-links");

handBurger.addEventListener("click", () => {
  navBar.classList.toggle("show");
});

/*gsap animation */

let tl = gsap.timeline({ defaults: { duration: 0.6 } });

tl.from(".scrollToTopBtns", {
  x: 200,
  delay: 0.5,
  opacity: 0,
  ease: "slow",
})
  .from("header", {
    y: -200,
    opacity: 0,
    ease: "slow",
  })
  .from(".contact-us-sec h1", {
    y: -100,
    opacity: 0,
    ease: "slow",
  })

  .from("header .logo", {
    x: -200,
    opacity: 0,
    ease: "slow",
  })
  .from(".contact-us-sec .left", {
    x: -100,
    opacity: 0,
    ease: "slow",
  })

  .from(".contact-us-sec .right", {
    x: 100,
    opacity: 0,
    ease: "slow",
  });
