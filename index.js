// Your code here
function mapToNegativize(numbers) {
	let output = numbers.map(function(number) {
		return number*-1
	})
	return output
}

function mapToNoChange(input) {
	let output = input.map(function(e) {
		return e
	})
	return output
}

function mapToDouble(numbers) {
	let output = numbers.map(function(number) {
		return number*2
	})
	return output
}

function mapToSquare(numbers) {
	let output = numbers.map(function(number) {
		return number**2
	})
	return output
}

function reduceToTotal(numbers, startingPoint=0) {
	let result = numbers.reduce(function(total, element) 
		{return total+element}, startingPoint)
	return result
}

function reduceToAllTrue(numbers) {
	let result = numbers.reduce(function(total, element){
		return element == false ? false : true
	}) 
	return result
}

function reduceToAnyTrue(values) {
	let result = values.reduce(function(total, element){
		return element == true ? true : false
	}) 
	return result
}



