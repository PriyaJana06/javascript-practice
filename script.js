//////////   Ac   //////////


// console.log("Welcome to Priyanka's World.");       
// console.log("Priyanka Jana.");
// console.log("I love JavaScript.");

// fullname = "Tony Stark";
// _fullname = "shraddha khapra";
// age = 24;
// price = 99.99;
// x = null;
// y = undefined;
// isFollow = false;
// isnotFollowed = true;
// // fullname = 34; dynamically typed language.
// console.log(_fullname);

// let age = 33;
// age = 34;
// age = 56;
// const PI = 3.14;
// let a;
// a = 56;
// const b=78;
// console.log(b);

// {
//     let a = 5;
//     console.log(a); block scope variable.
// }
// {
//     let a = 5;
//     console.log(a);  block scope variable.
// }

/* let student = {
    fullName : "Priyanka Jana",
    age : 19,
    cgpa : 8.2,
    isPass : true
};

student["age"] = student["age"] + 2;
student["fullName"] = "Priyanka Roy";

console.log(student.age);
console.log(student.fullName); */


// const product = {
//     name : "Ball Pen",
//     rating : 4,
//     offer : 5,
//     price : 270,
// };

// console.log(product)

// const profile = {
//     username : "priyankajana_123",
//     followers : 559,
//     following : 4,
//     isFollow : false,
//     posts : 195,
// }

// console.log(profile);
// console.log(typeof profile.isFollow);


// Arithmetic Operators in JS;
// let a = 7;
// let b = 3;

// console.log("a =",a ,"& b =", b);
// console.log("a + b =", a+b);
// console.log("a - b =", a-b);
// console.log("a * b =", a*b);
// console.log("a / b =", a/b);
// console.log("a % b =", a%b);
// console.log("a ** b =", a**b);

// Unary Operator:
// console.log("a =",a ,"& b =", b);
// console.log("a++ = ", a++);
// console.log(a)
// console.log("a-- = ", a--) 
// console.log(a)
// console.log("--a = ", --a)

//Assignment operators;
// let a = 7;
// let b = 3;
// a **= 5  // a = a ** 5
// console.log("a = ", a);

// Comparison Operators;
// let a = 5;
// let b = "5";
// console.log("Is a===b ? ->", a===b)

//if statements:
// let age = 28;
// if(age >= 18) {
//     console.log("You can vote.")
// }
// if(age < 18) {
//     console.log('You cannot vote.')
// }
// let mode = "light";
// let color;

// if(mode ==="dark") {
//     color = "black";
// }
// if(mode === "light") {
//     color = "white";
// }
// console.log(color);

//if else statement;
// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color);

// let number = 880;
// if(number % 2 === 0) {
//     console.log(number, "is even.");
// } else {
//     console.log(number,"is odd.");
// }

// else-if  statements:
// let age = 23;
// if(age > 0 && age <= 18) {
//     console.log("Junior.");
// } else if(age > 18 && age <= 30) {
//     console.log("Senior.");
// } else {
//     console.log("Middle-Aged");
// }

// let mode = "dark";
// if(mode === "dark") {
//     console.log(mode);
// } //for single condition 

// ternary operator;
// let age = 45;
// // let result = age >= 18 ? "adult" : "not adult";
// // console.log(result);
// age >= 18 && age < 45 ? console.log("adult") : console.log("not adult");

// let expr = "Apples";
// switch (expr) {
//     case "Oranges":
//       console.log("Oranges are $0.59 a pound.");
//       break;
//     case "Apples":
//       console.log("Apples are $0.32 a pound.");
//       break;
//     case "Bananas":
//       console.log("Bananas are $0.48 a pound.");
//       break; 
//     case "Cherries":
//       console.log("Cherries are $3.00 a pound.");
//       break;
//     case "Mangoes":
//     case "Papayas":
//       console.log("Mangoes and papayas are $2.79 a pound.");
//       break;
//     default:
//       console.log("Sorry, we are out of ",expr);
//   }
  
//   console.log("Is there anything else you'd like?")



//   const action = "say_hello";
//   switch (action) {
//     case "say_hello": {
//       const message = "hello";
//       console.log(message);
//       break;
//     }
//     case "say_hi": {
//       const message = "hi";
//       console.log(message);
//       break;
//     }
//     default: {
//       console.log("Empty action received.");
//     }
//   }
  
// const Animal = "Homo sapiens";
// switch (Animal) {
//   case "Cow":
//   case "Giraffe" :
//     case "Dog" :
//       case "Pig" :
//         console.log("This animal is not extinct.");
//         break;
//       case "Dinosaur" :
//         case "Homo sapiens" :
//       default:
//       console.log("This animal is extinct.");
// }


