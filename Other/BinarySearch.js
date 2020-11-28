const binarySearch = (needle, haystack) => {
	// Assume that array is already sorted
	let low = 0;
	let high = haystack.length - 1;

	while (low <= high) {
		let mid = Math.floor(high + low / 2);

		if (haystack[mid] === needle) {
			return mid;
		} else if (haystack[mid] < needle) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return -1;
};

// If we want to hide the recursive parameters to make the function easier to use
// I can simply wrap it.
const binarySearch2 = (needle, haystack) => {
	return recursiveBinarySearch(needle, haystack, haystack.length, 0);
};

const recursiveBinarySearch = (needle, haystack, high, low) => {
	// Base case
	if (low > high) return -1;

	let mid = Math.floor((high + low) / 2);
	if (haystack[mid] === needle) {
		return mid;
	} else if (haystack[mid] < needle) {
		low = mid + 1;
	} else {
		high = mid - 1;
	}
	return recursiveBinarySearch(needle, haystack, high, low);
};

let haystack = [1, 2, 3, 4, 5, 6, 7];
let needle = 9;

console.log(binarySearch2(needle, haystack));
console.log(recursiveBinarySearch(needle, haystack, haystack.length, 0));
