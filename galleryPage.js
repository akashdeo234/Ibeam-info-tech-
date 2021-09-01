/*GO to top btn */
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let rootElement = document.documentElement;
scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

/*NAV bar responsive*/

let handBurger = document.querySelector('.header .fas.fa-bars');
let navBar = document.querySelector('.nav-links');

handBurger.addEventListener("click",()=>{
    navBar.classList.toggle("show");
})

/*gsap animation */

let tl = gsap.timeline({defaults:{duration: 1 }})

tl
.from(".scrollToTopBtns",
{
  x: 200,
  delay: 0.5,
  opacity:0,
  ease : "slow",
})
.from("header", 
{
    y: -200,
    opacity:0,
    ease:"slow",
})

.from("header .logo", 
{
    x: -200,
    opacity:0,
    ease:"slow",
})


 