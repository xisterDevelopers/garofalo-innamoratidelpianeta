document.addEventListener("DOMContentLoaded", () => {
    var ypos = window.pageYOffset;
    var height = window.innerHeight;
    var calc = ypos + height;
    var sectionArr = document.getElementsByTagName("section");
    for(let x = 0; x < sectionArr.length; x++) {
        if(calc > (sectionArr[x].offsetTop + 200 ) )
        sectionArr[x].classList.add("visible");
     }
     var infografica = document.getElementsByClassName("infograficaPasta");
     for(let x = 0; x < infografica.length; x++) {
         if(calc > (infografica[x].offsetTop + 200 ) )
         infografica[x].classList.add("zoomOut");
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

    var infografica = document.getElementsByClassName("infograficaPasta");
     for(let x = 0; x < infografica.length; x++) {
         if(calc > (infografica[x].offsetTop + 200 ) )
         infografica[x].classList.add("zoomOut");
      }
  }
  window.addEventListener("scroll", Scroll);

});


function scrollAncora (id) {
  window.scroll({
    top: document.getElementById(id)?.getBoundingClientRect().top + window.scrollY,
    behavior: 'smooth'
  });
}
