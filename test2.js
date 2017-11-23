var multTot = 10;
var output;

for ( i = 1; i <=10; i++) 
{
	output = "";
    for (j = 1; j <=10; j++)
    {        

        multTot= i * j;
        output = output + " " + multTot;
    }

        console.log(output);
        
}

var multTot = 10;
var output = "";

for ( i = 1; i <=10; i++) 
{
    for (j = 1; j <=10; j++)
    {        

        multTot= i * j;
        output = output + " " + multTot;
    }

    console.log(output);
 	output = "";       
}