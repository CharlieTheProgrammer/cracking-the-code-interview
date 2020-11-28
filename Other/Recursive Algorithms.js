let word = 'radar';

// Assumes word will be at least 1 character long
const reverseString = (str) => {
	let stringLength = str.length;
	if (stringLength === 1) return str[0];

	let lastLetter = str[stringLength - 1];
	let newStr = str.slice(0, stringLength - 1);
	return lastLetter + reverseString(newStr);
};

// console.log(reverseString(word));

let permutate = [1, 2, 3, 4];

// Works
const perm = (arr) => {
	if (arr.length === 2) {
		return [arr];
	}
	let rarr = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			rarr.push([arr[i], arr[j]]);
		}
	}
	return rarr;
};

// console.log(perm(permutate));

const recursivePerm = (arr, i, j) => {};

// console.log(recursivePerm());
fact = 8;
const factorial = (fact) => {
	let sum = 1;
	for (let i = 1; i < fact + 1; i++) {
		sum *= i;
	}
	return sum;
};
// console.log(factorial(fact));

// Success !
const recursiveFactorial = (n) => {
	// base case
	if (n == 1) return 1;
	return n * recursiveFactorial(n - 1);
};
// console.log(recursiveFactorial(fact));

let naturalNum = 5;

const recursiveSumOfNaturalNumber = (n) => {
	if (n == 1) return 1;

	return n + recursiveSumOfNaturalNumber(n - 1);
};

// console.log(recursiveSumOfNaturalNumber(naturalNum));

let multiplyA = 10;
let multiplyB = 9;

const recursiveMultiply = (a, b) => {
	if (a > b) {
		if (b === 1) return a;
		else return a + recursiveMultiply(a, b - 1);
	}

	if (a == 1) {
		return b;
	}
	return b + recursiveMultiply(a - 1, b);
};

// console.log(recursiveMultiply(multiplyA, multiplyB));

let stringToReverse = 'cat';

const recursiveReverseString = (str) => {
	// Base case
	if (str.length === 1) {
		return str[0];
	}
	return str[str.length - 1] + recursiveReverseString(str.substr(0, str.length - 1));
};

// console.log(recursiveReverseString(stringToReverse));

// Medium hard
let word1 = 'eshfisl';
let word2 = 'cat';

isElfishRecursive = (word, matchedLetters = []) => {
	if (matchedLetters.includes('e') && matchedLetters.includes('l') && matchedLetters.includes('f')) {
		return true;
	} else if (word.length === 0) {
		return false;
	}

	let ll = word[word.length - 1];
	let newWord = word.substr(0, word.length - 1);
	switch (ll) {
		case 'e':
			matchedLetters.push('e');
			break;
		case 'l':
			matchedLetters.push('l');
			break;
		case 'f':
			matchedLetters.push('f');
			break;

		default:
			break;
	}
	return isElfishRecursive(newWord, matchedLetters);
};

console.log(isElfishRecursive(word1));
