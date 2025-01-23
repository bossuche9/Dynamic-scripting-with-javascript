/*  Function. creates a new paragrah and appends it to the  bottom of the HTML
 body when the button is clicked
*/
function createParagraph(){
    const para = document.createElement("P");
    para.textContent = "You clicked the button";
    document.body.appendChild(para);
}
/*
1. Get references to all the buttons on the page in an array format.
2. Loop through all the buttons and add a click event listener to each one.

When any button is pressed, the createParagraph() function will be run.
*/
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}