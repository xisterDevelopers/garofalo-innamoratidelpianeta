// scrool trigger
document.addEventListener("DOMContentLoaded", function(event){
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
      .from("#boom", {
        scaleX: 0,
        scaleY: 0,
        rotation: -270,
        duration: 50,
        ease: "elastic"
      })
      .from("#lisa", {
        xPercent: 100,
        duration: 30
      })
      .from("#philipp", {
        xPercent: -100,
        duration: 60
      });
    
    ScrollTrigger.create({
       onUpdate: ({progress}) => aboutTl.progress() < progress ? aboutTl.progress(progress) : null,
      animation: aboutTl,
      trigger: "#about",
      start: "top",
      end: "=+2900",
      scrub: true,
      pin: true,
      id: "#about",
      
      //once: true,
        
      onLeave: function(self) {
        //self.disable()
        self.animation.progress(1)
      }
    });
});