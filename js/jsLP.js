

// -------------------------------------------------------------------- FUNCTION READY --------------------------------------------------------------------------------------

const ready = (selector, callback) => {
  window.addEventListener('DOMContentLoaded', function () {
    const elems = [...document.querySelectorAll(selector)];
    if (elems.length) {
      for (let elem of elems) {
        callback(elem);
      }
    }
  });
};


// ------------------------------------------------------------------- BURGER MENU DROP DOWN --------------------------------------------------------------------------------------
function collapse () {
  var breakpointMobile = 768;
  var header = document.getElementById("header");
  var collapsedList = document.getElementById("collapsedList");
  var collapse = document.getElementById("burger");

  if((window.document.body.clientWidth < breakpointMobile)) {
    if(collapse.classList.contains('collapse')) {
      collapse.classList.remove("collapse");
      collapsedList.classList.remove("collapsed");
      header.classList.remove("collapsedHeader")
    }
    else {
      collapse.classList.add('collapse');
      collapsedList.classList.add('collapsed');
      header.classList.add("collapsedHeader")
    }
  }
}

// ------------------------------------------------------------------- SCROLL ANCORE MENU' --------------------------------------------------------------------------------------
function scrollAncora (id) {
  collapse();
  window.scroll({
    top: document.getElementById(id)?.getBoundingClientRect().top + window.scrollY - 100,
    behavior: 'smooth'
  });
}


// -------------------------------------------------------------------- READY --------------------------------------------------------------------------------------

