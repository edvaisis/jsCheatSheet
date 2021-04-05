//variables
// var b = 'betkas';
// console.log(b);


// Manipulate DOM with js. Fancy Way of saying change HTML with js 
// var someNumber = 324;
// console.log(someNumber);

//var age = prompt('What is your age?');
//document.getElementById('someText').innerHTML = age;

// Numbers in Javascript

// console.log(50 / 5);
// ////
// var num1 = 10;
// num1 = num1 + 1;
// console.log(num1);
///increment number by 1
// var num1 = 10;
// num1++;
// console.log(num1);

///decrement number by 1
// var num1 = 10;
// num1++;
// num1--;
// console.log(num1);

/// Divide, multiply *, remainder%
// console.log(num1 % 6);

//console.log(num1 / 6);

//Increment/decrement by any number by 10

// num1 += 20;// prints 30
// console.log(num1);

///functions 
// 1. Create a function
// 2. Call a function

//Create
// function fun(){
//     console.log('This is a function');
// }
// //Call
// fun();

// Lets create a function that's take a name and says hello followed by your name
//Name: "Ed"
//return "Hello Ed"

// var name = "Ed";

// function callName(yourName){
//     var result = 'Hello '+' '+yourName; // String concatenation
//     console.log(result);
    
// }
// var name = prompt('What is your name?');

// callName(name);

// // How do arguments work with function?
// // How do we add two numbers in function
// function sumNumbers(num1, num2){

//     var result= num1 + num2;
//     console.log(result);

// }
// sumNumbers(10,20);/// combaining two numbers together
// // sumNumbers('Hello', ' Edvardas');/// combaining two string together

/// While loops multiple times
// var num = 0;
// while(num < 100){
//     num += 1;
//     console.log(num);
// }


/// for loop stop at surtent point
// for(let num=0; num<=100; num++){
//     console.log(num);
// }

//Data types
//18 number 

let yourAge = 18;//number
let yourName = 'Bob';//string
let name = {first: 'Jane', last: 'Doe'};// object{
console.log(name);///}
let truth = false;//boolean
let groceries = ['apple', 'banana', 'oranges']; //array{
console.log(groceries);//}
let random;//undefined{
console.log(random);//}
let nothing = null; //value null{
console.log(nothing);//}

// Strings and javascript (conmmon methods)
let fruit = 'banana,apple,coconut,cherry';
let moreFruits = 'banana\apple';// new line

// console.log(fruit.length);// string length
// console.log(fruit.indexOf('an')); // find caracters
// console.log(fruit.slice(2, 6)); // find caracters
// console.log(fruit.replace('ban', '123')); // find replace caracters
// console.log(fruit.toUpperCase(fruit)); // uppercase
// console.log(fruit.toLocaleLowerCase(fruit)); // lowercace
// console.log(fruit.charAt(2)); // find charcter at specific position both are the same thing
// console.log(fruit[2]);// find charcter at specific position both are the same thing
//console.log(fruit.split(',')); //separtes by comma if you are using csv file good example, 


//arrays 

let fruits=['banana', 'apples', 'orange', 'pineaples'];
fruits = new Array('banana', 'apples', 'orange', 'pineaples');

fruits[0] = "pear"; //access value at the index
console.log(fruits);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
 //array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' * '));// joins array with simbol *
console.log(fruits, fruits.pop(), fruits);// pop removes last element of the array
console.log(fruits.push('blackberries'), fruits);//appends item in array
console.log(fruits[4]);
fruits[4] = 'new fruit';// adds new item in array 
console.log(fruits);
fruits.shift();//removes first element of array
console.log(fruits);
fruits.unshift('kiwi');// adds first element in array
console.log(fruits);
// create new array of vegetables
let vegetables = ['sparagus', 'tomato', 'brolcoli'];
let allGroceries = fruits.concat(vegetables);// concatinate two arrays in one array
console.log(allGroceries);// print all in one array
console.log(allGroceries.slice(1,4));//change order in array
console.log(allGroceries.reverse());// change array from the other end
console.log(allGroceries.sort());// change array from the other end

// array of the numbers
let someNumbers = [5, 10, 2, 25, 3, 255, 1, 35, 334, 321, 2];// arary of numbers
console.log(someNumbers.sort(function(a, b) {return b-a})); // with numbers you need to pass in function a-b | b-a accendin and decending

let emptyArray = new Array();
for(let num = 0; num<=10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in javascript 
//dictionaries in Python 

let student = {first: 'Osman', last: 'Kaunas', age:25, height:170, studentInfo: function (){
    return this.first + '\n' + this.last;
}};
console.log(student.first);
console.log(student.last);
student.first = 'jackson';// change value 
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());



