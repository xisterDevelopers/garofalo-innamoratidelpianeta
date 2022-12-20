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


function scrollAncora (id) {
  collapse();
  window.scroll({
    top: document.getElementById(id)?.getBoundingClientRect().top + window.scrollY - 100,
    behavior: 'smooth'
  });
}


// ready check helper function (waits for the dom to load, then returns the indivudual elements one at a time - in case there are more than one of them on the page). I generally use this for all of my dom manipulating scripts so I dont have to type DOMContentLoaded and elems.forEach a hundred times
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

ready('.counter', (stat) => {
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


  // ------------------ 

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
       if(calc > (infografica[x].offsetTop + 200 ) ){
        infografica[x].classList.remove("visible");
        infografica[x].classList.add("zoomOut");
       }
    }


// -----------------

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
       if(calc > (infografica[x].offsetTop + 500 ) )
       {
        infografica[x].classList.remove("visibleScroll");
        infografica[x].classList.add("zoomOutScroll");
       }

    }
}
window.addEventListener("scroll", Scroll);

// -----------------


// function mouseWheel (event) {
// }
// window.addEventListener('mousewheel', mouseWheel);

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
const elArr = document.getElementsByClassName('smooth');
//window.onwheel = smooth;

// -----------------

function handleClickOutside (event) {
  var header = document.getElementById("header");
 if(!header.contains(event.target)) {
     collapse();
 }
}
window.addEventListener("click", handleClickOutside, true);
});

// -----------------

const slider = document.querySelector(".horizontal-slider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});