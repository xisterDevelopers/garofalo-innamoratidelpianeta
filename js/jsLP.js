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


  function handleClickOutside (event) {
    var header = document.getElementById("header");
   if(!header.contains(event.target)) {
       collapse();
   }
  }
  window.addEventListener("click", handleClickOutside, true);

});


function scrollAncora (id) {
  collapse();
  window.scroll({
    top: document.getElementById(id)?.getBoundingClientRect().top + window.scrollY,
    behavior: 'smooth'
  });

}


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