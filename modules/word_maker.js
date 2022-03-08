// Create a program that given a source word, takes letters from it to build a goal word, when a letter is taken, 
// this one can not be counted again towards the goal word, and a new source word should be needed.
// the program should return the number of source words needed in order to create the goal word.

// example 1: goal = 'fee'
// source = 'bookcafe'
// output = 2 (number of times source word needed to build the goal word)

// if error: -1 

// example 2: goal = 'fafafa'
// source = 'bookcafe'
// output: 3

var numOfWords = 1;
var builtWord = [];

// return number of source words needed to create goal string
function wordMaker(goal, source){
    //console.log(goal);
    if(!achiavableTask(goal, source)){
        numOfWords = -1;
        return numOfWords;
    }

    var cuttedLetters = 0;
    var goalArray = goal.split('');
    var sourceArray = source.split('');

    for(let i = 0; i < goalArray.length ; i++){
        var indexOfLetter = sourceArray.join('').indexOf(goalArray[i]); // because we are removing the letters, the size is decreasing
                                                                        // we need to refresh the posible 'indexOf' integer we get

        if(builtWord.join('') === goal) break;// if the word we are building is the same as the goal, we stop.
        if(indexOfLetter === -1){
            // if at any point the letter im looking for doesnt appear in the remaining letters
            numOfWords++; //increment the amount of source words needed.
            goalArray.splice(0, cuttedLetters); // remove the letters from goal which we already have
            wordMaker(goalArray.join(''),source); //run it again, with the new goal
        }
        else{
            cuttedLetters++; //count the amount of letters we've used so far
            builtWord.push(sourceArray[indexOfLetter]); // save the letter in an array
            sourceArray.splice(indexOfLetter,1); // remove the letter from the source word we are currently using
        }
    }
    return numOfWords;
}

function achiavableTask (goal, source){
    //just check if its possible to build the word with the input given
    var achiavable = true;
    var splitGoal = goal.split('');
    splitGoal.forEach(letter => {
        if(source.indexOf(letter) === -1){
            achiavable = false;
            return achiavable;
        }
    });
    return achiavable;
}

export {wordMaker};