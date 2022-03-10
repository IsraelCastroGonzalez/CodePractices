//WordMaker
/*
import * as WM from './modules/word_maker.js';
let wmOutput = WM.wordMaker('feefee', 'bookcafe');

window.onload = function() {
    document.write("Word Maker Output: " + wmOutput);
};
*/

//WordLookUp
/*
import * as WLU from './modules/wordLookUp.js';
let wordLookUp = WLU.lookUpWords();
window.onload = function() {
    document.write(wordLookUp);
};
*/

//FizzBuzz
/*
import * as FB from './modules/fizzBuzz.js';
let fb = FB.fizzBuzz(40);
window.onload = function() {
    document.write(fb);
};
*/

import * as nextPermutation from './modules/numberPermutations.js';
var numsArray1 = [2,4,6,8,5,2,1];
var numsArray2 = [5, 4, 3, 2, 1];
var numsArray3 = [1,2,3];

window.onload = function() {
    document.write("Permutation Example 1 - Input: ["+ numsArray1 +"] Output: [" + nextPermutation.findPermutation(numsArray1) +"]<br>" +
                   "Permutation Example 2 - Input: ["+ numsArray2 +"] Output: [" + nextPermutation.findPermutation(numsArray2) +"]<br>" + 
                   "Permutation Example 3 - Input: ["+ numsArray3 +"] Output: [" + nextPermutation.findPermutation(numsArray3) +"]"
    );
};