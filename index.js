// console.log("Before Function");
// function showMessage(){
//     console.log("Hello World");
// }
// console.log("After Function");
// showMessage();
// console.log("After Function call");


// function sum(a , b){
//     console.log(a+b);
// }

// sum(4, 5);
// sum(6, 1);
// sum(14);

// function calculateScore(sub1, sub2, sub3){
//     return (sub1 + sub2 + sub3) / 3;
// }
// function findGrade(score){
//     if(score>80 && score <=100) {
//         console.log("Grade A");
//     }
//     else if(score>70 && score <=80) {
//         console.log("Grade B");
//     }
//     else if(score>60 && score <=70) {
//         console.log("Grade C");
//     }
//     else {
//         console.log("Grade F");
//     }
// }

// var score1 = calculateScore(45,67,89);
// var score2 = calculateScore(87,95,72);
// console.log("Score1 = "+score1);
// console.log("Score2 = "+score2);

// findGrade(score1); 
// findGrade(score2);

// function multiply(num1, num2){
//     return num1 * num2;
// }

// function sum(a, b){
//     return multiply(a, b) + b;
// }

// var add = sum(7,5);

// console.log("Addition =",add);


// var a = 8;

// function sum(){
//     var b = 6;
//     var a = b + 5;
// }

// sum();
// console.log("A = "+a);



// var a = 8;

// function sum(){
//     var b = 6;
//     var a = b + 5;
// }

// sum();
// console.log("A = "+a);


// var a = 8;

// function sum(){
//     var b = 6;
//     var a = b + 5;
// }

// sum();
// console.log("A = "+a);

// var a = 10;

// function sum(){
//     var b = 6;
//     var a = b + 5;
// }

// sum();
// console.log("A = "+a);



// var a = 7;

// function sum (){
//     b = 7;
//     a = b + 1;
// }
// console.log("A before = "+a);
// sum();
// console.log("A after = "+a);
// console.log("B = "+b);


// var a = 7;

// function sum (){
//     b = 7;
//     a = b + 1;
// }
// console.log("A before = "+a);
// sum();
// console.log("A after = "+a);
// console.log("B = "+b);


// var a = 7;

// function sum (){
//     b = 7;
//     a = b + 1;
// }
// console.log("A before ="+a);
// sum();
// console.log("A after = "a);
// console.log("B = "+b);


// var mul = multiply(3, 2);
// console.log("MUL = "+mul);
// var add = sum(4,5);
// console.log("Add = "+add);

// var sum = function(a,b){
//     return a + b;
// };

// function multiply(num1, num2){
//     return num1 * num2;
// }

// function factorial(n){
//     if(n<=1){
//         return 1;
//     }
//     else {
//         return n * factorial(n-1);
//     }
// }

// console.log(factorial(3));
// console.log(factorial(6));

function factorial(n){
    if(n<=1){
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}
console.log(factorial(3));
console.log(factorial(6));