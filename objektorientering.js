class Meddelande
{
	constructor(text)
	{
		this.text = text;
	}

	VisaMeddelande()
	{
		return this.text;
	}
}

var mess = new Meddelande("Hejsan");
var mess2 = new Meddelande();
mess2.text = "Hejsan2";

console.log(mess.VisaMeddelande());
console.log(mess2.VisaMeddelande());


class Kurs
{
	constructor(namn, poang, startdatum, slutdatum)
	{
		this.namn = namn;
		this.poang = poang;
		this.startdatum = startdatum;
		this.slutdatum = slutdatum;
	}

	setPoang(poang)
	{
		this.poang = poang;
	}


}

startdatum = new Date();
slutdatum = new Date();
slutdatum.setMonth(slutdatum.getMonth() + 5);


var coolKurs = new Kurs("Cool Kurs", 10, startdatum, slutdatum);

console.log(`Kursnamn: ${coolKurs.namn} Poäng: ${coolKurs.poang} Start datum: ${coolKurs.startdatum} Slut datum: ${coolKurs.slutdatum}`);
coolKurs.setPoang(20);
console.log(`Kursnamn: ${coolKurs.namn} Poäng: ${coolKurs.poang} Start datum: ${coolKurs.startdatum} Slut datum: ${coolKurs.slutdatum}`);


class Larare
{
	constructor(fornamn, efternamn, telefonnummer, anstallningsdatum, lon) 
	{
		this.fornamn = fornamn;
		this.efternamn = efternamn;
		this.telefonnummer = telefonnummer;
		this.anstallningsdatum = anstallningsdatum;
		this.lon = lon;

	}
}

var larare = new Larare("Test", "Testsson", "08-123 456 78", new Date(), 13337 );

console.log(`Namn: ${larare.fornamn} ${larare.efternamn} Telefonnummer: ${larare.telefonnummer} Anställningsdatum: ${larare.anstallningsdatum} Lön: ${larare.lon} `);


class Student
{
	constructor(fornamn, efternamn, email, telefonnummer)
	{
		this.fornamn = fornamn;
		this.efternamn = efternamn;
		this.email = email;
		this.telefonnummer = telefonnummer;		
	}
}

var student1 = new Student();
student1.fornamn = "Sven";
student1.efternamn = "Svenssson";
student1.email = "sven@skola.se";
student1.telefonnummer = "1337";

var student2 = new Student("Per", "Persson", "per@skola.se", "1338");


console.log(student1);
console.log(student2);


class Lektion
{
	constructor(startdatum, slutdatum, sal)
	{
		this.startdatum = startdatum;
		this.slutdatum = slutdatum;
		this.sal = sal;
	}
}


var lektioner = new Array();

var startDatum = new Date(2017, 10, 1, 11, 0, 0, 0);
var slutDatum = new Date(2017, 10, 1, 14, 0, 0, 0);
var sal = "B309";

lektioner.push(new Lektion(startDatum, slutDatum, sal));


startDatum = new Date(2017, 10, 1, 15, 0, 0, 0);
slutDatum = new Date(2017, 10, 1, 19, 0, 0, 0);
sal = "B410";

lektioner.push(new Lektion(startDatum, slutDatum, sal));

startDatum = new Date(2017, 10, 02, 9, 30, 0, 0);
slutDatum = new Date(2017, 10, 02, 12, 30, 0, 0);
sal = "A204";

lektioner.push(new Lektion(startDatum, slutDatum, sal));

startDatum = new Date(2017, 10, 06, 11, 0, 0, 0);
slutDatum = new Date(2017, 10, 06, 14, 0, 0, 0);
sal = "C404";

lektioner.push(new Lektion(startDatum, slutDatum, sal));

console.log(lektioner);


for (lektion in lektioner)
{
	console.log(`Startdatum: ${lektioner[lektion].startdatum} Slutdatum: ${lektioner[lektion].slutdatum} Sal: ${lektioner[lektion].sal}`);
}


class Klassrum
{
	constructor(salNamn)
	{
		this.salNamn = salNamn;
		this.lektioner = new Array();
	}

	addLektion(lektion)
	{
		this.lektioner.push(lektion);
	}

}

class Lektion2
{
	constructor(startDatum, slutDatum)
	{
		this.startdatum = startDatum;
		this.slutdatum = slutDatum;
	}
}

var klassrum1 = new Klassrum("A101");
var klassrum2 = new Klassrum("A102");
var klassrum3 = new Klassrum("A103");
var klassrum4 = new Klassrum("A104");



klassrum1.addLektion(new Lektion2(new Date(2017, 11, 01, 11, 0, 0, 0), new Date(2017, 11, 01, 14, 0, 0, 0)));
var lektion = new Lektion2(new Date(2017, 11, 02, 11, 0, 0, 0), new Date(2017, 11, 02, 14, 0, 0, 0));
klassrum1.addLektion(lektion);

console.log(klassrum1);
console.log(klassrum2);
console.log(klassrum3);
console.log(klassrum4);

function MyClass()
{
	this.val = 10;

	this.GetValue = function()
	{
		val++;
		return val;
	}
}

var classObject = new MyClass();

console.log(classObject.GetValue());

