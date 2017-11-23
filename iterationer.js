for (var i = 0; i <= 10; i++)
{
	console.log(i);
}


var tal1 = 20;
var tal2 = 51;

for (var i = tal1 ;i <= tal2; i++)
{
	console.log(i);
}


var tal3 = 18;

while (tal3-1 > 0)
{
	tal3--;	
	console.log(tal3);
}


var mittNamn = "Mikael";

for (var l of mittNamn)
{
	console.log(l);
}

for (var i = 99; i > 0; i--)
{
	if (i%2 == 1)
	{
		console.log(i);
	}
}

sheeps = 4;
for (var months = 1; months <= 12; months++)
{
	sheeps = sheeps * 4;
}
console.log(sheeps);



for (var i = 1; i <= 10; i++)
{
	var rad = "";
	for (var j = 1; j <= 10; j++)
	{
		var multiplikation = 0;
		multiplikation = i * j;
		rad = rad + multiplikation + " ";
	}
	console.log(rad);
}

var dice1 = -1;
var dice2 = -2;

while (dice1 != dice2)
{
	//Math.floor(Math.random()*(max-min+1)+min);
	dice1 = Math.floor(Math.random()*(6-1+1)+1);
	console.log("Dice 1: " + dice1);
	dice2 = ~~(Math.random() * 6) + 1;
	console.log("Dice 2: " + dice2);

}