// alert("Hello!");
// let name = prompt("Hello!");
// console.log(name);
// let num = prompt("Enter a number:");
// if (num % 3 === 0) {
//     console.log(num, "is multiple of 3.");
// } else {
//     console.log(num, "is NOT a multiple of 3.");
// }

// let score = prompt("Enter your marks: ");
// if (score >= 80 && score <= 100){
//     console.log("Grade: A");
// } else if (score >= 70 && score <= 89){
//     console.log("Grade: B");
// } else if (score >= 60 && score <= 69) {
//     console.log("Grade: C");
// } else if (score >= 50 && score <= 49) {
//     console.log("Grade: D");
// } else {{
//     console.log("Grade: F");
// }}

// let score = prompt("Enter your score(0-100): ");
// let grade;

// if (score >= 80 && score <= 100) {
//     grade = "A";
// } else if(score >=70 && score <= 89) {
//     grade = "B";
// } else if (score >= 60 && score <= 69) {
//     grade = "C";
// } else if (score >= 50 && score <= 59) {
//     grade = "D";
// } else if (score >= 0 && score <= 49) {
//     grade = "F";
// }

// console.log("According to your marks, your grade is:",grade);


// loops in Javascript:

// for (let count = 1; count <= 10; count++){
//     console.log("Priyanka Jana!");
// }

// // Calculate sum of 1 to n;
// let sum = 0;
// let n = prompt("Enter a number:");
// for (let i=1; i<=n; i++) {
//     sum = sum + i;
// }
// console.log("sum =",sum);

// let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

// let i=1;
// do {
//     console.log("i=",i);
//     i++;
// } while(i<=10);

// for-of loop:
// let str = "Rajdeep";
// let length = 0;
// for(let i of str) { //iterator->characters
//     console.log("i=",i);
//     length++;
// }
// console.log("string length=",length)


// for-in loop;

// let student = {
//     name:"Rahul Kumar",
//     age:25, 
//     cgpa:8.9,
//     isPass:true,
// };
// for(let key in student) {
//     console.log("key=",key,":","value=", student[key]);
// }

// practice que;
// for (let i=0; i<=100; i++) {
//     if(i % 2 === 0){ //even number
//         console.log("Number =",i);
//     }
// }

// let gameNum = 30;
// let userNum = prompt("Guess the game number:");
// while(userNum != gameNum) {
//     userNum = prompt("You entered wrong number. Guess again:");
// }
// console.log("Congratulations, you entered the right number.");

// Strings:
// let str = "PriyankaRoy";
// console.log(str[8]);

// template literals;
// let obj = {
//     item: "pen", 
//     price: 10,
// };
// let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
// console.log(output);
// console.log("The cost of", obj.item,"is", obj.price,"rupees.");
// let specialString = `This is a template literals.`;
// console.log(specialString);

// let str = "Priyanka\tBoy."
// console.log(str.length);

// let str = "    Priyanka Jana JS   ";
// str = str.toUpperCase();
// // console.log(str);
// console.log(str.trim());

// let str = "01234567";
// console.log(str.slice(1,6));

// let str1 = "Priyanka";
// let str2 = "Roy";
// let res = "Hello" + 1234;
// console.log(res);

// let str = "hellololo";
// console.log(str.replaceAll("lo","p"));

// let str = "IloveJS";
// console.log(str.charAt(0));

// let fullName = prompt("Enter your full name (no space):");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);


// Arrays:
// let marks = [97, 82, 75, 67, 56];
// console.log(marks); 
// console.log(marks.length); //property

// let heroes = ["ironman", "hulk", "spiderman", "thor", "Shaktiman", "antman"];
// console.log(heroes);
// for(let index = 0; index < heroes.length; index++){
//     console.log(heroes[index]);
// }

// for (let hero of heroes) {
//     console.log(hero);
// }

// let cities = ["Delhi", "Pune", "Mumbai", "Hyderabad", "Bangalore", "Kolkata"];
// for (let city of cities) {
//     console.log(city.toUpperCase());
// }


// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let val of marks) {
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

// let items = [250, 645, 300, 900, 50];

// let idx = 0;
// for(let ele of items) {
//     console.log(`value at index ${idx} = ${ele}`);
//     let offer = ele/10
//     items[idx] = items[idx] - offer;
//     console.log(`value after offer = ${items[idx]}`)
//     idx ++;
// }
// for (let i = 0; i<items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);

// let foodItems = ["Potato", "Tomatoes", "Brinjal", "Spinach", "Chillies", "Fenugreek", "Lemon"];
// foodItems.push("kurkure", "Burger", "Paneer");
// console.log(foodItems)
// console.log(foodItems)
// let deletedItem = foodItems.pop();
// console.log("deleted" , deletedItem)
// console.log(foodItems.toString());
// console.log(foodItems);

