/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another,
   such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let s1 = str1.length;
  let s2 = str2.length;

  if (s1 != s2) {
    return false;
  }

  str1 = str1.split("").sort().join();
  str2 = str2.split("").sort().join();

  for (let i = 0; i < s1; i++) {
    if (str1[i] != str2[i]) {
      return false;
    }
  }
  return true;
}

// let a = isAnagram('working', 'non');
// console.log(a);

module.exports = isAnagram;
