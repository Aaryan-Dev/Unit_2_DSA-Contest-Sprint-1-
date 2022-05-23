// Given an array of size n. Array elements are in the range from 1 to n. In the given array, one number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.

// Print the missing one first and then the repeated one with a space character in between them.

// Note : You have to take the input on your own


function array(N, arr){
    let bag = "";
for(j=0; j<N; j++){
 let count = 0;
     if(j+1==arr[j]){
         count++
     }
 
     if(count===2){
         bag = bag + (j+1)+" ";
     }else if(count===0){
         bag = bag + (j+1)+" ";
     }
 
}
         console.log(bag);
}


function runProgram(input) {
input = input.trim().split("\n");
let T = +input[0];
let line = 1;

for(i=0; i<T; i++){
let N = +input[line]
line++
let arr = input[line].trim().split(" ").map(Number);
line++
array(N, arr);
}
}
if (process.env.USER === "") {
runProgram(``);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
read += input;
});
process.stdin.on("end", function () {
read = read.replace(/\n$/, "");
read = read.replace(/\n$/, "");
runProgram(read);
});
process.on("SIGINT", function () {
read = read.replace(/\n$/, "");
runProgram(read);
process.exit(0);
});
}