var fornamn = "Mikael";
var efternamn = "Larsson";
var adress = "TestGatan 1";
var postort = "Orten";
var telefon = "08-12345678900"
var email = "em@il.com"
var personArray = [fornamn, efternamn, adress, postort, telefon, email];

var person2Array = {};
person2Array["fornamn"] = "Mikael";

console.log(`Namn ${personArray[0]} ${personArray[1]} Adress ${personArray[2]} Postort ${personArray[3]} Telefon ${personArray[4]} E-mail ${personArray[5]}`);

console.log(`Namn ${person2Array["fornamn"]} ${personArray[1]} Adress ${personArray[2]} Postort ${personArray[3]} Telefon ${personArray[4]} E-mail ${personArray[5]}`);


var talArray = [ 5, 10, 15, 20 ];

var tot = 0;
for (var t of talArray)
{
	tot += t;
}
console.log(tot);

var jamnaTalEndast = [ 5, 10, 15, 20, 25 ];

tot = 0;
for (var i = 0; i < jamnaTalEndast.length; i++)
{
	if (jamnaTalEndast[i]%2 == 1)
	{
		jamnaTalEndast[i] = 0;
	}
}
for (var t of jamnaTalEndast)
{
	tot += t;
}
console.log(tot);

var numArray = [ 2, 18, 4, 0, 6, 10 ];

var biggestNum = 0;

for (var t of numArray)
{
	if (t > biggestNum)
	{
		biggestNum = t;
	}
}
console.log(biggestNum);

var anotherNumArray = new Array();
for (var i = 1; i <= 50; i++)
{
	anotherNumArray.push(i);
}

for (var i = 0; i < anotherNumArray.length; i++)
{
	if (anotherNumArray[i]%2 == 0)
	{
		anotherNumArray.splice(i, 1);
	}
}

console.log(anotherNumArray);
for (var i = 0; i < anotherNumArray.length; i++)
{
	console.log(anotherNumArray[i]);
}


let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};


takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (orderCount) => {
  return getSubTotal(orderCount) * 0.06;
};

const getTotal = () => {
  return getSubTotal(orderCount);
};

console.log(getTotal());