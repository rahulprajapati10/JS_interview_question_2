


//  given an array , find out total number of even and odd number

let arr = [1, 5, 6, 3, 8, 9, 7, 2];

let odd_numbers = 0;
let even_numbers = 0;



for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even_numbers++;     // increment operator 
    } else {
        odd_numbers++;
    }
}

console.log(" odd numbers are :", odd_numbers);
console.log(" even numbers are :", even_numbers);
