const assert = require('assert')
/**
 * 1.1. Implement an algorithm to determine if a string has all unique characters.
 * What if yu cannot use additional data structures?
 *
*/

// First off, assuming I can use a data structure, I would use a hash table.
function areCharactersUniqueHT(str) {
    let ht = {}

    for (let i = 0; i < str.length; i++) {
        if (ht[str[i]]) {
            return false
        } else {
            ht[str[i]] = str[i]
        }
    }

    return true
}

assert.ok(areCharactersUniqueHT('cat') === true)
assert.ok(areCharactersUniqueHT('nott unique') === false)

// Assuming I can't use additional data structures beyond array.
// Remember, a string cannot be sorted in JS, it must be turned into an array first.
function areCharactersUnique(str) {
    let sStr = str.split('').sort()

    for (let i = 0; i < sStr.length - 1; i++) {
        if (sStr[i] === sStr[i + 1]) {
            return false
        }
    }
    return true
}
assert.ok(areCharactersUnique('cat') === true)
assert.ok(areCharactersUnique('catt') === false)


/**
 * 1.2 Given two strings, write a method to decide if one is a permutation of the other.
 * Assumptions:
 *     - Case sensitive
 *     - Each string must contain characters in the same amount.
 */

// First attempt, more of a brute force method.
// The split methods add n and sorts add log n.
function isPermutation1(str, perm) {
    if (str.length !== perm.length) return false

    let sStr = str.split('').sort()
    let sPerm = perm.split('').sort()

    for (let i = 0; i < sStr.length; i++) {
        if (sStr[i] !== sPerm[i]) return false
    }

    return true
}

assert.ok(isPermutation1('abc', 'bca') === true)
assert.ok(isPermutation1('abbc', 'bbca') === true)
assert.ok(isPermutation1('abbC', 'bbCa') === true)
assert.ok(isPermutation1('a', 'bbca') === false)
assert.ok(isPermutation1('A', 'a') === false)

// Second attempt. Using hash table to get big O of n. Same assumptions as before.
function isPermutation2(str, perm) {
    if (str.length !== perm.length) return false

    let ht = {}
    // Place all str characters in hash table and keep track of the amount of times
    // each character appears as the key value.
    for (let i = 0; i < str.length; i++) {
        if (ht[str[i]]) {
            ht[str[i]] = ht[str[i]] + 1
        } else {
            ht[str[i]] = 1
        }
    }

    // Check that each character in second str exists in ht and...
    for (let i = 0; i < perm.length; i++) {
        if (!ht[perm[i]]) return false

        // decrease count for each character found.
        if (ht[perm[i]]) {
            ht[perm[i]] = ht[perm[i]] - 1
        }

        // once counter is 0, delete the key value pair
        if (ht[perm[i]] === 0) {
            delete ht[perm[i]]
        }
    }

    return true
}

assert.ok(isPermutation2('abc', 'bca') === true)
assert.ok(isPermutation2('abbc', 'bbca') === true)
assert.ok(isPermutation2('abbC', 'bbCa') === true)
assert.ok(isPermutation2('a', 'bbca') === false)
assert.ok(isPermutation2('A', 'a') === false)

/**
 * 1.3 Write a method to replace all spaces in a string with '%20.
 */

function urlIfy(str) {
    if (str.length === 0 || !str) return url

    let trimmedStr = str.trim()
    let arr = []
    for (let i = 0; i < trimmedStr.length; i++) {
        if (trimmedStr[i] === ' ') {
            arr.push('%20')
        } else {
            arr.push(trimmedStr[i])
        }
    }

    return arr.join('')
}

assert.ok(urlIfy(" Mr. Smith") === "Mr.%20Smith")
assert.ok(urlIfy(" Mr.  Smith") === "Mr.%20%20Smith")
assert.ok(urlIfy("  Mr.  Smith") === "Mr.%20%20Smith")
assert.ok(urlIfy("  Mr.  Smith ") === "Mr.%20%20Smith")
assert.ok(urlIfy(" Mr.  Smith ") === "Mr.%20%20Smith")
assert.ok(urlIfy("Mr. Smith Junior") === "Mr.%20Smith%20Junior")

