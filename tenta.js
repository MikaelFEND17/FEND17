//1
var inputBirthDate = "19870227";

function CalculateAge(birthdate)
{
	var today = new Date();
	var birthDate = new Date(parseInt(birthdate.substr(0, 4)), 
         parseInt(birthdate.substr(4, 2)) - 1, 
         parseInt(birthdate.substr(6, 2)));
	//today.setFullYear(2019);


 	var age = today.getFullYear() - birthDate.getFullYear();
    var monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate()))
    {
        age--;
    }
    return age;
}

console.log(CalculateAge(inputBirthDate));

//2
function GetRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

var myNumberArray = new Array();

for (var i = 0;  i < 150; i++)
{
	myNumberArray.push(GetRandomInt(0, 150));
}

//Snyggare
var myNumberArray2 = Array.from({length: 40}, function() { GetRandomInt(0, 150); });


function GetEvenAndOver56()
{
	var returnArray = new Array();
	for (var val of myNumberArray)
	{
		if (val%2 == 0 && val > 56)
		{
			returnArray.push(val);
		}
	}	
	return returnArray;
}

var newNumberArray = GetEvenAndOver56(myNumberArray)

console.log(newNumberArray);
console.log(GetEvenAndOver56(myNumberArray2));

//3

function Start()
{
	var resultat = Beräkna(3, 4);

	console.log(resultat);
}

function Beräkna(varde1, varde2)
{
	if (varde1 > 0 && varde2 > 0) //Större än noll 
	{
		return (varde1 * varde2);
	}

	return -1;
}

Start();

//4

//Returns Object - Tydligare
function ReturnMultipleValuesAsObject(tal1, tal2)
{
	var sum = tal1 + tal2;
	var dif = tal1 - tal2;
	var averageVal = sum / 2;
	return	{
		summa : sum,
		differens : dif,
		medelvarde : averageVal
	};
}

var returnValue = ReturnMultipleValuesAsObject(6, 2);
console.log(returnValue);

//Returns Array
function ReturnMultipleValuesAsArray(tal1, tal2)
{
	var sum = tal1 + tal2;
	var dif = tal1 - tal2;
	var averageVal = sum / 2;
	return [sum, dif, averageVal];
}

returnValue = ReturnMultipleValuesAsArray(8, 5);
console.log(returnValue);

//5
var cities = "Stockholm,Göteborg,Malmö,Köpenhamn,London";

cities = cities.split(",");


cities.sort();

/*cities.sort( function SortAlphabetically(city1, city2)
	{
		var city1LoweCase = city1.toLowerCase();
		var city2LowerCase = city2.toLowerCase();

	    if (city1LoweCase < city2LowerCase) return -1;
    	if (city1LoweCase > city2LowerCase) return 1;
    	return 0;
	}
);*/

console.log(cities);

for (var city of cities)
{
	console.log(city);
}

//6
class Fest
{
	constructor(namn, startTid, lokal, värd)
	{
		this.namn = namn;
		this.startTid = startTid;
		this.lokal = lokal;
		
		if (arguments.length < 4)
		{
			this.värd = new Person();
		}
		else
		{
			this.värd = värd;	
		}
		
	}

	AngeVärd(värd)
	{
		this.värd = värd;
	}
}

class Person
{
	constructor(förnamn, efternamn, ålder)
	{
		this.förnamn = förnamn;
		this.efternamn = efternamn;
		this.ålder = ålder;
	}
}

var forstaFesten = new Fest("Bra fest!", "2099-12-31 23:59", "Trump Tower", new Person("Donald", "Trump", 153));
var andraFesten = new Fest("Bättre fest!", "2999-12-31 23:59", "Trump Tower");

console.log(forstaFesten);

console.log(andraFesten);

andraFesten.AngeVärd(new Person("Donald", "Trump", 1053))
console.log(andraFesten);

//7
class Konferens
{
	constructor(namn, plats, startTid)
	{
		this.namn = namn;
		this.plats = plats;
		this.startTid = startTid;
		this.deltagare = new Array();
	}

	AntalDeltagare()
	{
		return this.deltagare.length;
	}

	LäggTillDeltagare(deltagare)
	{
		this.deltagare.push(deltagare);
	}
}

var konferens = new Konferens("Rally", "Charllotesville", "1939/04/28");
konferens.deltagare.push(new Person("Donald", "Trump", 71));
konferens.LäggTillDeltagare(new Person("Some", "Redneck", 54));

var antalDeltagare = konferens.AntalDeltagare();
console.log(konferens.AntalDeltagare());
console.log(konferens);


//8
var tal = [ 9, 3, 4, 7, 2, 3, 1, 1, 7];

function GetUniqueNumbersBiggerThanThree(array)
{
	var duplicate = {};
	var returnArray = new Array();

	for (var val of array)
	{
		if (duplicate[val] !== 1)
		{
			duplicate[val] = 1;	
		}
		else
		{
			duplicate[val] = 0;
		}
	}

	for (var val of array)
	{
		if (val > 3 && duplicate[val] === 1)
		{
			returnArray.push(val);
		}
	}

	return returnArray;
}

console.log(GetUniqueNumbersBiggerThanThree(tal));


function GetUniqueNumbersBiggerThanThreeV2(array)
{
	var returnArray = new Array();
	for (var val of array)
	{
		if (val > 3)
		{
			returnArray.push(val);
		}
	}

	return KeepUniques(returnArray);
}

function KeepUniques(array)
{
	return res = array.filter((a, _, aa) => aa.indexOf(a) === aa.lastIndexOf(a));;
}

console.log(GetUniqueNumbersBiggerThanThreeV2(tal));