function Bankkonto(kontoNummer, saldo)
{
	this.kontoNummer = kontoNummer;
	var saldo = saldo;

	this.Uttag = function(amount)
	{
		SkapaTransaktion(-amount);
	}

	this.Insattning = function(amount)
	{
		SkapaTransaktion(amount);
	}

	var SkapaTransaktion = function(amount)
	{
		saldo += amount;
	}

	this.GetSaldo = function()
	{
		return saldo;
	}

}


function Sparkonto(kontoNummer, saldo, antalUttag)
{
	this.antalUttag = antalUttag;
	Bankkonto.call(this, kontoNummer, saldo);

	this.Uttag = function(amount)
	{
		this.antalUttag -= 1;
		SkapaTransaktion(-amount);
	}
}

function Personkonto(kontoNummer, saldo, kortNummer)
{
	this.kortNummer = kortNummer;
	Bankkonto.call(this, kontoNummer, saldo);
}


personkonto = new Personkonto(123456789, 100, 133713371337);
sparkonto = new Sparkonto(123456789, 100, 10);
;
console.log(personkonto.GetSaldo());
personkonto.Uttag(50);
console.log(personkonto.GetSaldo());
personkonto.Insattning(50);
console.log(personkonto.GetSaldo());


function Djur()
{
	this.late;
	this.Late = function()
	{
		return this.late;
	}
}

function Hund()
{
	Djur.call(this);
	Hund.prototype.late = "Voff";
}

function Apa()
{
	Djur.call(this);
	Apa.prototype.late = "Ioioioioioio";
}

function Katt()
{
	Djur.call(this);
	Katt.prototype.late = "Mjaow";
}

hund = new Hund();
apa = new Apa();
katt = new Katt();

apa.late = "HUR LÅTER EN APA?";

console.log(hund.Late());
console.log(apa.Late());
console.log(katt.Late());

function Fordon(vikt, regnummer, farg)
{
	this.vikt = vikt;
	this.regnummer = regnummer;
	this.farg = farg;
}


function Bil(vikt, regnummer, farg, lastkapacitet)
{
	this.lastkapacitet = lastkapacitet;
	Fordon.call(this, vikt, regnummer, farg);

	this.TotalVikt = function()
	{
		return this.vikt + this.lastkapacitet;
	}
}

function Lastbil(vikt, regnummer, farg, slap)
{
	this.slap = slap;
	Fordon.call(this, vikt, regnummer, farg);

	this.TotalVikt = function()
	{
		if (this.slap == true)
		{
			return this.vikt + this.vikt;
		}

		return this.vikt;
	}
}

function Motorcykel(vikt, regnummer, farg)
{
	Fordon.call(this, vikt, regnummer, farg);
	this.TotalVikt = function()
	{
		return this.vikt;
	}
}

let bil = new Bil(1400, "ABC123", "Röd", 500);
let lastbil = new Lastbil(3400, "DEF456", "Grön", true);
let motorcykel = new Motorcykel(1100, "GHI789", "Gul");

console.log(bil.TotalVikt());
console.log(lastbil.TotalVikt());
console.log(motorcykel.TotalVikt());

/*
function UserAccount(name, pwd)
{
	this.username = name;
	var password = pwd;
	this.login = function(theRightPassword)
	{
		return checkLoginValues(theRightPassword) ;
	}	
	//inkapslad metod som ej kan nås utifrån
	var checkLoginValues = function(theRightPassword)
	{
		if (password == theRightPassword)
		{
			return true;
		}
	}
}
*/

/*
function UserAccount(name, pwd)
{
	this.username = name;
	this.password = pwd;

	this.login = function()
	{
		return checkLoginValues() ;
	}
	//inkapslad metod som ej kan nås utifrån
	var checkLoginValues = function()
	{
		if (this.password == theRightPassword)
			return true ;
	}
}
*/
/*
userAcc = new UserAccount("test", "test");

console.log(userAcc.login("test"));
*/

