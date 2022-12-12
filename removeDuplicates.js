import mergeSort from './mergeSort.js';

function removeDuplicates(array) {
	//first sort the array
	let newArray = mergeSort(array);

	let prev = null;
	let cur = null;

	let i = 0;

	while (i < newArray.length) {
		// assign current array item and convert string to number if neccesary
		cur = +newArray[i];
		// if current item equals previous item, remove it from the array
		if (cur === prev) {
			newArray = newArray.slice(0, i).concat(newArray.slice(i + 1));
			// else make current item the previous and skip to the next item in the array
		} else {
			prev = cur;
			i += 1;
		}
	}

	return newArray;
}

export default removeDuplicates;
