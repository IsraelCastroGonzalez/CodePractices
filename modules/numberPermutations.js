/**
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. 
More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, 
then the next permutation of that array is the permutation that follows it in the sorted container. 
If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

Example 1:
Input: nums = [1,2,3]
Output: [1,3,2]

Example 2:
Input: nums = [3,2,1]
Output: [1,2,3]

Example 3:
Input: nums = [1,1,5]
Output: [1,5,1]

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100
**/

export{ findPermutation }

function findPermutation(arrayOfNumbers){
    var i = arrayOfNumbers.length - 2; // we get the position before the last index
    while(i >= 0 && arrayOfNumbers[i+1] <= arrayOfNumbers[i]){
        i--; // so we can check pairs of numbers starting from the last index
             // while the  prev.pos >= next.pos  
    }// at the end i has the first decreasing value

    if(i >= 0){
        var j = arrayOfNumbers.length - 1; // start at the last index
        while(arrayOfNumbers[j] <= arrayOfNumbers[i]){ // find the first number that is bigger than arrayOfNumbers[i]
            j--;
        }
        //helper function to swap the nummbers.
        SwapNumbers(arrayOfNumbers, i, j );
    }
    //helper function to change the numbers between the indexes.
    FixNumberOrder(arrayOfNumbers, i + 1);
    return arrayOfNumbers;
}

function SwapNumbers(arrayOfNumbers, positionI, positionJ){
    var holdValue = arrayOfNumbers[positionJ];
    arrayOfNumbers[positionJ] = arrayOfNumbers[positionI];
    arrayOfNumbers[positionI] = holdValue;
}


function FixNumberOrder(arrayOfNumbers, startIndex){
    var i = startIndex; //get the value to be able to increase it later
    var j = arrayOfNumbers.length-1; // we start at the end of the array
    while (i < j){ // while indexes haven't crossed paths
        SwapNumbers(arrayOfNumbers, i, j); //swap the numbers
        j--;
        i++;
        //and adjust the indexes values to swap the next array values
    }
}