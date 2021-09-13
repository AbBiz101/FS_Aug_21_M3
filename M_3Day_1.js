/** * @format*/

/*--------------------------------------------Homework--------------------------------------------------------*/

/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum.*/

function sum(x, y) {
	if (x === y) {
		console.log(x * 3);
	} else {
		console.log(x + y);
	}
}
sum(2, 2);
sum(2, 3);

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50.

function numcheck(x, y) {
	if (typeof x == 'number' && typeof y == 'number') {
		if (x === 50 || y === 50 || x + y === 50) {
			console.log(true);
		} else {
			console.log(false);
		}
	}
}
numcheck(10, 15);
numcheck(15, 50);

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

function remove(num, str) {
	console.log(str.slice(0, num) + str.slice(num + 1));
}

remove(2, 'abcg');

/* 4. Create a function to find and return the largest of three given integers. */
function largest(x, y, z) {
	largnum = 0;
	if (x > y) {
		largnum = x;
	} else {
		largnum = y;
	}
	if (largnum < z) {
		largnum = z;
	}
	console.log(largnum);
}
largest(2, 5, 6);

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

function range(x, y) {
	if (x <= 60 && x >= 40 && y <= 60 && y >= 40) {
		console.log(true);
	} else if (x <= 100 && x >= 70 && y <= 100 && y >= 70) {
		console.log(true);
	} else {
		console.log(false);
	}
}

/*--------------------------------------------Homework ADV--------------------------------------------------------*/

/* 1. Given a string (as a parameter), return the character that is most commonly used. */
function common(str) {
	let char = ' ';
	let max = 0;
	let all = {};
	for (let i of str) {
		all[i] = all[i] + 1 || 1;
	}
	for (let i in all) {
		if (all[i] > max) {
			max = all[i];
			char = i;
		}
	}
	console.log(`${char} times ${max}`);
}
common('assaxxccaaaavcrgthsasas');

/* 2. Check if two strings (passed as parameters) are anagrams of each other. 
    Do not consider spaces or punctuation, make the whole word lower case. 
    Return `true` if the words are anagram, return `false` if they aren't. */
function anagrams(text, text1) {
	let a = text.toLowerCase().replace(/\s/g, '').split('').sort();
	let b = text1.toLowerCase().replace(/\s/g, '').split('').sort();

	if (a.length == b.length) {
		for (let i of a) {
			if (a[i] === b[i]) {
				console.log(true);
				break;
			} else {
				console.log(false);
				break;
			}
		}
	} else {
		console.log(false);
	}
}
anagrams('maracfy', 'aarfmsc');

/* 3. Given a word and a list of possible anagrams (both passed as parameters), return the correct list of anagrams: 
    Ex. "listen" is the word, ["enlist", "google", "inlets"] are the possibilities: the output should be ["enlist", "inlets"]
*/

/* 4. Given a string (as parameter), return `true` if the string is a palindrome or `false` if it is not. Include spaces and punctuation. */

function palindrome(text, text1) {
	let a = text.toLowerCase().split('').sort();
	let b = text1.toLowerCase().split('').sort();
	if (a.length == b.length) {
		for (let i of a) {
			if (a[i] === b[i]) {
				console.log(true);
				break;
			} else {
				console.log(false);
				break;
			}
		}
	} else {
		console.log(false);
	}
}
/* 5. Given an integer (as parameter), return an integer which digitas are the same as the original number, but reversed.
    Ex: 189 â‡’ 981 
*/

function reversed(x) {
	let y;
	for (let i = x.length; (i = 0); i--) {
		y.push(x[i]);
	}
}
reversed(1);

/* 6. Write a function that takes a positive number X as a parameter. The function should output (as console.log) a step shaped 
string with X level usign the `#` character. Make sure the steps are on the right hand side:
	2 steps:
        '# '
        '##'
    3 steps:
        '#  '
        '## '
        '###'
    4 steps:
        '#   '
        '##  '
        '### '
        '####'
*/
function tree(x) {
	for (let i = 1; i <= x; i++) {
		console.log(`${i} string`);
		for (let j = 0; j <= i; j++) {
			let star = '#'.repeat(j);
			console.log(star);
		}
	}
}
tree(5);

/* 7. Create a function that, given a string as a parameter, returns a new string which is the original string, but reversed: 
"hello" â‡’ "olleh" */

/* 8. Create a function that takes an array and a "chuck size" as parameters. 
    Divide the array into subarrays with the "chunk size" as lenght: 
    array: [1, 2, 3, 4], chunk size: 2 â†’ [[ 1, 2], [3, 4]]
    array: [1, 2, 3, 4, 5], chunk size: 4 â†’ [[ 1, 2, 3, 4], [5]]
*/

/* 9. Write a function that accepts a positive number X as parameter. 
The function should console.log a pyramid shape with N levels built using the `#` character. 
Example with X = 3
```
 '  #  '
 ' ### '
 '#####'
```
*/

/* 10. Write a function that accepts an integer N and returns a NxN spiral matrix:
Ex: 
N = 2
[[1, 2],
[4, 3]]
N = 3
[[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]
N = 4
[[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10,  9,  8, 7]]
*/
