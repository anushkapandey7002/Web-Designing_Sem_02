let student = [];
function allstudents() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let Marks_in_Maths = document.getElementById("Marks_in_Maths").value;
    let Marks_in_Science = document.getElementById("Marks_in_Science").value;
    let Marks_in_English = document.getElementById("Marks_in_English").value;
    
} 

//for..in loop is used to iterate over the properties of an object, 
//while for..of loop is used to iterate over the values of an iterable object like an array or a string.
//not recommended to use for..in loop to iterate over arrays because it can lead to unexpected results,
let person ={
    name: "Charlie",
    age: 28,
    city: "New York"
};
let text = "";
for (let key in person) {
    text += key + ": " + person[key] + "<br>";
    console.log(text);
}