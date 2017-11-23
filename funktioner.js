function PrintMessage() {
	return "This is a message from a function";
}

console.log(PrintMessage());

function ReturnBiggestNum(a, b) {

	if (isNaN(a) || isNaN(b))
	{
		return "One parameter was not a number.";
	}
	if (a > b)
	{
		return a;
	}
	else //om b är större eller samma som a kan vi returnera b
	{
		return b; 
	}
}

console.log(ReturnBiggestNum(3,2));

function GetRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function ReturnRandomValues(numOfValues) {
	let numArray = new Array();
	for (let i = 0; i < numOfValues; i++)
	{
		numArray.push(GetRandomInt(0, 100));
	}
	return numArray;
}

console.log(ReturnRandomValues(5));

function Sum(...argumentList)
{
	let sum = 0;
	for (let val of argumentList)
	{
		sum += val;
	}
	return sum;
}

console.log(Sum(1,2,3,4));

function Multiply(...argumentList)
{
	let sum = 1;
	for (let val of argumentList)
	{
		sum *= val;
	}
	return sum;
}


console.log(Multiply(1,2,3,4));

function FindNum(array, val)
{
	for (let i = 0; i < array.length; i++)
	{
		if (val === array[i])
		{
			return true;
		}
	}

	return false;
}

function MergeArray(arr1, arr2)
{
	let returnArray = new Array();
	
	for (let i = 0; i < arr1.length; i++)
	{
		if (!FindNum(returnArray, arr1[i]))
		{
			returnArray.push(arr1[i]);
		}
	}
	
	for (let i = 0; i < arr2.length; i++)
	{
		if (!FindNum(returnArray, arr2[i]))
		{
			returnArray.push(arr2[i]);
		}
	}

	return returnArray;
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];


console.log(MergeArray(array1, array2));


function BubbleSort(array)
{
	for (let i = 0; i < array.length; i++)
	{
		let sorted = true;
		for (let j = 0; j < array.length; j++)
		{
			if (array[j] > array[i])
			{
				let temp = array[j];
				array[j] = array[i];
				array[i] = temp;
				sorted = false;
			}
		}

		if (sorted)
		{
			return array;
		}
	}

	return array;
}


var sortArray = [2, 1, 6, 5];

console.log(BubbleSort(sortArray));




//function SetText(text)
//{
//	if (localStorage.getItem("text") == null)
//	{
//		localStorage.setItem("text", text);
//	}
//	else
//	{
//		localStorage.setItem("text", localStorage.getItem("text") + text);	
//	}
//}

//function GetText() {
//	return localStorage.getItem("text");
//}

//SetText("Javascript");
//SetText(" is ");
//SetText(" cool");

//console.log(GetText());
//document.write(GetText());