/**
 * 1.4 Palindrome Permutation
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word that is the same backwards or forwards.
 *
 * In other words, the first half of a palindrome is a mirror image or the second half
 * aacctt is a palindrome because each character comes in pairs, ie even numbers.
 *
 * The exception here is an odd numbered word where there is only 1 set of characters
 * that has an odd count.
 * aaccttj works -> actjtca
 * aaccttjjj works too -> actjjjtca
 *
 * Therefore all characters must be in pairs and/or there can only be one set of
 * character that have an odd number of characters.
 */

function hasPalindromePermutation(str) {
    if (!str || str.length === 0) return false
    let ht = {}

    // Map chars to hash table where values is the count of chars
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') continue    // Ignoring spaces
        let char = str[i].toLowerCase() // Ignoring casing
        if (ht[char]) {
            ht[char] = ht[char] + 1
        } else {
            ht[char] = 1
        }
    }

    // I only care that there is 1 or less char with an odd count.
    // If there are more than 1 of these, then the str cannot be a palindrome
    return Object.values(ht).filter(value => value % 2 !== 0).length <= 1
}

assert.ok(hasPalindromePermutation('Anna') === true)
assert.ok(hasPalindromePermutation('Civic') === true)
assert.ok(hasPalindromePermutation('Kayak') === true)
assert.ok(hasPalindromePermutation('Red rum, sir, is murder') === true)
assert.ok(hasPalindromePermutation('Step on no pets') === true)
assert.ok(hasPalindromePermutation('Top spot') === true)

/**
 * 1.5 One Away
 * There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two string, write a function to check
 * if they are one or zero edits away.
 *
 * This one was tough because there are different checks I needed to do.
 *
 * The easiest thing to check for was the one or zero edits based on length.
 * If the difference in length between the strings is more than one, then it's
 * certainly not one away because more than one edit would be needed to make them
 * the same length.
 *
 * If the strings are the same size, then I simply only need to count if there are
 * any mismatches in the letters and if there are more than 1, then it's not one edit away.
 *
 * If the the strings are not the same size, then I need to insert the missing letter
 * from the longer string into the shorter string or vice versa, and continue
 * to make sure all the letters match after the insertion/deletion.
 *
 * The biggest challenges I faced was organizing the different steps of the algo
 * to make the code readable and how to deal with the insertion/removal. I need
 * to know the length of each string and then dynamically decide which string
 * to perform the insert on.
 *
 * Since strings are immutable in JS, I have to create a copy of them in order
 * to modify them. Also, I have to dynamically update the string.
 *
 * One of the expensive operations here is copying over the string, which is o(n).
 * However, this doesn't not signifiantly add to the runtime. O(2N) of worst
 * case scenario where the strings are slightly different in size, which reduces
 * to O(N).
 *
 * Best case O(1) if strings are more than 1 in length difference.
 * Else, O(N) since we're running through both strings in one pass.
 *
 */

function oneAway(str1, str2) {
    const str1Len = str1.length
    const str2Len = str2.length

    if (Math.abs(str1Len - str2Len) > 1) return false

    if (str1Len === str2Len) {
        // Iterate over string and check that each character matches the other exactly
        for (let char = 0; char < str1Len; char++) {
            let errors = 0
            if (errors === 2) return false
            if (str1[char] !== str2[char]) errors++
        }
        return true
    }

    let errors = 0
    let longestLen = str1Len > str2Len ? str1Len : str2Len
    let strs = {
        [str1Len]: str1,
        [str2Len]: str2
    }

    for (let char = 0; char < longestLen; char++) {
        if (strs[str1Len][char] !== strs[str2Len][char]) {
            ++errors
            if (errors === 2) return false
            strs[longestLen - 1] = strs[longestLen - 1].substring(0, char) + strs[longestLen][char] + strs[longestLen - 1].substring(char)
        }
    }
    return true
}

assert.ok(oneAway("pale", 'ple') === true)
assert.ok(oneAway("pales", 'pale') === true)
assert.ok(oneAway("pale", 'bale') === true)
assert.ok(oneAway("pale", 'bae') === false)
assert.ok(oneAway("apple", 'aple') === true)
