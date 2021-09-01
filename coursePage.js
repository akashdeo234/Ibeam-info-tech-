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
/*indivitual course */
.from(".indi-course-sec .container .img-container",
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



/* course gsap */
gsap.from(".our-course-sec .container h1", {
  scrollTrigger: ".our-course-sec .container h1",
  duration:3,
  delay: 1.5,
  start: "center center",
  opacity:0,
  ease:"slow",
  end: "20px 80%",

})


gsap.from(".our-course-sec .cards .card", {
  scrollTrigger: ".card",
  duration:3,
  delay: 0.5,
  start: "bottom center",
  opacity:0,
  ease:"slow",
  end: "20px 80%",
  y: 100,
  stagger: .8,
})


/*indivitual course gsap */
gsap.from(".indi-course-sec .container .text-contents .left",{
  scrollTrigger: ".left",
  duration:3,
  delay: 0.5,
  start: "bottom top",
  opacity:0,
  ease:"slow",
  end: "20px 80%",
  stagger:.5,
  x:-800
})

gsap.from(".indi-course-sec .container .text-contents .right",{
  scrollTrigger: ".right",
  duration:3,
  delay: 0.5,
  start: "center top",
  opacity:0,
  ease:"slow",
  end: "20px 80%",
  stagger:.5,
  x:800
})