function RemoveDuplicates(array)
{
	for (var i = 0; i < array.length; i++)
	{
		for (var j = i+1; j < array.length; j++)
		{
			if (array[i] === array[j])
			{
				array.splice(j, 1);
				j--;
			}
		}
	}

	return array;
}



var array1 = [1, 2, 3];
var array2 = [2, 30, 1, 1];

var mergedArray = array1.concat(array2);

console.log(RemoveDuplicates(mergedArray));


//--------------------------------------------------------
//--------------------------------------------------------

function MergeArrays(array1, array2)
{

	var mergedArray = array1.concat(array2);
	for (var i = 0; i < mergedArray.length; i++)
	{
		for (var j = i+1; j < mergedArray.length; j++)
		{
			if (mergedArray[i] === mergedArray[j])
			{
				mergedArray.splice(j, 1);
				j--;
			}
		}
	}

	return mergedArray;
}



var array1 = [1, 2, 3];
var array2 = [2, 30, 1];



console.log(MergeArrays2(array1, array2));



//--------------------------------------------------------
//--------------------------------------------------------


function MergeArrays2(array1, array2)
{

	var mergedArray = array1.concat(array2);
	for (var i = 0; i < mergedArray.length; i++)
	{
		for (var j = mergedArray.length-1; j > i; j--)
		{
			if (mergedArray[i] === mergedArray[j])
			{
				mergedArray.splice(j, 1);
			}
		}
	}

	return mergedArray;
}



var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

console.log(MergeArrays2(array1, array2));

