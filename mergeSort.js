function mergeSort(array) {
	if (array.length < 2) return array;
	// make a copy of the array to not mutate function arguments
	let arrayB = array.slice();
	// cut the first half from the array to divide it
	let arrayA = arrayB.splice(0, arrayB.length / 2);

	// divide further and sort
	arrayA = mergeSort(arrayA);
	arrayB = mergeSort(arrayB);

	// new array for sorted elements
	let newArray = [];

	// counters
	let a = 0;
	let b = 0;
	let n = 0;

	// merge both arrays
	while (n < array.length) {
		// copy 'a' if element of arrayA is smaller or if arrayB has run out of elements
		if (arrayA[a] < arrayB[b] || b === arrayB.length) {
			newArray[n] = arrayA[a];
			a += 1;
			n += 1;
			// copy 'b' if element of arrayB is smaller, arrayA has run out of elements or elements are equal
		} else {
			newArray[n] = arrayB[b];
			b += 1;
			n += 1;
		}
	}

	return newArray;
}

export default mergeSort;
