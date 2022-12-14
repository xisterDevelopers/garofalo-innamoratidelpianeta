document.addEventListener("DOMContentLoaded", () => {
    var ypos = window.pageYOffset;
    var height = window.innerHeight;
    var calc = ypos + height;
    var iframeArr = document.getElementsByClassName("fullVideo");
    for(let x = 0; x < iframeArr.length; x++) {
        if(calc > (iframeArr[x].offsetTop + 200 ) )
         iframeArr[x].classList.add("visibleFullVideo");
     }

function Scroll () {
  var ypos = window.pageYOffset;
  var height = window.innerHeight;
  var calc = ypos + height;

  var iframeArr = document.getElementsByClassName("fullVideo");
    for(let x = 0; x < iframeArr.length; x++) {
        if(calc > (iframeArr[x].offsetTop + 200 ) )
         iframeArr[x].classList.add("visibleFullVideo");
     }
  }

window.addEventListener("scroll", Scroll);

});