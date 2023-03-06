// scrool trigger
document.addEventListener("DOMContentLoaded", function(event){

  const infograficaId = document.getElementById('infografica') ? document.getElementById('infografica') : null;
  const infograficaPosition = infograficaId?.offsetTop;
  const infograficaHeight = infograficaId?.offsetHeight;

  const animationId = document.getElementById('animation') ? document.getElementById('animation') : null;

   const marginTop =  -(infograficaPosition - 200);
   const ricicloId = document.getElementById('riciclo') ? document.getElementById('riciclo') : null;
   const ricicloHeight = ricicloId?.offsetHeight;
   const windowHeightPerCent = window.innerHeight * 15 / 100;

   //window.innerWidth > 989 ? ( (windowHeightPerCent + ricicloHeight)  > window.innerHeight ? ricicloId.style.bottom = '0vh' :  ricicloId.style.bottom = '15vh') : '';
   //ricicloId.style.marginTop =     window.innerWidth > 989 ? marginTop : '60';

    ricicloId ?  ricicloId.style.marginTop = '60' : null;
     let height = infograficaHeight + 50;

  // window.innerWidth > 989 ?  '' : animationId.style.height =  height;

  animationId ? animationId.style.height =  height : null ;
  const tmp = (windowHeightPerCent + ricicloHeight)  > window.innerHeight ? (window.innerHeight - (ricicloHeight + (marginTop * (3/2))) ) : window.innerHeight * (100-15) / 100 - (ricicloHeight + (marginTop * (3/2))); 

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
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
        scale: 1,
        y: -infograficaPosition + 100,
        duration: 2000,
        ease: "ease"
      })
      .to(".arrow1line", {
        strokeDashoffset: 90,
        duration: 500,
        ease: "ease",
      })
      .to(".arrow1", {
        strokeDashoffset: 90,
        duration: 500,
        ease: "ease",
      })
   
    if(window.innerWidth > 599) {
    ScrollTrigger.create({
       onUpdate: ({progress}) => aboutTl.progress() < progress ? aboutTl.progress(progress) : null,
      // onUpdate: self => console.log("progress:", self.progress),
       animation: aboutTl,
      trigger: "#animation",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: true,
     // markers: true ,    
      id: "#about",
      
      //once: true,
        
      onLeave: function(self) {
        //self.disable()
        self.animation.progress(1)
      }
    });
  }

  //----------------------------------
    
    let secondTl = gsap
    .to("#riciclo", {
      opacity: 1,
      duration: 1000,
      ease: "ease-in"
    })
    ScrollTrigger.create({
      onUpdate: ({progress}) => secondTl.progress() < progress ? secondTl.progress(progress) : null,
     animation: secondTl,
     trigger: "#animation",
      // start: window.innerWidth > 989 ? `bottom ${tmp}px` : 'bottom bottom',
      start: 'bottom bottom',
     end: `bottom ${tmp - ricicloHeight / 4}px`,
     id: "#animation",
     scrub: true,
     //markers: true,
       
     onLeave: function(self) {
       self.animation.progress(1)
     }
   });

     aboutTl.eventCallback("onComplete", function() {

      gsap.timeline({defaults: {duration: 2000, ease:'ease' },
      scrollTrigger: {
        trigger: ".arrow2Dline",
        scrub:true,
        //markers: true,
        start: "-100px 70%",
      }})
      .to(".arrow2Dline", {
       strokeDashoffset: 80,
       duration: 8000,
       ease: "ease"        
     })
     .to(".arrow2D", {
      strokeDashoffset: 80,
      duration: 8000,
      ease: "ease"        
    })

     gsap.timeline({defaults: {duration: 2000, ease:'ease' },
     scrollTrigger: {
       trigger: ".arrow3Dline",
       scrub:true,
       //markers: true,
       start: "top 70%",
     }})
     .to(".arrow3Dline", {
      strokeDashoffset: 80,
      duration: 8000,
      ease: "ease"        
    })
    .to(".arrow3D", {
      strokeDashoffset: 80,
      duration: 8000,
      ease: "ease"        
    })

    gsap.timeline({defaults: {duration: 2000, ease:'ease' },
    scrollTrigger: {
      trigger: ".arrow4Dline",
      scrub:true,
      //markers: true,
      start: "top 70%",
    }})
    .to(".arrow4Dline", {
     strokeDashoffset: 80,
     duration: 8000,
     ease: "ease"        
   })
   .to(".arrow4D", {
    strokeDashoffset: 80,
    duration: 8000,
    ease: "ease"        
  })
});
    
    gsap.timeline({defaults: {duration: 2000, ease:'ease' },
    scrollTrigger: {
      trigger: ".footer",
      scrub:true,
    //  markers: true,
      start: "-1000 60%",
      end: "bottom bottom",
    }})
      .to(".downButton", {
      opacity: 1,
      duration: 2000,
      ease: "ease"        
      })

  });

