

// given a string , find out the total  numbers of vowels 
// string = "your name"

let string = "rahul"
let vowels_count = 0
let vowels = "aeiouAEIOU"




for (let i = 0; i < string.length; i++) {
    for (let k = 0; k < vowels.length; k++) {
        if (string[i] === vowels[k]) {
            vowels_count++;
        }
    }
}

console.log("number of vowels is :", vowels_count);


