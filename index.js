const myInformation = require('./information.js')
var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hi my name is ${myInformation.name} and I study at ${myInformation.campus} campus.`,
	e : "oO",
	T : "U "
}));