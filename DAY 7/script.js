// Event Handling

const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", function(){

    message.textContent = "Button Clicked Successfully!";

});

// Mouse Event

clickBtn.addEventListener("mouseover", function(){

    clickBtn.style.backgroundColor = "green";
    clickBtn.style.color = "white";

});

clickBtn.addEventListener("mouseout", function(){

    clickBtn.style.backgroundColor = "";
    clickBtn.style.color = "";

});


// Event Delegation

const list = document.getElementById("languageList");

list.addEventListener("click", function(event){

    document.getElementById("selected").textContent =
    "You selected : " + event.target.textContent;

});


// Form Validation

const form = document.getElementById("userForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("username").value.trim();

    let email = document.getElementById("email").value.trim();

    if(name===""){

        alert("Name cannot be empty");

        return;
    }

    if(!email.includes("@")){

        alert("Invalid Email");

        return;
    }

    document.getElementById("result").textContent =
    "Form Submitted Successfully";

});



// Browser Events

// Page Load

window.addEventListener("load",function(){

    console.log("Page Loaded");

});

// Resize

window.addEventListener("resize",function(){

    console.log("Width :",window.innerWidth);

});

// Scroll

window.addEventListener("scroll",function(){

    console.log("Scrolling...");

});

// Before Leaving Page

window.addEventListener("beforeunload",function(event){

    event.preventDefault();

});


// Local Storage

document.getElementById("saveLocal").addEventListener("click",function(){

    localStorage.setItem("course","JavaScript");

    alert("Saved to Local Storage");

});

document.getElementById("showLocal").addEventListener("click",function(){

    alert(localStorage.getItem("course"));

});


// Session Storage

document.getElementById("saveSession").addEventListener("click",function(){

    sessionStorage.setItem("username","Vijay");

    alert("Saved to Session Storage");

});

document.getElementById("showSession").addEventListener("click",function(){

    alert(sessionStorage.getItem("username"));

});