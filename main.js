let running, time, cd, intvl, duration = 0;

class Stopwatch {

	 static start() {
		if (running || cd) throw new Error('Stopwatch already started or countdown is was not resetted');

		running = true;

		time = new Date();
		intvl = setInterval(() => {
			duration = (new Date().getTime() - time.getTime()) / 1000;
		}, 1);
	}

	static stop() {
		if(!running || cd) throw new Error('Stopwatch already stopped');

		running = false;

		clearInterval(intvl);

		intvl = null;
	}

	static resume() {
		if(duration === 0 || running || cd) throw new Error('Stopwatch not paused');

		running = true;
		let tmp = duration;
		time = new Date();
		intvl = setInterval(() => {
			duration = tmp + (new Date().getTime() - time.getTime()) / 1000;
		}, 1);
	}

	static reset() {
		if (running) throw new Error('Stopwatch must be stopped before reset')

		running = false;
		time = null;
		intvl = null;
		duration = 0;
		cd = null;

		stop();
	}

	static countdown(initVal) {
		if (running || duration !== 0 || initVal === undefined) throw new Error('Stopwatch already running. You must stop or reset to use countdown or provide a countdown time value in seconds');

		let tmp;
		time = new Date();
		intvl = setInterval(() => {
			tmp = ((time.getTime() + (initVal * 1000)) - new Date().getTime()) / 1000;

			if (tmp <= 0) {
				clearInterval(intvl);
				cd = true;
			}

			duration = tmp;
		}, 1);
	}
}

Object.defineProperty(Stopwatch, 'duration',{
	get: () => {return duration}
});