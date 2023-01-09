// scrool trigger
document.addEventListener("DOMContentLoaded", function(event){

  const infograficaPosition = document.getElementById('infografica').offsetTop;



   const marginTop =  -(infograficaPosition - 200);
   const ricicloRedId = document.getElementById('ricicloRed');
   ricicloRedId.style.bottom = '15vh';
   ricicloRedId.style.marginTop = marginTop;

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({
      ease: "none",
      duration: 2.5
    });
    

    let aboutTl = gsap
      .timeline({
        // defaults: {
        //     duration: 1
        // },
        paused: true
      })
      .to("#impegno", {
        opacity: 0,
        duration: 1000,
        ease: "ease"
      })
      .to("#infografica", {
        scale: 1,
        y: -infograficaPosition + 100,
        duration: 2000,
        ease: "ease"
      })
    
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
     start: "bottom 110%", 
     end: "bottom 60%",
     id: "#animation",
     scrub: true,
   //  pin: true,
     
     //once: true,
       
     onLeave: function(self) {
       //self.disable()
       self.animation.progress(1)
     }
   });


    //  ScrollTrigger.create({
    //   trigger: "#infografica",
    //   start: "bottom 100px", 
    //   end: "bottom top",
    //   pin: true
    // });
});