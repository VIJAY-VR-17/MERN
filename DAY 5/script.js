// Global Scope
const totalSubjects = 5;

// User Input
let name = prompt("Enter Student Name");

let marks = [];

for(let i=1;i<=totalSubjects;i++){
    let mark = Number(prompt("Enter Mark " + i));
    marks.push(mark);
}

// Function
function calculateGrade(avg){

    if(avg>=90)
        return "A+";
    else if(avg>=80)
        return "A";
    else if(avg>=70)
        return "B";
    else if(avg>=60)
        return "C";
    else if(avg>=50)
        return "D";
    else
        return "F";
}

// Loop
let total=0;

for(let i=0;i<marks.length;i++){
    total += marks[i];
}

let average = total/totalSubjects;

let result = average>=35 ? "PASS" : "FAIL";

let grade = calculateGrade(average);

// Output
document.getElementById("result").innerHTML=`
<p><strong>Name :</strong> ${name}</p>
<p><strong>Total :</strong> ${total}</p>
<p><strong>Average :</strong> ${average.toFixed(2)}</p>
<p><strong>Grade :</strong> ${grade}</p>
<p class="${result=="PASS"?"pass":"fail"}"><strong>Result :</strong> ${result}</p>
`;