// VVVIMP
// browser mein page par koi bhi harkat karo event raise hoga
// event handle krna aana chahiye
// event listener ka mtlab h aapne koi action ka reaction diya.

// select the element first.
// add eventlistener with function in it with some events.


/*
// .addEventListener() -> adds event to an element(kuch krne pe kuch hoga).
let h1 = document.querySelector("h1");
// syntax: element.addEventListener("eventname", function(){})
h1.addEventListener("click", function(){
    h1.style.color = "red";
})

let p = document.querySelector("p");
p.addEventListener("click", function(){
    p.style.color = "blue";
})
p.addEventListener("dblclick", function(){
    p.style.color = "green";
})
*/


/*
// .removeEventListener() -> removes an event listener
// syntax: element.removeEventListener("eventName", function);
let p = document.querySelector("p");
function dblclick(){
    p.style.color = "green";
}

p.addEventListener("dblclick", dblclick);  // here we have to parse not call function.
p.removeEventListener("dblclick", dblclick);   // removed event listener
*/


// Common events:
//i) click -> changes when clicked
// let p = document.querySelector("p");
// p.addEventListener("click", () => {
//     p.style.color = "aqua";
// })

//ii) input -> changes when typed using keyboard
// let inputBox = document.querySelector("input");
// // console.dir(inputBox);
// inputBox.addEventListener("input", (event) => {    // returns Event Details in a form of tag.
//     // console.log(event);      // returns Event Details in form of tag
//     if((event.data !== null)){   // backspace
//         console.log(event.data);    // prints data we typed recently
//     }
//     // console.log("You typed", inputBox.value);   // returns whole value typed in inputBox
// })

//iii) change -> jab aapka koi input select ya textarea m ya phir koi bhi change hojaye
// let select = document.querySelector("select")
// let device = document.querySelector("#device");
// select.addEventListener("change", (event) => {
//     // console.log(event);
//     console.log(event.target.value);
//     device.textContent = `${event.target.value} device Selected`;
// })


//iv) keydown ->  the moment a key is pressed down on keyboard (triggers immediately when key goes down).
// screen == window(on screen we type 'cause there's no inputBox) => it also detects paste
// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", (event) => {
//     if(event.key === " "){
//         h1.textContent = "Space";
//     } else{
//         h1.textContent = event.key;
//     }
// })


/*
// Building Something small:
let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp")
btn.addEventListener("click", () => {
    fileinp.click();   // calling function manually.
})

fileinp.addEventListener("change", (event)=>{
    console.log(event);
    // console.log(event.target.files[0].name);
    // btn.textContent = event.target.files[0].name;

    // but, if we cancel the selected file it gives error because we're trying to access something that doesn't exist & gives error.
    const file = event.target.files[0];
    // if(!file) return; // user cancelled/file doesn't exists
    btn.textContent = file.name;
})
*/


//v) submit -> event fires when form is submitted.
// By Default behavior, when changes are created or forms are submitted page reloads or refreshes, data is sent to the 'action' URL
// hence, we need to stop reloading.

// let form = document.querySelector("#myForm");
// let inputs = document.querySelectorAll("input");
// let myForm = document.querySelector("#myForm");
// form.addEventListener("submit", (e) => {
//     // console.dir(e);
    
//     e.preventDefault(); // stops reloading page when form submits
//     // console.log(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);

//     let card = document.createElement("div");
//     card.classList.add("card");   // till here, we created a div with class 'card'

//     let profile = document.createElement("div");
//     profile.classList.add("profile");    // created another div with another class 'profile'

//     let img = document.createElement("img");
//     img.setAttribute("src", inputs[0].value);

//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[1].value;

//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;

//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;

//     profile.appendChild(img);
//     card.appendChild(profile);   // here, we have inserted a div with class 'profile' inside a div with class 'card'
//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     myForm.appendChild(card);

//     inputs.forEach(function(event){
//         event.value = "";
//     })
// })

/*
//vi) mouseover -> fires when pointer enters an element.
// vii) mouseout -> fires when pointer exits from an element, it bubbles(triggers if element has child ele. inside parent ele).
// mouseover bubble -> means if the element has child element inside it, moving from parent -> child ALSO triggers mouseover again.
// in html, we created h1 inside div, when we enter #box(parent) mouseover triggers
// again if we hover over h1 tag(child) then also 'mouseover' triggers.

let box = document.querySelector("#box");
// box.addEventListener("mouseover", (event) => {
//     box.style.backgroundColor = "yellow";
//     console.log("Mouse entered the box.");
// });

// box.addEventListener("mouseout", (event) => {
//     box.style.backgroundColor = "green";
//     console.log("Mouse exit from the box.");
// });
*/


/*
// viii) mouseenter -> if we don't want repeated triggers when moving inside children.
//xi) mouseleave -> opposite of mouseenter

// let box2 = document.querySelector("#box2");
// box2.addEventListener("mouseenter", () => {
//     box2.style.backgroundColor = "maroon";
//     console.log("Mouse entered.")
// })

// box2.addEventListener("mouseleave", () => {
//     box2.style.backgroundColor = "green";
//     console.log("Mouse exits.")
// })
*/


/*
//viii) mousemove -> clientX, clientY  
let box = document.querySelector("#box");
window.addEventListener("mousemove", (event)=> {
    // console.log(event.clientX, event.clientY);
    box.style.top = event.clientY + "px";
    console.log(box.style.top);
    box.style.left = event.clientX + "px";
    console.log(box.style.left);
})
*/


//xi) keyup -> fires when key is released after being pressed.(it doesn't detects paste)
// let input = document.querySelector("#inputbox");
// input.addEventListener("keyup", function(e){
//     if(e.key === " "){
//         console.log("Key released: ", "SPC");
//     }else{
//         console.log("Key released: ", e.key);
//     }
// });


//Event object: target, type, preventDefault()
//when an event is fired some object pops on console.


// Event Bubbling: 
// jispe event aayega agar upar listener nhi hua to hamara event uske parent par listener dhundega aur aisa krte krte upar ki taraf move karega
//que1:
// document.querySelector("#nav").addEventListener("click", function(){
//     alert("clicked");
// });

//que2:
// let ul = document.querySelector("ul");
// ul.addEventListener("click", function(event){
//     // console.log(event.target);
//     // alert("clicked");
//     // event.target.style.textDecoration = "line-through";
//     event.target.classList.toggle("lt");   // adds style using class
// });

//que3: In event bubbling, when childs event triggers, parents event also triggers if parent has their own event listeners.(from in to out)

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    console.log("button clicked");
});

c.addEventListener("click", function(){
    console.log("c clicked");
});

b.addEventListener("click", function(){
    console.log("b clicked");
});

a.addEventListener("click", function(){
    console.log("a clicked");
});



//Event Capturing:


//jab bhi aap click krte ho ya koi bhi event raise krte ho toh aapka jo event flow h/ propagation 2 phases m chalta h :
// phase 1: event top level element se niche ki taraf aayega
//phase 2: event bottom(raised element) se parent ki taraf jayega
// aur hamesha phase 1 hi pehle hoti hai.
// parr... vo by default off rehti h, agar hume on krde to pehle phase 1 ka ans milega













































