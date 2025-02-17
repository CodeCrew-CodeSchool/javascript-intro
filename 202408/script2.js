/* 
variable keywords
var
let
const
*/

/*
variable datatypes

string
int / number
boolean
undefined
null

objects - document
arrays - [0, 1, 2, 3]
function 
*/
console.log('not in a function - runs automatically')
window.onload = function() {
    console.log('runs when the onload event fires');

    function ourFunction() {
        console.log('this will only run when we call it');
    }

}
function browserFunction() {
    console.log('this will only run when we call it');
}

