

// Given an array find out the total numbber of 0 and 1 

let arr = [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0];

let all_zero = 0;
let all_one = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        all_zero++;
        
    } else if (arr[i] === 1) {
        all_one++;
    }
    else{
        console.log("please enter o and 1");
    }
}

console.log("number of 0's are :", all_zero);
console.log("number of 1's are :", all_one);

