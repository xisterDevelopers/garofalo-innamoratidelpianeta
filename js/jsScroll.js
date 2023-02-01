// scrool trigger
document.addEventListener("DOMContentLoaded", function(event){

  const infograficaId = document.getElementById('infografica');
  const infograficaPosition = infograficaId.offsetTop;
  const infograficaHeight = infograficaId.offsetHeight;


  const impegnoId = document.getElementById('impegno');
  const impegnoHeight = impegnoId.offsetHeight;


  const animationId = document.getElementById('animation');

   const marginTop =  -(infograficaPosition - 200);
   const ricicloRedId = document.getElementById('ricicloRed');
   const ricicloRedHeight = ricicloRedId.offsetHeight;
   const windowHeightPerCent = window.innerHeight * 15 / 100;

   //window.innerWidth > 989 ? ( (windowHeightPerCent + ricicloRedHeight)  > window.innerHeight ? ricicloRedId.style.bottom = '0vh' :  ricicloRedId.style.bottom = '15vh') : '';
   //ricicloRedId.style.marginTop =     window.innerWidth > 989 ? marginTop : '60';
   ricicloRedId.style.marginTop = '60';

   let height = infograficaHeight + 50;
  // window.innerWidth > 989 ?  '' : animationId.style.height =  height;
   animationId.style.height =  height;

  const tmp = (windowHeightPerCent + ricicloRedHeight)  > window.innerHeight ? (window.innerHeight - (ricicloRedHeight + (marginTop * (3/2))) ) : window.innerHeight * (100-15) / 100 - (ricicloRedHeight + (marginTop * (3/2))); 


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
      .to(".arrow1", {
        strokeDashoffset: 90,
        duration: 500,
        ease: "ease",
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
     // markers: true ,    
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
      ease: "ease-in"
    })
    ScrollTrigger.create({
      onUpdate: ({progress}) => secondTl.progress() < progress ? secondTl.progress(progress) : null,
     animation: secondTl,
     trigger: "#animation",
      // start: window.innerWidth > 989 ? `bottom ${tmp}px` : 'bottom bottom',
      start: 'bottom bottom',
     end: `bottom ${tmp - ricicloRedHeight / 4}px`,
     id: "#animation",
     scrub: true,
     //markers: true,
       
     onLeave: function(self) {
       self.animation.progress(1)
     }
   });

        aboutTl.eventCallback("onComplete", function() {

        //   var action1 = gsap
        //   .timeline({
        //    defaults: {
        //      duration: 2000, 
        //      ease:'ease' 
        //    },
        //   scrollTrigger: {
        //     trigger: ".arrow1D",
        //     scrub:true,
        //     //markers: true,
        //     start: `top ${-infograficaPosition + 100}px`,
        //   }
        //  })
        //   .to(".arrow1D", {
        //    strokeDashoffset: 80,
        //    duration: 8000,
        //    ease: "ease",     
        //  })


        //  var action1M = gsap
        //  .timeline({
        //   defaults: {
        //     duration: 2000, 
        //     ease:'ease' 
        //   },
        //  scrollTrigger: {
        //    trigger: ".arrow1M",
        //    scrub:true,
        //    //markers: true,
        //    start: "100px 300px",
        //  }
        // })
        //  .to(".arrow1M", {
        //   strokeDashoffset: 80,
        //   duration: 8000,
        //   ease: "ease",     
        // })

        var action2 = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
      scrollTrigger: {
        trigger: ".arrow2D",
        scrub:true,
        //markers: true,
        start: "-100px 60%",
      }})
      .to(".arrow2D", {
       strokeDashoffset: 80,
       duration: 8000,
       ease: "ease"        
     })

     var action2M = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
     scrollTrigger: {
       trigger: ".arrow2M",
       scrub:true,
       //markers: true,
       start: "-100px 60%",
     }})
     .to(".arrow2M", {
      strokeDashoffset: 80,
      duration: 8000,
      ease: "ease"        
    })

      var action3 = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
     scrollTrigger: {
       trigger: ".arrow3D",
       scrub:true,
       //markers: true,
       start: "top 60%",
     }})
     .to(".arrow3D", {
      strokeDashoffset: 80,
      duration: 8000,
      ease: "ease"        
    })

    var action3M = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
    scrollTrigger: {
      trigger: ".arrow3M",
      scrub:true,
      //markers: true,
      start: "top 60%",
    }})
    .to(".arrow3M", {
     strokeDashoffset: 80,
     duration: 8000,
     ease: "ease"        
   })

   var action4 = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
    scrollTrigger: {
      trigger: ".arrow4D",
      scrub:true,
      //markers: true,
      start: "top 60%",
    }})
    .to(".arrow4D", {
     strokeDashoffset: 80,
     duration: 8000,
     ease: "ease"        
   })

   var action4M = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
   scrollTrigger: {
     trigger: ".arrow4M",
     scrub:true,
     //markers: true,
     start: "top 60%",
   }})
   .to(".arrow4M", {
    strokeDashoffset: 80,
    duration: 8000,
    ease: "ease"        
    })
  });


    var action1M = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
    scrollTrigger: {
      trigger: ".footer",
      scrub:true,
     // markers: true,
      start: "-1000 60%",
      end: "bottom bottom",
   }})
   .to(".downButton", {
    opacity: 1,
    duration: 2000,
    ease: "ease"        
  })

});