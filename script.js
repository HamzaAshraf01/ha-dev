// this code is copied form codepen to combine scroll trigger and locomotiv (puted in fuction)
function init(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  init ()

//   rest part start

// sherry JS part
Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.4,
});
Shery.makeMagnet(".magnet-icon");

Shery.hoverWithMediaCircle(".hvr-media", {
  
   videos: ["c.mp4", "b.mp4"],

});


// sherry part end







var tl = gsap.timeline();

tl.to("#page-1 h1" , {
  opacity: 0 ,
  scrollTrigger:{
    trigger: "#h1" ,
    pin: true ,
    scroller: "#main" ,
    start: "top top" ,
    end: "+=100%" ,
    scrub: true ,
    
  }

},"same");

tl.to("#page-1" , {
  scale: 0.6 ,
  duration: 1 ,
  ease: "none" ,
  scrollTrigger:{
    trigger: "#page-1" ,
    scroller: "#main" ,
    pin: true ,
    start: "top top" ,
    end: "+=100%" ,
    scrub: true ,
    
  }




}, "same");

tl.to("#page-2" , {
  y:-100 , 
  scrollTrigger:{
    trigger: "#page-2" ,
    scroller: "#main" ,
    start: "top 200%" ,
    end: "bottom bottom" ,
    scrub: true ,
    

  }






})

var tl2 = gsap.timeline({scrollTrigger:{
  trigger:"#page-3",
  scroller: "#main" ,
  // markers:true,
  start:"50% 50%",
  end:"+=100%",
  scrub:0.5,
  pin:true
}});

tl2
.to("#center",{
 minHeight: "100vh",
},'a')
.to("#top",{
  top: "-50%",
},'a')
.to("#bottom",{
  bottom: "-50%",
},'a')
.to("#top-h1",{
  top: "60%"
},'a')
.to("#bottom-h1",{
  bottom: "-30%"
},'a')

.from("#div-content" , {
  scale: 0.8 ,
  opacity: 0 ,
  'webkitFilter': 'blur(10px)',
})
.to("#div-content" , {
  scale: 1 ,
  opacity: 1 ,
  'webkitFilter': 'blur(0px)',
})

tl.from("#image-1" ,  {
  scale: 1.2 ,
  duration: 3 ,
  ease: "power4" ,
  scrollTrigger: {
    trigger:"#image-1" ,
    scroller: "#main" ,
    start: "top top" ,
    scrub: 0.5 


  }




} ,"aa")

tl.from("#left-img" , {
    x: 350 ,
    opacity: 0 ,
    duration: 3 ,
    ease: "power4" ,
    scrollTrigger: {
      trigger:"#left-img" ,
      scroller: "#main" ,
      start: "top top" ,
      scrub: 0.5 


    }
},"aa")
tl.from("#right-img" , {
    x: -350 ,
    opacity: 0 ,
    duration: 3 ,
    ease: "power4" ,
    scrollTrigger: {
      trigger:"#right-img" ,
      scroller: "#main" ,
      start: "top top" ,
      scrub: 0.5 


    }
},"aa")

tl.to("#div-clip", {
  scale: 200 ,
  scrollTrigger: {
    trigger: "#div-clip" ,
    scroller: "#main" ,
    start: "center center" ,
    end: "+=100%" ,
    scrub: 0.5 ,
    pin: "#page-4"


  }




})
