////   DOM Manipulation:  //////
//// html se element select karna
//// text badalna
//// html badalna
//// css badalna
//// attributes
////  event listeners
//// code ratna nhi h , code ko breakdown krna h



/* // selecting elements
// .getElementById(idname)
let abcd = document.getElementById("abcd");   // node can be selected only through 'id'
// console.log(abcd)    // if we use console.log() and reload the webpage it gives another output hence, we should use console.dir()
console.dir(abcd)     // we know every element is node. hence, node gets selected.


// .getElementsByClassName(classname)
let paragraph = document.getElementsByClassName("para")   //it gives array like struc output. class name can be multiple hence, it gives array-like structure.
console.dir(paragraph)


// used commonly -> .querySelector(element, .className, #idName, attribute), .querySelectorAll(element, .className, #idName, attribute)

let para = document.querySelector("p")    // querySelector selects only 1st element of body tag, if it occurs multiple times.
console.dir(para)
let abcde = document.querySelector("h1")
console.dir(abcde)

// selects all elements.
let paras = document.querySelectorAll("p")   // querySelectorAll selects all elements and returns array-like structure.
console.dir(paras)
let h1s = document.querySelectorAll("h1")
console.dir(h1s)
*/


/*
// Text/Content Access : innerText == textContent, innerHTML, outerText, outerHTML
// let h1 = document.querySelector("h1");   // h1 is object.
// h1.textContent = "Hello Priyanka Kaise Ho!";
// h1.innerText = "Priyanka YOU HAVE TO DO THIS!";
// h1.innerHTML = "<i>HEY</>";  // To insert HTML
// console.dir(h1)
// console.dir(Date())    // gives runtime date & time 
*/


/*
// Attribute manipulation : getAttribute, setAttribute, removeAttribute
let a = document.querySelector("a");   // a tag doesn't have any link
a.href = "https://www.google.com";
console.dir(a);

//i) setAttribute("attribute to change(name)", "what to change(value)")   -> to set a new attribute
a.setAttribute("href", "https://www.facebook.com");
let img = document.querySelector("img");
console.dir(img);
img.setAttribute("src", "https://i.pinimg.com/474x/31/55/e0/3155e0b8ae312ab867ccbabc86af2189.jpg")

//ii) getAttribute("Attribute(name)")
console.log(a.getAttribute("href"))    // getting the value of attribute

//iii) removeAttribute(attribute)
img.removeAttribute("alt");         // to delete attribute of a tag
*/



//IMP
// Dynamic DOM manipulation: createElement("element") -> returns element node, appendChild(variable)/append(variable), removeChild()/remove(), prepend(variable)

//step1: create element
//step2: append/prepend karo jaha bhi element chahiye waha
/*
let h2 = document.createElement("h2");     // creates empty element
console.dir(h2);
h2.textContent = "Hey PRR";      // inserts value in element
document.body.appendChild(h2);     // used to make it visible on document body
//OR
// document.querySelector("body").prepend(h2); 
*/

/*
// append -> used to insert in body after last child of an element
// prepend -> used to insert in body at first(bddy mai ghuste hi)
let h1 = document.createElement("h1");
h1.textContent = "Hey main bahar se aayi hu";
document.querySelector("div").append(h1);
// document.querySelector("div").appendChild(h1);    // div k andar element create kiya after at last
// document.querySelector("div").prepend(h1);        // div k andar element create kiya at first
// document.body.prepend(h1);           // insert element not in 'div' but in 'body'
// h1.remove();                // removes created element

// h1.removeChild();
*/


/*
// Style Updates via. style and classList.add(), remove(), toggle() -> adds, removes, toggle a class to an element
// js se css badalna
let h2 = document.querySelector("h2");
console.dir(h2);
// h2.style.color = "red";
// h2.style.backgroundColor = "black";
// h2.style.font = "Gilroy";
// h2.style.textTransform = "capitalize";


// classList() - highly recommended
//i) classList.add("classNames") -> adds one or multiple "className" class to an element
// h2.classList.add("hulu");
//OR
let list = h2.classList;
list.add("mystyle", "anotherClass", "thirdClass");

//ii) classList.remove("className") -> removes one or multiple classNames 
// h2.classList.remove("thirdClass");

//iii) classList.toggle()  -> toggles between classes (agar class hai toh remove karega aur nhi h toh add karega)
h2.classList.toggle("hulu");   // it doesn't work if add() is used before
*/



// let p = document.querySelector("p");
// console.dir(p)
// p.textContent = "Hello Priyanka Kaise ho?"
// p.innerHTML = "Priyanka Badhiya h"
// p.innerText = "Sab badhiya chal rha h!"
// p.innerHTML = "<i>Priyanka</i>"
// console.dir(p)
// p.hidden = true;



////////////    PRACTICE QUESTIONS    ////////////

//Q: Use querySelectorAll() to select all buttons with class".buy-now"
// let buyNowBT = document.querySelectorAll(".buy-now");
// console.log(buyNowBT);


//Q: Select all <li> elements and print their text using a loop
// let list = document.querySelectorAll("li");
// console.dir(list);
// list.forEach(function(val){
//     console.dir(val.textContent);   // returns values in list
//     // console.dir(val);   // return elements
// })

// // OR
// for(let i=0; i<list.length; i++){
//     console.dir(list[i].textContent);
// }


// Add a title attribute to a div dynamically.
// let div = document.querySelector("div");
// console.dir(div);
// div.setAttribute("title", "some info");


// Create a new list item <li>New Task</li> and add it to the end of a <ul>.
// let ul = document.querySelector("ul");
// let li = document.createElement("li");

// li.textContent = "Watermelon";
// document.querySelector("ul").append(li);


// Create a new image element with a placeholder src and add it at the top of a div.
// let div = document.querySelector("div");
// let img = document.createElement("img");
// img.setAttribute("src", "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg") 
// img.classList.add("placeholder");
// document.querySelector("div").prepend(img);


// Add a highlight class to every even item in a list.
// nth-child(2) -> sirf dusra element
// nth-child(2n) -> har dusra element (even);

// let li = document.querySelectorAll("ul li:nth-child(2n)");    // this line tells that select ul elements li nodes (har li items k nth child(even)) 
// console.dir(li);
// // Array like node list h isiliye loop use kiya to apply style one by one
// li.forEach(function(elem){ 
//     elem.classList.add("highlight");
// })


// Set the font size of all <p> elements to 18px using .style
let p = document.querySelectorAll("p");
console.dir(p);
p.forEach(function(p){
    p.style.fontSize = "20px";
})

// confusion:
// textContent is comparatively faster than innerText.