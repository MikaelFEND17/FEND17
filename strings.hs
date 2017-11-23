
var d = new Date();
var a = d.setMonth(d.getMonth() + 6) ;
console.log(a);
console.log(d.toDateString());

function DaysInMonth(month, year)
{
	return new Date(year, month, 0).getDate();
}

console.log(DaysInMonth(2, 1988));
console.log(DaysInMonth(2, 1987));
console.log(DaysInMonth(2, 1986));

var b = "I am a JavaScript hacker.";

console.log(b.lastIndexOf("a"));


c = b.split(" ");
for (let i = 0; i < c.length; i++)
{
	console.log(c[i]);
}