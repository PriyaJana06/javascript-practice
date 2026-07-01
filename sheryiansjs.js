
////   Objects   ////
// let obj = {
//     name: "Harsh",
//     age:20,
//     khaana:"Dal Chawal",
// };

// let abc = "name";
// console.log(obj[abc])

/*
// Nesting and Deep access
const user = {
    name: "Priyanka",
    address: {
        city: "Pune",
        pin: 411207,
        location: {
            lat:23.2,
            lng: 77.4,
        },
    },
};
// Deep access:
console.log(user.address.location.lng)

// Object Destructuring:
let {lat, lng} = user.address.location;
let {pin} = user.address;

const user = {
    "first-name": "Priyanka",
};

let {"first-name": firstName} = user;
*/



// Looping :

// let obj = {
//     name: "Priyanka",
//     age: 20,
//     email: "abc@gmail.com",
//     address: {
//         city: "Pune",
//     }
// };

/*
//i) for-in loop
for(let key in obj){   // key = obj's key 
    console.log(key);     // to get key
    // console.log(obj.key);    // throws undefined because in obj key-named key:value pair is not present.
    console.log(obj[key]);   // to get value
    console.log(key, obj[key]);  // prints key:value pair
}
*/

/*
//ii) Object.keys(objName) loop
console.log(Object.keys(obj));  // gives list of keys in array form 

//iii) Object.entries(objName)
console.log(Object.entries(obj));   // gives list of key:value pair in array form 
*/



// Copying Objects : spread, Object.assign, deep clone 
//i) spread operator
// let obj2 = {...obj};   // this creates changes in main obj also if we change it afterwards(explained in deep clone) 
// obj2.address.city = "Indore";
// console.log(obj2)
// console.log(obj)

//ii) Object.assign():
// let obj3 = Object.assign({}, obj);
// let obj4 = Object.assign({price: 24.46}, obj);

// iii) deep clone:
// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.address.city = "Solapur";   // changes is copied nested object but doesn't in main nested object.


// Optional Chaining : -> prevents crashes, cleans up code.
// console.log(obj.addresses.city);   // gives error because 'addresses' key is not present in obj.

// console.log(obj?.addresses?.city)     // doesn't gives error, returns undefined
// (it means if obj exists give me obj.address. Otherwise, stop & return 'undefined').
// this is mandatory when dealing with APIs. 
// const token = response?.data?.auth?.token;



/*
// Computed Properties:
let role = "admin";

let obj3 = {
    name: "Priyanka",
    age: 20,
    email: "abc@gmail.com",
    address: {
        city: "Pune",
    }, 
    [role]: "Priyanka",
};
console.log(obj3);
*/



// Que: Use Object.entries() to print all key-value pairs as: 
// title: JavaScript
// Duration: 4 weeks
/*
const course = {
    title: "JavaScript",
    Duration: "4 Weeks",
};

Object.entries(course).forEach(function(val){
    console.log(val[0] + ": " + val[1]);
});
*/

/*
// What is problem with this? 
const obj1 = {
    info: {
        score:80,
    }
};
// const clone = {...obj1};  // Reference cloning has happened.
// clone.info.score = 100;
// console.log(obj1.info.score);   //100

let deepCloneObj1 = JSON.parse(JSON.stringify(obj1));
deepCloneObj1.info.score = 100;
*/