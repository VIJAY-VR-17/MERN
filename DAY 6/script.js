// Selecting Elements
const title = document.getElementById("title");
const message = document.querySelector("#message");
const content = document.getElementById("content");

// Change HTML
document.getElementById("changeBtn").addEventListener("click", () => {

    title.innerHTML = "DOM Updated!";
    message.textContent = "Content changed using JavaScript.";

});

// Update CSS
document.getElementById("styleBtn").addEventListener("click", () => {

    message.style.color = "red";
    message.style.fontSize = "22px";

});

// Create Element
document.getElementById("addBtn").addEventListener("click", () => {

    let para = document.createElement("p");

    para.textContent = "New paragraph created dynamically.";

    para.classList.add("new");

    para.id = "newPara";

    content.appendChild(para);

});

// Remove Element
document.getElementById("removeBtn").addEventListener("click", () => {

    let para = document.getElementById("newPara");

    if(para){
        para.remove();
    }

});

// Toggle CSS Class
document.getElementById("toggleBtn").addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

// Keyboard Event
document.getElementById("username").addEventListener("keyup", () => {

    document.getElementById("output").textContent =
        "Hello, " + document.getElementById("username").value;

});

// Form Event
document.getElementById("myForm").addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Form Submitted Successfully!");

});