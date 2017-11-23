var namn = "Mikael Larsson";
var age = "30";
console.log("Jag heter " + namn + " och är " + age + " år");

var number1 = 20;
var number2 = 10;

var differens = number1 - number2;
var medel = (number1 + number2) / 2;
var summa = number1 + number2;

console.log("Differens: " + differens + " Medelvärde: " + medel + " Summa: " + summa);


var pris = 80;
var prisinklmoms = pris + pris * 0.25;

console.log(prisinklmoms);

var minuter = 159;

if (minuter < 60) {
	console.log("Antar minuter är för lågt.");
} else {

	var minuterutantimmar = minuter % 60;
	var timmar = (minuter - minuterutantimmar) / 60;

	console.log("Timmar: " + timmar + " Minuter: " + minuterutantimmar);
}