// let marvel_heroes = ["thor", "spiderman", "ironman", "antman", "batman", "Captain America"]
// let dc_heroes = ["superman", "batman", "antman"];
// let indianheroes = ["Shaktiman", "Krish"]
// let heroes = dc_heroes.concat(marvel_heroes , indianheroes);
// console.log(heroes)
// marvel_heroes.unshift("Cindrella");
// console.log(marvel_heroes)
// let val = marvel_heroes.shift();
// console.log("deleted", val); 
// console.log(marvel_heroes) 
// console.log(marvel_heroes)
// console.log(marvel_heroes.slice(1)) 

// let num = [1, 2, 3, 4, 5, 6, 7];
// num.splice(2, 2, 101, 102);
// console.log(num)

// Element add;
// num.splice(2, 0, 101)
// console.log(num)

// Delete element
// num.splice(3, 1)
// console.log(num)

// Replace element
// num.splice(3, 1, 101);
// console.log(num)


//Array Questions:
// let companies = ["Bloomberg", "Microsoft" , "Uber", "Google", "IBM", "Netflix", "YouTube", "Capgemini"];
// companies.shift();
// console.log(companies)
// companies.splice(2, 1, "Ola")
// console.log(companies)
// companies.push("Amazon");
// console.log(companies)


// Functions and Methods:
// console.log("Hello");
// "abc".toUpperCase();
// [1, 2, 3].push(4);

// function myFunction() {
//     console.log("Welcome to Priyanka's World.");
//     console.log("We are learning JS.:)");
// }
// myFunction()

// function myFunction(msg,n) {// parameter = input
//     console.log(msg*n);
// }
// myFunction("I love JS.", 100) // argument

// function sum(a,b) {
//     s = a+b;
//     console.log("before return")
//     return s;
     
// }
// let val= sum(4,5)
// console.log(val);
// sum(687998,7585996);

//sum function;
// function sum(a, b) {
//     return a + b;
// }

// const arrowSum = (a,b) => {
//     console.log(a + b);
// }
// arrowSum(56, 65)     
//multiplication function'
// function mul(a, b) {
//     return a*b; 
// }
// const arrowMul=(x,y) => {
//     return x*y;
// }
// arrowMul(5,6)

// const arrowSum = (a,b) => {
//     console.log(a+b);
// }
// arrowSum(45,66)

// const printHello = () => {
//     return "Hello";
// }


// function countVowels(str) {
//     let count= 0;
//     for(const char of str) {
//         if(char === "a" || char === "e"|| char === "i"|| char === "o"|| char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
//             count ++;
//         }
//     }
//    return count;
// }

// let meal = 'Echilidas';
// console.log(meal)
// meal = 'Mutton';
// console.log(meal)
// meal = 'Chicken';
// console.log(meal)


// function abc() {
//     console.log("Hello.")
// }
// function myFunction(abc) {
//     return abc;
// }
// abc ();
// .forEach function is not used for strings, only used for array.
// let array = ['pune', 'delhi', 'mumbai']
// array.forEach(function printVal(val){
//     console.log(val); 
// })
// arrow function;
// array.forEach((val , idx , array) => {
//     console.log(val.toUpperCase(), idx , array);
// })


//what are higher order function? => .forEach function is higher order function.
//callback functions are higher order functions.  & takes function as parameter or returns the value is called HOF.

 
// let numbers = [13, 24, 35, 46, 57]
// numbers.forEach((num) => {
//     console.log(num*num);
// }) 
        //   or 
// let calcSquare = (num) => {
//     console.log(num*num);
// }
// numbers.forEach(calcSquare);  // forEach is used to normally print or return value something.


//some more array methods:
//map method (similar to forEach) => creates new array. The value its callback returns are used to form new array.
// let num = [67, 45, 76, 35]
// num.map((val) => {
//     console.log(val)
// });    // returns the value of each idx in array.

// let newArr = num.map((val) => {
//     return val * 5;
// })                        //creats new Array.
// console.log(newArr)


// filter method => creates a new arr of elements that give value for a condition/filter.
// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let evenArr = arr.filter((val) => {
//     return val > 3;
// });
// console.log(evenArr);


//reduce method => performs some operations & reduces the array to a single value.It returns that single value.
// let number = [1, 2, 3, 4, 5]
// const output = number.reduce((prev, curr) => {
//     return prev + curr;
// })
// console.log(output)

// let arr = [1, 4, 5, 77, 443]
// const output2 = arr.reduce((prev, curr) => {
//     return prev > curr? prev: curr;

// })
// console.log(output2)

// write a code when user enters n and creates array of 1 to n.
// let n = prompt("Enter a number: ");
// let array = [];
// for (let i = 1; i<=n; i++) {
//     array[i-1] = i;
// }
// console.log(array);
// const factorial = array.reduce((prev, curr) => {
//     return prev * curr;
// })
// console.log("factorial:", factorial);





