let heading = document.getElementById("heading");//. document se pick karke le aayo
let inputText = document.getElementById("inputText");
let para = document.getElementById("para");

document.getElementById("changeTextBtn").onclick = function () {//onclick is a method of event handling
    //innerText changes the text of the heading
    heading.innerText = inputText.value;//innerText is used to change the text of the heading and value is used to get the value from the input field
};

//Input Change Event
inputText.onchange = function () {
    //onchange is a method of event handling
    console.log("Input changed : " + inputText.value);//console.log is used to print the value of the input field in the console
};

document.getElementById("bgColorBtn").addEventListener("click",function(){
    document.body.style.backgroundColor = "lightblue";//style is used to change the style of the body and backgroundColor is used to change the background color of the body
document.body.style.fontFamily = "Arial, sans-serif";//fontFamily is used to change the font of the body
});

document.getElementById("fontSizeBtn").addEventListener("click", function () {
    heading.style.fontSize = "48px";

    //now increasing the font size the number of times our button is clicked and not more than 80 px;
});

let isVisible = true;

document.getElementById("toggleBtn").onclick = function () {
    if (isVisible) {
        para.style.display = "none";//display is used to hide the paragraph
    isVisible = false;
    
    }else {
        para.style.display = "block";//display is used to show the paragraph
        isVisible = true;

    }
};

heading.onmouseover = function () {
    heading.style.color = "red";
    heading
};//color is used to change the color of the heading