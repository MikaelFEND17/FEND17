var tal = 10;
if (tal < 10)
{
	console.log("Talet är mindre än 10");
}
else if (tal > 10) 
{
	console.log("Talet är större än 10");
}
else
{
	console.log("Talet är 10");
}


var mjolkpaket = 10;

if (mjolkpaket < 10)
{
	console.log("Beställ 30 paket mjölk.");
}
else if (mjolkpaket >= 10 && mjolkpaket <= 20)
{
	console.log("Beställ 20 paket mjölk.");
}
else
{
	console.log("Du behöver inte beställa någon mjölk.");
}

var fodelsear = 1977;

if (fodelsear >= 1980 && fodelsear < 1990)
{
	console.log("Du är född på 1980-talet");
}
else if (fodelsear < 2000 && fodelsear >= 1990) 
{
	console.log("Du är född på 1990-talet");
}
else
{
	console.log("Du är inte född på 1990 eller 1980-talet");
}


var summa = 2017;
var valuta = "USD";
var vaxladSumma = 0;

if (!isNaN(summa))
{

	if (valuta == "USD")
	{
		vaxladSumma = summa * 0.12; 
		console.log(`${summa} SEK ger dig ${vaxladSumma} USD`);
		//console.log(summa + " SEK ger dig " + vaxladSumma + " USD.");
	}
	else if (valuta == "EUR")
	{	

		vaxladSumma = summa * 0.10; 
		console.log(summa + "SEK ger dig " + vaxladSumma + "EURO.");
	}
	else
	{
		console.log("Ogiltig valuta.");
	}		
}
else
{
	console.log("Ogiltig summa.");
}

var land = "Danmark";
if (land == "Sverige" || land == "Norge" || land == "Danmark")
{
	console.log("Du bor i Skandinavien.");
}
else
{
	console.log("Du bor inte i Skandinavien.");
}


var matSumma = 57;
var rabatt = true;

if (matSumma >= 15 && matSumma <= 25 && rabatt == false)
{
	console.log("Du kan köpa en liten hamburgare.");
}
else if (matSumma >= 15 && matSumma <= 25 && rabatt == true)
{
	console.log("Du kan köpa en liten hamburgare och en pommes.");
}
else if (matSumma > 25 && matSumma <= 50 && rabatt == false)
{
	console.log("Du kan köpa en stor hamburgare och en pommes.");
}
else if (matSumma > 25 && matSumma <= 50 && rabatt == true)
{
	console.log("Du kan köpa en stor hamburgare och en pommes.");
}
else if (matSumma > 60 || (matSumma > 50 && matSumma <= 60 && rabatt == true))
{
	console.log("Du kan köpa ett meal.");
}



var minuter = 1501;
var dygn = 0;
var timmar = 0;

if (minuter >= 1440)
{
	dygn = Math.floor( minuter/1440 );
	//minuter -= dygn * 1440;   
	minuter = minuter - (dygn * 1440);
	//minuter = minuter % 1440;
}
if (minuter >= 60)
{
	timmar = Math.floor( minuter/60 );
	minuter = minuter - (timmar * 60);
	//minuter -= timmar * 60;
}

console.log("Dygn: " + dygn + " timmar: " + timmar + " minuter: " + minuter + "." );

