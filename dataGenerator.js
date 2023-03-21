/*
Data is generated using the following formula: f(x) = A * x + B + noise

To call the data generator:
dataGenerator(number of data points, A value (default=1), B value(default=1), x step size(default=1), absolute noise size (default=0, no noise))

returns an array, where each element is an array [x value, y value]
*/

function dataGenerator(numOfDataPoints = 20, theta1 = 1, theta0 = 1, stepSize = 1, noiseSize = 0){
	let dataArray = [];
	// Generate an array, where each element is an array [x,y]
	//console.log("Generating data based on function f(x)=" + theta1 + "*x+(" + theta0 + "), # of data points = " + numOfDataPoints + ", step size = " + stepSize)
	//console.log("Noise: " + (noiseSize > 0 ? ("+/-" + noiseSize) : "none"))
	for(let i = 0; i < numOfDataPoints; i++){
		let xValue = i * stepSize;
		// Below: A * x + B + (random number between -noiseSize and +noiseSize)
		let yValue = theta1 * xValue + theta0 + Math.random() * noiseSize * (Math.random() < 0.5 ? (-1) : 1);
		dataArray.push([ xValue, yValue  ]);
	};
	
	return dataArray;
};