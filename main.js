import * as WM from './modules/word_maker.js';
let wmOutput = WM.wordMaker('feefee', 'bookcafe');

window.onload = function() {
    console.log(wmOutput);
};