/*GO to top btn */
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let rootElement = document.documentElement;
scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
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
.from("header .nav-links", 
{
    opacity:0,
    ease:"slow",
    stagger: .5
})

.from(".hero .left-sec", 
{
    x: -1000,
    opacity:0,
    ease:"slow",
})

.from(".hero .right-sec", 
{
    x: 1000,
    opacity:0,
    ease:"slow",
})

/*scoll reveal */
gsap.from(".top-choices-sec .card", {
    scrollTrigger: ".top-choices-sec .card",
    duration:1.5,
    delay: 0.5,
    start: "center center",
    opacity:0,
    ease:"slow",
    end: "20px 80%",
    y: 100,
    stagger: .5
  })

  gsap.from(".some-reason-sec .left-sec",{
      scrollTrigger : ".some-reason-sec .left-sec",
      duration : 1.5,
      start : "center center",
      opacity : 0,
      end: "center top",
      ease : "slow",
      x: "-500%" ,
      delay: 1,
      
  })

  gsap.from(".some-reason-sec .right-sec",{
    scrollTrigger : ".some-reason-sec .left-sec",
    duration : 1.5,
    start : "center center",
    opacity : 0,
    end: "center top",
    ease : "slow",
    x: "500%" ,
    delay: 1,
    
})

gsap.from(".our-afflation-sec h1", {
    scrollTrigger: ".our-afflation-sec h1",
    duration:1.5,
    delay: 0.5,
    start: "center bottom",
    opacity:0,
    ease:"slow",
    end: "center top",
    y: -100,
  })




gsap.from(".our-afflation-sec img", {
    scrollTrigger: ".our-afflation-sec img",
    duration:1.5,
    delay: 0.5,
    start: "center bottom",
    opacity:0,
    ease:"slow",
    end: "center top",
    y: 100,
  })

  gsap.from(".our-course-sec .container h1", {
    scrollTrigger: ".our-course-sec .container h1",
    duration:1.5,
    delay: 0.5,
    start: "center center",
    opacity:0,
    ease:"slow",
    end: "20px 80%",
    y: -100,
  })


  gsap.from(".our-course-sec .cards .card", {
    scrollTrigger: ".our-course-sec .cards .card",
    duration:1.5,
    delay: 0.5,
    start: "center center",
    opacity:0,
    ease:"slow",
    end: "20px 80%",
    y: 100,
    stagger: .5
  })

  gsap.from(".review-sec .container h1", {
    scrollTrigger: ".our-course-sec .container h1",
    duration:1.5,
    delay: 0.5,
    start: "bottom bottom",
    end : "+=500",
    opacity:0,
    ease:"slow",
    end: "20px 80%",
    y: -100,
  })

  gsap.from(".review-sec .bottom .cards .card", {
    scrollTrigger: ".review-sec .bottom .cards .card",
    duration:1.5,
    delay: 0.5,
    start: "center start",
    opacity:0,
    ease:"slow",
    end: "20px 80%",
    y: 250,
    stagger: .5,
  })

































