// Ac:



// Synchronous Programming   ->   code runs in particular sequence, each instructions waits for previous
// for previous instruction to complete its execution.

/*
console.log("One")
console.log("Two")
console.log("Three")
*/

// Asynchronous Programming   ->  
/* 
console.log("One")
console.log("Two")

// function hello(){
//     console.log("Hello")
// }

setTimeout(() => {    // arrow function (setTimeout is a callback function)
    console.log("Hello");
}, 4000);    // runs function or variable after set timeout : 1s = 1000ms 

console.log("Three");
console.log("Four");
*/


// Callbacks ->   a function is passed as an argument to another function.
/*
function sum(a, b){
    console.log(a+b);
}

function calculator(a, b, sumCallback){
    sumCallback(a,b);
}

// calculator(43, 54, sum);
calculator(24, 52, (a,b) => {    // complete function is passed.
    console.log(a+b);
});
*/


/*
const hello = () => {
    console.log("Hello");
};

setTimeout(hello, 2000);   // setTimeout is a callback function.
*/


/*
// nesting 
for(let i=0;i<5;i++){
    let str = "";
    for(let j=0;j<5;j++){
        str = str + j;
        // console.log(i,j);
    }
    console.log(i,str);
}
*/


// // Callback Hell  => Nested callbacks stacked below one another forming a pyramid structure.(pyramid of Doom)
// function getData(dataId, getNextData){
//     // 2s 
//     setTimeout(()=> {
//         console.log("data: ",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// // Callback Hell -> a problem in js (This style of prog. becomes difficult to understand & manage.)
// //  => To tackle this 'Promises' is a hero.
// getData(1, () => {
//     console.log("getting data2...")
//     getData(2, ()=>{
//         console.log("getting data3...")
//         getData(3, ()=>{
//             console.log("getting data4...");
//             getData(4, ()=>{
//                 console.log("getting data5...");
//                 getData(5);
//             })
//         })
//     })
// })




// Promises can be created by manual, but in general prog. API's creates Promises
// Promises:   reject(), resolve() are functions created by js.
/*
let promise = new Promise((resolve, reject)=> {    // resolve() = if this funct. is runned then promise is resolved  // reject() = if funct. is runned, work will be fulfilled but gets error. 
    console.log("I am a Promise.");
    // if we don't call any funct., promise shows     state => pending.
    // resolve("Order is delivered successfully!");     // state => fulfilled
    reject("Order has some error!");     // state => rejected    // can be seen as error with red line
})
*/

/*
// In general programming: API's returns Promises, not data directly.
function getData(dataId, getNextData) {
    return new Promise((resolve, reject)=>{   // this is creating promises, so what about using promises?
    setTimeout(() => {
        console.log("data: ",dataId);
        // resolve("Order delivered Successfully!");
        reject("Error Occured!");
        if (getNextData){
            getNextData();
        }
      }, 5000);
    });
}*/


/*
// Using promises: .then() & .catch() is used.
const getPromise = () => {
    return new Promise((resolve, reject)=> {
        console.log("I am a Promise");
        resolve("Success");
        // reject("Unsuccessful");    // .then() is never invoked
    });
};

let promise = getPromise();
promise.then((res)=>{
    console.log("Order delivered successfully!", res);
});

promise.catch((err)=> {
    console.log("Order Cancelled!", err);
})
*/

/*
// Promise Chain:
function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{    // when timeout is there it's Asynchronous.
            console.log("Data1");
            resolve("Success!");
        }, 4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{   
            console.log("Data2");
            resolve("Success!");
        }, 4000);
    });
}
*/ 

// Here data1 & data2 is fetched at same time, but we want to fetch data one after other is fetched
// i.e. data1 is fetched then only data2 starts fetching => hence, here we use Promise Chaining.

/*
console.log("Fetching Data 1...");
let promise1 = asyncFunc1();
promise1.then((res) => {   
    console.log(res);
})


console.log("Fetching Data 2...");
let promise2 = asyncFunc2();
promise1.then((res)=> {   
    console.log(res)
})
*/
/*
// Promise Chaining: in short, nesting of .then().
console.log("fetching data1...");
asyncFunc1().then((res)=>{
    console.log(res);
    console.log("fetching data2...");
    asyncFunc2().then((res) => {
        console.log(res);
    })
})
*/

/*
// Que: solve using Promise chaining
function getData(dataId) {
    return new Promise((resolve, reject)=>{   // this is creating promises, so what about using promises?
    setTimeout(() => {
        console.log("data: ",dataId);
        resolve("Successfull!");
        // reject("Error Occured!");
        // if (getNextData){
        //     getNextData();     // In Promise Chaining, we don't need to think more about what should be the next data.
        // }
      }, 3000);
    });
}

// Promise chaining:
// console.log("Fetching Data1...")
// getData(1).then((res)=> {
//     console.log(res);
//     console.log("Fetching Data2...");
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// })

// or 
// Promise Chain: this also has better way, 'cause its difficult to understand.
console.log("getting data1...");
getData(1)
    .then((res)=> {
        console.log("getting data2...");
        return getData(2);
    })
    .then((res)=> {
        console.log("getting data3...")
        return getData(3);
    })
    .then((res)=> {
        console.log(res);
    });
*/


// Async-Await:
/*
async function hello(){
    console.log("Hello");
}

function API(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log("weather data");
            resolve("Weather Data successfull!");   // 200 represents successfull API call
        }, 3000);
    });
}

async function getWeatherData() {
    await API();   // 1st call   // first this will happen then only other work will be done.
    await API();   // 2nd call
}
*/

/*
// Que : Solve this using Async-Await
function getData(dataId) {
    return new Promise((resolve, reject)=>{   
    setTimeout(() => {
        console.log("data: ",dataId);
        resolve("Successfull!");
        // reject("Error Occured!");
      }, 3000);
    });
}

async function getAllData() {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(4);
}
*/

/*
// Now comparison of the three Asynchronous functions:
// Callback Hell:

getData(1, () => {
    console.log("getting data2...")
    getData(2, ()=>{
        console.log("getting data3...")
        getData(3, ()=>{
            console.log("getting data4...");
            getData(4, ()=>{
                console.log("getting data5...");
                getData(5);
            })
        })
    })
})

// Promise Chain:

console.log("getting data1...");
getData(1)
    .then((res)=> {
        console.log("getting data2...");
        return getData(2);
    })
    .then((res)=> {
        console.log("getting data3...")
        return getData(3);
    })
    .then((res)=> {
        console.log(res);
});


// Async-Await:

async function getAllData() {
console.log("getting data1...");
await getData(1);
console.log("getting data2...");
await getData(2);
console.log("getting data3...");
await getData(3);
console.log("getting data4...");
await getData(4);
}
*/

/*
// IIFE's : Immediately Invoked Function Expression
// IIFE don't need a separate call to execute & can be used only one time.
function getData(dataId) {
    return new Promise((resolve, reject)=>{   
    setTimeout(() => {
        console.log("data: ",dataId);
        resolve("Successfull!");
        // reject("Error Occured!");
      }, 2000);
    });
}

// IIFE - uses => Execute an async function, Avoid polluting global namespace. 
(async function () {
console.log("getting data1...");
await getData(1);
console.log("getting data2...");
await getData(2);
console.log("getting data3...");
await getData(3);
console.log("getting data4...");
await getData(4);
})();
*/





// Fetch API:
