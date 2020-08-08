
const hour = document.querySelector('#hour'),
	  min = document.querySelector('#min'),
	  sec = document.querySelector('#sec'),
	  up = document.querySelector('#up'),
	  down = document.querySelector('#down'),
	  start = document.querySelector('#start'),
	  pause = document.querySelector('#pause'),
	  reset = document.querySelector('#reset'),
	  countDown = document.querySelector('#countDown');

let inOperation = false;
let intvl2;

const format = (el) => {
	if(el.innerText < 10 && el.innerText > 0 && el.innerText.length < 3) {
		el.innerText = `0${el.innerText}`;
	}
}

const run = () => {
	inOperation = true;

	if (!inOperation) throw new Error('already started');


	let counter = sec.innerText;
	let counter2 = min.innerText;
	let counter3 = hour.innerText;
	intvl2 = setInterval(() => {
		counter++;

		if (counter > 59) {
			counter = 0;
			counter2++;
		}
		if (counter2 > 59) {
			counter2 = 0;
			counter3++;
		}

		sec.innerText = counter;
		format(sec);
		min.innerText = counter2;
		format(min);
		hour.innerText = counter3;
		format(hour);
	}, 1000);
}

const pauseFunc = () => {
	clearInterval(intvl2);
	inOperation = false;
}

const resetFunc = () => {
	sec.innerText = '00';
	min.innerText = '00';
	hour.innerText = '00';

	pauseFunc();
}

start.addEventListener('click', run);
pause.addEventListener('click', pauseFunc);
reset.addEventListener('click', resetFunc);