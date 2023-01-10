// scrool trigger
document.addEventListener("DOMContentLoaded", function(event){

  const infograficaId = document.getElementById('infografica');
  const infograficaPosition = infograficaId.offsetTop;



   const marginTop =  -(infograficaPosition - 200);
   const ricicloRedId = document.getElementById('ricicloRed');
   const ricicloRedHeight = ricicloRedId.offsetHeight;
   const windowHeightPerCent = window.innerHeight * 15 / 100;
  window.innerWidth > 989 ? ( (windowHeightPerCent + ricicloRedHeight)  > window.innerHeight ? ricicloRedId.style.bottom = '0vh' :  ricicloRedId.style.bottom = '15vh') : '';
   //ricicloRedId.style.marginTop = window.innerWidth < 600 ? 0 : marginTop;
   ricicloRedId.style.marginTop =  marginTop;

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
     start: `bottom ${tmp}px`, 
    // start: window.innerWidth < 600 ?  `bottom ${tmpM}px` : `bottom bottom`, 
     end: `bottom ${tmp - ricicloRedHeight / 4}px`,
     ////markers: true,
     id: "#animation",
     scrub: true,
     //pin: true,
     
     //once: true,
       
     onLeave: function(self) {
       //self.disable()
       self.animation.progress(1)
     }
   });

  //desktop

      //  var action1 = gsap
      //  .timeline({
      //   defaults: {
      //     duration: 2000, 
      //     ease:'ease' 
      //   },

      //  scrollTrigger: {
      //    trigger: ".desktop",
      //    scrub:true,
      //    //markers: true,
      //    start: `top ${-infograficaPosition + 100}`,
      //    end: `top ${-infograficaPosition - 300}`, // new
      //  }
      // })
      //  .to(".arrow1D", {
      //   strokeDashoffset: 0,
      //   duration: 8000,
      //   ease: "ease",     
      // })

        aboutTl.eventCallback("onComplete", function() {

          var action1 = gsap
          .timeline({
           defaults: {
             duration: 2000, 
             ease:'ease' 
           },
          scrollTrigger: {
            trigger: ".arrow1D",
            scrub:true,
            //markers: true,
            start: "top 300px",
          }
         })
          .to(".arrow1D", {
           strokeDashoffset: 0,
           duration: 8000,
           ease: "ease",     
         })


         var action1M = gsap
         .timeline({
          defaults: {
            duration: 2000, 
            ease:'ease' 
          },
         scrollTrigger: {
           trigger: ".arrow1M",
           scrub:true,
           //markers: true,
           start: "100px 300px",
         }
        })
         .to(".arrow1M", {
          strokeDashoffset: 0,
          duration: 8000,
          ease: "ease",     
        })

        var action2 = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
      scrollTrigger: {
        trigger: ".arrow2D",
        scrub:true,
        //markers: true,
        start: "-100px 60%",
      }})
      .to(".arrow2D", {
       strokeDashoffset: 0,
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
      strokeDashoffset: 0,
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
      strokeDashoffset: 0,
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
     strokeDashoffset: 0,
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
     strokeDashoffset: 0,
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
    strokeDashoffset: 0,
    duration: 8000,
    ease: "ease"        
  })

        });

        

      //action1.delay(aboutTl.duration()); 
  //     var action2 = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
  //     scrollTrigger: {
  //       trigger: ".arrow2D",
  //       scrub:true,
  //       //markers: true,
  //       start: "top bottom",
  //       end: "bottom top", // new
  //     }})
  //     .to(".arrow2D", {
  //      strokeDashoffset: 0,
  //      duration: 5000,
  //      ease: "ease"        
  //    })
  //    var action3 = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
  //    scrollTrigger: {
  //      trigger: ".arrow3D",
  //      scrub:true,
  //      //markers: true,
  //      start: "top bottom",
  //      end: "bottom top", // new
  //    }})
  //    .to(".arrow3D", {
  //     strokeDashoffset: 0,
  //     duration: 5000,
  //     ease: "ease"        
  //   })
  //   var action4 = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
  //   scrollTrigger: {
  //     trigger: ".arrow4D",
  //     scrub:true,
  //     //markers: true,
  //     start: "top bottom",
  //     end: "bottom top", // new
  //   }})
  //   .to(".arrow4D", {
  //    strokeDashoffset: 0,
  //    duration: 5000,
  //    ease: "ease"        
  //  })


   //mobile 
//    var action1M = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
//    scrollTrigger: {
//      trigger: ".arrow1M",
//      scrub:true,
//      //markers: true,
//      start: "top bottom",
//      end: "bottom top", // new
//    }})
//    .to(".arrow1M", {
//     strokeDashoffset: 0,
//     duration: 5000,
//     ease: "ease"        
//   })
//   var action2M = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
//   scrollTrigger: {
//     trigger: ".arrow2M",
//     scrub:true,
//     //markers: true,
//     start: "top bottom",
//     end: "bottom top", // new
//   }})
//   .to(".arrow2M", {
//    strokeDashoffset: 0,
//    duration: 5000,
//    ease: "ease"        
//  })
//  var action3M = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
//  scrollTrigger: {
//    trigger: ".arrow3M",
//    scrub:true,
//    //markers: true,
//    start: "top bottom",
//    end: "bottom top", // new
//  }})
//  .to(".arrow3M", {
//   strokeDashoffset: 0,
//   duration: 5000,
//   ease: "ease"        
// })
// var action4 = gsap.timeline({defaults: {duration: 2000, ease:'ease' },
// scrollTrigger: {
//   trigger: ".arrow4M",
//   scrub:true,
//   //markers: true,
//   start: "top bottom",
//   end: "bottom top", // new
// }})
// .to(".arrow4M", {
//  strokeDashoffset: 0,
//  duration: 5000,
//  ease: "ease"        
// })
});