ready('.counter', (stat) => {

  // -------------------------------------------------------------------- ANIMAZIONE NUMERI --------------------------------------------------------------------------------------


  // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
  const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?(\d+)?/;
  const time = 200;
  let result = [...patt.exec(stat.textContent)];
  let fresh = true;
  let ticks;
  
  // Remove first full match from result array (we dont need the full match, just the individual match groups).
  result.shift();
  // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
  result = result.filter(res => res != null);

  while (stat.firstChild) {
    stat.removeChild(stat.firstChild);
  }

  for (let res of result) {
    if (isNaN(res)) {
      stat.insertAdjacentHTML('beforeend', `<span>${res}</span>`);
    }
    else {
      for (let i = 0; i < res.length; i++) {
        stat.insertAdjacentHTML('beforeend',
          `<span data-value="${res[i]}">
            <span>&ndash;</span>
            ${Array(parseInt(res[i]) + 1).join(0).split(0).map((x, j) => `
              <span>${j}</span>
            `).join('')}
          </span>`
        );
      }
    }
  }

  ticks = [...stat.querySelectorAll('span[data-value]')];

  let activate = () => {
    let top = stat.getBoundingClientRect().top;
    let offset = (window.innerHeight * 3 / 4);

    setTimeout(() => {
      fresh = false;
    }, time);

    if (top < offset) {
      setTimeout(() => {
        for (let tick of ticks) {
          let dist = parseInt(tick.getAttribute('data-value')) + 1;
          tick.style.transform = `translateY(-${(dist) * 100}%)`
        }
      }, fresh ? time : 0);
      window.removeEventListener('scroll', activate);
    }
  }
  window.addEventListener('scroll', activate);
  activate();


  // -------------------------------------------------------------------- CLICK FUORI DROP DOWN  --------------------------------------------------------------------------------------

    function handleClickOutside (event) {
      var header = document.getElementById("header");
    if(!header.contains(event.target)) {
        collapse();
    }
    }
    window.addEventListener("click", handleClickOutside, true);

// -------------------------------------------------------------------- SCROLL ANIMAZIONE SECTION  --------------------------------------------------------------------------------------

  var ypos = window.pageYOffset;
  var height = window.innerHeight;
  var calc = ypos + height;
  var sectionArr = document.getElementsByTagName("section");
  for(let x = 0; x < sectionArr.length; x++) {
      if(calc > (sectionArr[x].offsetTop + 200 ) )
      sectionArr[x].classList.add("visible");
   }

      function Scroll () {
      var ypos = window.pageYOffset;
      var height = window.innerHeight;
      var calc = ypos + height;

      var sectionArr = document.getElementsByTagName("section");
        for(let x = 0; x < sectionArr.length; x++) {
            if(calc > (sectionArr[x].offsetTop + 200 ) )
            sectionArr[x].classList.add("visibleScroll");
        }
      }
      window.addEventListener("scroll", Scroll);


// -------------------------------------------------------------------- SCROLL ANIMAZIONE PARALLASSE  --------------------------------------------------------------------------------------

const elArr = document.getElementsByClassName('smooth');
//window.onwheel = smooth;

function smooth(event) {
  event.preventDefault();
  smoothY += event.deltaY * -0.04;
  // smoothY = Math.max(Math.min(6, smoothY), -6);
  smoothY = Math.min(Math.max(smoothY, -26), 40 );
  // Apply transform
  for(let x = 0; x < elArr.length; x++) {
    elArr[x].style.transform = `translateY(${smoothY}px)`;
 }
}
let smoothY = 1;


// -------------------------------------------------------------------- SCROLL ANIMAZIONE HERO + INFOGRAFICA  --------------------------------------------------------------------------------------

// var heroAnimation = document.getElementById("heroAnimation");

// let smoothInfograficaY=1,
//     smoothInfograficaScale=1,
//     smoothFirstTextY=1,
//     smoothLastTextY=1;

//     var ricicloRed = document.getElementById("ricicloRed");
//     var firsText = document.getElementById('impegno');
//     var infografica = document.getElementById('infografica');
//     var afterHero = document.getElementById('afterHeroAnimation');
    
//     var x = heroAnimation.offsetHeight;   // il div è 250vh   
//     var z = x +  heroAnimation.offsetTop;

// let  lastKnownPos = 0,
//   scrollDir,
//   scrollAmount,
//   scrollTotalAmount = 0,
//   currYPos;


//   let stopBool = false;
//   window.addEventListener('wheel', (e) => {

//   let ypos = window.pageYOffset,
//   height = window.innerHeight,
//   calc = ypos + height;

//   currYPos = ypos ? window.pageYOffset : document.body.scrollTop;
//   scrollDir = lastKnownPos > currYPos ? 'up' : lastKnownPos < currYPos ? 'down' : 'stop';
//   scrollAmount = Math.abs(lastKnownPos - currYPos);
//   scrollTotalAmount += scrollAmount;

//   lastKnownPos = currYPos;

  //  ----------------------------------- first text -------------------------
      //  if(
      //  ((ypos > (heroAnimation.offsetTop + (firsText.offsetHeight / 2)) && scrollDir == 'down'))  ||
      //   ((ypos < (heroAnimation.offsetTop + (firsText.offsetHeight))) && scrollDir== 'up')
      //  ) {
       
      //   smoothFirstTextY += e.deltaY * -0.002;
      //   smoothFirstTextY = Math.min(Math.max(smoothFirstTextY, 0), 1 );
      //   firsText.style.opacity = `${smoothFirstTextY}`;
         
      //    }

      //  ----------------------------------- infografica -------------------------

        //   if(
        //     (ypos > (heroAnimation.offsetTop + (firsText.offsetHeight)))
        //     ) {

        //      smoothInfograficaScale += e.deltaY * -0.001;

        //   stopBool= false;
        //  if(((smoothInfograficaScale * 2.5) >= 1) && ((smoothInfograficaScale * 2.5) <= 2.5)) {
        //        infografica.style.transform = `scale(${smoothInfograficaScale * 2.5})`;
        //        stopBool= true;
        //      }
  
        //  if(smoothInfograficaScale < 2.5 && !stopBool)  {
        //   smoothInfograficaY += e.deltaY * -0.04;
        //   smoothInfograficaY = Math.min(Math.max(smoothInfograficaY, -100), 0 );
        //   infografica.style.transform = `translateY(${smoothInfograficaY}%) scale(1)`;
        //  }
        // }

      //  ----------------------------------- riciclo red -------------------------

        //  if(infografica.style.transform == `translateY(-100%) scale(1)` && scrollDir == 'down') 
        //  {
        //   ricicloRed.classList.remove('hiddenLastDivAnimation');
        //    ricicloRed.classList.add('visibleLastDivAnimation');
        //   }
        //   else       
        //      {
        //     ricicloRed.classList.remove('visibleLastDivAnimation');
        //      ricicloRed.classList.add('hiddenLastDivAnimation');
        //     }

    //-------------------------------
  
      //   if((ypos - heroAnimation.offsetTop) >= 0)  {
      //     //si blocca lo scroll
      //  }
      //  if(calc >= z)  {
      //    //si 'sblocca lo scroll
      //    }

         
  //});
// -------------------------------------------------------------------- FINE READY  --------------------------------------------------------------------------------------
});