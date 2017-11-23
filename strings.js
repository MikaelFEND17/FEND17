
function GetAge()
{
	var today = new Date();
	var myBirthday = new Date(1987, 02, 27);


 	var age = today.getFullYear() - myBirthday.getFullYear();
    var m = today.getMonth() - myBirthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < myBirthday.getDate())) {
        age--;
    }
    return age;
}

console.log(GetAge());


function GetDaysBetween(date1, date2)
{
    return Math.round((date1-date2)/(1000*60*60*24));
}

var date1 = new Date();
var date2 = new Date("1987-02-27");


console.log(GetDaysBetween(date1, date2));

function DaysInMonth(month, year)
{
	return new Date(year, month, 0).getDate();
}

console.log(DaysInMonth(2, 1988));
console.log(DaysInMonth(2, 1987));
console.log(DaysInMonth(2, 1986));

//4
var b = "I am a JavaScript hacker.";

console.log(b.lastIndexOf("a"));

console.log(b.indexOf("c"));

console.log(b.length);

console.log(b.slice(b.search("hacker"), b.search("hacker") +6));

c = b.split(" ");

console.log(c[4]); //Får med . på slutet

for (let i = 0; i < c.length; i++)
{
	console.log(c[i]);
}

function convertToLowerCaseAtPosition(str, index)
{
    if (index > str.length-1)
    {	
    	return str;
    }

    return str.substr(0, index) + str.charAt(index).toLowerCase() + str.substr(index +1);
}
function convertToUpperCaseAtPosition(str ,index)
{
    if (index > str.length-1)
    {	
    	return str;
    }

    return str.substr(0, index) + str.charAt(index).toUpperCase() + str.substr(index +1);
}

d = b;
var counter = 0;
for (let i = 0; i < b.length; i++)
{
	if (d.charAt(i) != " ")
	{
		counter++;
	}

	if (counter%2 == 1)
	{
		d = convertToLowerCaseAtPosition(d, i);
	}
	else
	{
		d = convertToUpperCaseAtPosition(d, i);
	}	
}

console.log(d);

var godis = "jag gillar godis";
godis = godis.split(" ")

console.log(godis);



function LongestWord(sentence)
{
	var splitSentence = sentence.split(" ");
	var longest = 0;
	var longestWord;

	for (var i = 0; i < splitSentence.length; i++)
	{
		if (longest < splitSentence[i].length)
		{
			longest = splitSentence[i].length;
			word = splitSentence[i];
		}
	}

	return word;
}
var mySentence ="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";


console.log(LongestWord(mySentence));


var myString = "Detta är en sträng som du skall ändra";
var replacesString = myString.split(" ").join("*");

console.log(replacesString);

console.log(replacesString.split("*").length-1);

var email1 = "emailemail.en"
var email2 = "email@emailen"
var email3 = "email@email.e"
var email4 = "email@email.en"

function ValidateEmail(email)
{
	if (email.indexOf("@") == -1)
	{
		return false;
	}
	if (email.indexOf(".") == -1)
	{
		return false;
	}
	emailDomain = email.split(".").pop();

	if (emailDomain.length <= 1)
	{
		return false;
	}
	return true;
}

console.log(ValidateEmail(email1));
console.log(ValidateEmail(email2));
console.log(ValidateEmail(email3));
console.log(ValidateEmail(email4));





function SetCharAt(str, index, chr) {
    if (index > str.length-1) 
    {
    	return str;
    }	

    return str.substr(0,index) + chr + str.substr(index+1);
}


function SortString(string)
{
	for (let i = 0; i < string.length; i++)
	{
		let sorted = true;
		for (let j = 0; j < string.length; j++)
		{
			if (Number(string.charAt(j)) > Number(string.charAt(i)))
			{
				let temp = string.charAt(j);
				string = SetCharAt(string, j, string.charAt(i));
				string = SetCharAt(string, i, temp);
				sorted = false;

			}
		}

		if (sorted)
		{
			return string;
		}
	}

	return string;
}

var numberString = "231596874";


console.log(SortString(numberString));

var palindrom1 = "Tre bra brassar bar Bert";
var palindrom2 = "Ni talar bra latin";
var palindrom3 = "Redan väver alla rappa rallare vävnader";
var palindrom4 = "Tre bra brassar bannr Bert";
var palindrom5 = "Tre bra tbrassar bar Bert";


function CheckPalindrom(possiblePalindrom)
{
	var checkedLetterFromTheBack = possiblePalindrom.length-1;
	for (var i = 0; i < possiblePalindrom.length; i++)
	{
		if (possiblePalindrom.charAt(i) != " ")
		{
			while (possiblePalindrom.charAt(checkedLetterFromTheBack) == " ")
			{
				checkedLetterFromTheBack--;
			}
			if (possiblePalindrom.charAt(i).toUpperCase() != possiblePalindrom.charAt(checkedLetterFromTheBack).toUpperCase())
			{
				return false;
			}

			checkedLetterFromTheBack--;
		}
	}

	return true;
}

if (CheckPalindrom(palindrom5))
{
	console.log("Det är ett palindrom.")	
}
else
{
	console.log("Det är inte ett palindrom.")
}

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

