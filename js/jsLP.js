document.addEventListener("DOMContentLoaded", () => {
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

});