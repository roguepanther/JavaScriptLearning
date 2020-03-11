function bmiCalculator(weight, height) {
	var bmiResult = Math.floor(weight / (height * height));
	return bmiResult; 
}

bmiCalculator(65, 1.8);