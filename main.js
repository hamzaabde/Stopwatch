function Stopwatch () {
	let startTime, endTime, error, running, date, duration = 0;

	Object.defineProperty(this, 'duration', {
		get: function () {
			return duration;
		},
		set: function(value) {
			return duration = value;
		}
	});
	this.start = function () {
		if(running == true) throw new Error('timer already started');

		running = true;
		date = new Date();
		startTime = date.getTime();
	};
	this.stop = function () {
		if(!running == true) throw new Error('timer already stopped');

		running = false;
		endTime = date.getTime();
		duration += (endTime() - startTime()) / 1000;
	};
	this.reset = function () {
		duration = 0;
		startTime = null;
		endTime = null;
		erro = null;
		date = null;
	};
}