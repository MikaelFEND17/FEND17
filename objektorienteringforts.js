class Bankkonto 
{
	constructor(kontonummer, saldo)
	{
		this.kontonummer = kontonummer;
		let _saldo = saldo;

		let SkapaTransaktion = function(antal)
		{
			_saldo = _saldo + antal;
		}

		this.GetSaldo = function() 
		{
			return _saldo;
		}
	}

	Uttag(antal)
	{
		this.SkapaTransaktion(-antal);
	}

	Insattning(antal)
	{
		this.SkapaTransaktion(antal);
	}

}

class Sparkonto extends Bankkonto
{
	constructor(kontonummer, saldo, antalUttag)
	{
		super(kontonummer, saldo);
		this.antalUttag = antalUttag;
	}
}

class Personkonto extends Bankkonto
{
	constructor(kontonummer, saldo, kortnummer)
	{
		super(kontonummer, saldo);
		this.kortnummer = kortnummer;
	}
}

var personkonto = new Personkonto(1337, 100, 1338);
var sparkonto = new Sparkonto(1337, 1, 10);

personkonto.Uttag(50);

personkonto.SkapaTransaktion(-50);

console.log(personkonto.GetSaldo());

