const name="Vijay";
const course="IT";

let age=21;
let cgpa=7.94;

let status=cgpa>=7.5?"Excellent":"Good";

document.getElementById("name").innerHTML=name;
document.getElementById("course").innerHTML="Course : "+course;
document.getElementById("age").innerHTML="Age : "+age;
document.getElementById("cgpa").innerHTML="CGPA : "+cgpa;
document.getElementById("status").innerHTML="Performance : "+status;