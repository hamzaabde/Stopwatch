
const hour = document.querySelector('#hour'),
	  min = document.querySelector('#nub'),
	  sec = document.querySelector('#sec'),
	  up = document.querySelector('#up'),
	  down = document.querySelector('#down'),
	  start = document.querySelector('#start'),
	  stop = document.querySelector('#stop'),
	  reset = document.querySelector('#reset'),
	  countDown = document.querySelector('#countDown');

function display() {
	Stopwatch.start()
	let intvl2 = setInterval(() => {
		console.log(Math.round(Stopwatch.duration));
	}, 1);
}