// scrool trigger
document.addEventListener("DOMContentLoaded", function(event){

  const infograficaPosition = document.getElementById('infografica').offsetTop;



   const marginTop =  -(infograficaPosition - 200);
   const ricicloRedId = document.getElementById('ricicloRed');
   window.innerWidth < 968 ? '' :  ricicloRedId.style.bottom = '15vh';
   ricicloRedId.style.marginTop = window.innerWidth < 600 ? 0 : marginTop;

    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
    gsap.defaults({
      ease: "none",
      duration: 1.5
    });
    

    let aboutTl = gsap
      .timeline({
         defaults: {
          duration: 2000, 
          ease:'ease' 
         },
        paused: true
      })
      .to("#impegno", {
        opacity: 0,
        duration: 1000,
        ease: "ease"
      })
      .to("#infografica", {
        scale: window.innerWidth < 600 ? 2.8 : 1,
        y: -infograficaPosition + 100,
        duration: 2000,
        ease: "ease"
      })
      .fromTo(".patharrowLine1", {drawSVG: "100% 100%"}, {drawSVG: "0% 100%"})
    
    ScrollTrigger.create({
       onUpdate: ({progress}) => aboutTl.progress() < progress ? aboutTl.progress(progress) : null,
      // onUpdate: self => console.log("progress:", self.progress),
       animation: aboutTl,
      trigger: "#animation",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      id: "#about",
      
      //once: true,
        
      onLeave: function(self) {
        //self.disable()
        self.animation.progress(1)
      }
    });

  //----------------------------------
    
    let secondTl = gsap
    .to("#ricicloRed", {
      opacity: 1,
      duration: 1000,
      ease: "ease"
    })

    ScrollTrigger.create({
      onUpdate: ({progress}) => secondTl.progress() < progress ? secondTl.progress(progress) : null,
      animation: secondTl,
     trigger: "#animation",
     start: "bottom 100%", 
     end: "bottom 60%",
     markers: true,
     id: "#animation",
     scrub: true,
   //  pin: true,
     
     //once: true,
       
     onLeave: function(self) {
       //self.disable()
       self.animation.progress(1)
     }
   });


  //  gsap.to(".arrow2", {
  //   scrollTrigger : {
  //     trigger: ".arrow2",
  //     start: "top bottom",
  //     end: "bottom bottom",
  //     //toggleActions: "play none reverse reset",
  //     //markers: true,
  //     scrub: true,
  //   },
  //   opacity: 1,
  //   duration: 1000
  // });
  // gsap.to(".arrow3", {
  //   scrollTrigger : {
  //     trigger: ".arrow3",
  //     start: "top bottom",
  //     end: "bottom bottom",
  //     //toggleActions: "play none reverse reset",
  //     //markers: true,
  //     scrub: true,
  //   },
  //   opacity: 1,
  //   duration: 1000
  // });
  // gsap.to(".arrow4", {
  //   scrollTrigger : {
  //     trigger: ".arrow4",
  //     start: "top bottom",
  //     end: "bottom bottom",
  //     //toggleActions: "play none reverse reset",
  //     //markers: true,
  //     scrub: true,
  //   },
  //   opacity: 1,
  //   duration: 1000
  // });



  //motion path

//   var action1 = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
//   scrollTrigger: {
//     trigger: ".arrow1",
//     scrub:0,
//     start: "top bottom",
//     end: "bottom bottom", // new
//   }})
// .fromTo(".patharrowLine1", {drawSVG: "100% 100%"}, {drawSVG: "0% 100%"}, 0)

var action2 = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
scrollTrigger: {
  trigger: ".arrow2",
  scrub:0,
  start: "100px bottom",
  end: "bottom bottom", // new
}})
.fromTo(".patharrowLine2", {drawSVG: "100% 100%"}, {drawSVG: "0% 100%"}, 0)
.fromTo(".patharrow2", {drawSVG: "100% 100%"}, {drawSVG: "0% 100%"}, 0)
//.fromTo(".patharrow2", {opacity: "0"}, {opacity: "1"}, 1)

var action3 = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
scrollTrigger: {
  trigger: ".arrow3",
  scrub:0,
  //markers: true,
  start: "100px bottom",
  end: "bottom bottom", // new
}})
.fromTo(".patharrowLine3", {drawSVG: "100% 100%"}, {drawSVG: "0% 100%"}, 0)
.fromTo(".patharrow3", {drawSVG: "100% 100%"}, {drawSVG: "0% 100%"}, 0)


var action4 = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
scrollTrigger: {
  trigger: ".arrow4",
  scrub:0,
//  markers: true,
  start: "40% bottom",
  end: "200% bottom",
}})
.fromTo(".patharrowLine4", {drawSVG: "100% 100%"}, {drawSVG: "0% 100%"}, 0)
.fromTo(".patharrow4", {drawSVG: "100% 100%"}, {drawSVG: "0% 100%"}, 0)
});