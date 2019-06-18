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