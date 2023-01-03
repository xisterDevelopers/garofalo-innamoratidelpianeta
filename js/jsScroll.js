// scrool trigger
document.addEventListener("DOMContentLoaded", function(event){

  const infograficaPosition = document.getElementById('infografica').offsetTop;



  const marginTop =  -(infograficaPosition - 200);
  const ricicloRedId = document.getElementById('ricicloRed');
  const ricicloRedTop = ricicloRedId.offsetTop - (marginTop);
  ricicloRedId.style.marginTop = marginTop;

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({
      ease: "none",
      duration: 2.5
    });
    
    let ricicloRedTl = gsap
    .timeline({
      // defaults: {
      //     duration: 1
      // },
      paused: true
    })
    .to("#ricicloRed", {
      opacity: 1,
      duration: 2000,
      ease: "ease"
    })

    let aboutTl = gsap
      .timeline({
        // defaults: {
        //     duration: 1
        // },
        paused: true
      })
      .to("#impegno", {
        opacity: 0,
        duration: 2000,
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

     ScrollTrigger.create({
      trigger: "#ricicloRed",
      start: "top 100px", 
      end: "bottom top",
      pin: true
    });
});