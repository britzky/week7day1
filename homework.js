
//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    // iterate through the length of array
    for(let i = 0; i < dog_names.length; i++ ) {
        // check if the string includes any of the items in the array
        if(dog_string.includes(dog_names[i])) {
            // log the items that are the same in the string and array. 
            console.log(`Matched ${dog_names[i]}`)
            // if the word in string isn't in the array log 'no match'
        } else {
            console.log("No Match")
        }
    }
}

console.log(findWords(dog_string, dog_names))

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEvens(arr){
    //loop through every even index of the array
    for(let i = 0; i < arr.length; i +=2) {
        // replace each even index with "even index"
        arr.splice(i, 1, "even index")
    }
    return arr
}
// declare a new variable containing the updated array
let newArr = replaceEvens(arr)
console.log(newArr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//============Exercise #3 ============//
/*I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
Can you help me fix the function?
 */
function addFive(num) {
    //decalre variable that adds 5 to whatever number is passed in
    let total = num + 5 
    return total
}
console.log(addFive(370))

//============Exercise #4 ============//
/*Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
 */
function shortcut(string) {
    //create an empty array to put the consonants in
    let consonants = [];
    // define the vowels
    let vowels = ['a', 'e','i','o','u'];
    //make an empty string to put the new string in
    let word = '';
    //loop through the string
    for(let i = 0; i < string.length; i++) {
        //make a variable for each letter in the string
        let letter = string[i];
        // Check if the letter is a vowel using ! as an operator to say NOT
        if (!vowels.includes(letter)) {
            //put the consonant in the consonant array
            consonants.push(letter)
        }
    }
    //join the consonants together to form the desired word
    return consonants.join(word);
  }
console.log(shortcut('hello'))
console.log(shortcut('codewars'))
console.log(shortcut('goodbye'))
console.log(shortcut('HELLO'))