window.addEventListener('scroll', function() {
  let scrollValue = pageYOffset;
  let button = document.querySelector('.listen-button');
  if(scrollValue<=400){
  	button.style.backgroundColor = 'white';
  }
  else {
  	button.style.backgroundColor = '#14d8cc';
  }
});
let slidebar = document.querySelector('.slidebar');

let btSlidebar = document.querySelector('.menu-img');
btSlidebar.onclick = function() {
	slidebar.style.visibility = 'visible';
	slidebar.style.width = '270px';
	slidebar.className = 'increasebleSlidebar';
	
	
	let page = document.querySelector('body');
	page.onclick = function f1 () {
		if(event.pageX>270){
			slidebar.addEventListener("animationend", function f2() {
				slidebar.style.visibility = 'hidden';
				slidebar.style.width = '0';
				slidebar.className = 'slidebar';
				slidebar.removeEventListener('animationend', f2);
			});

			slidebar.className = 'reducebleSlidebar';
			body.removeEventListener('click', f1);
			
		}
	}
	
};



