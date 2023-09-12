// create basic website with buttons and text boxes

// create a button
var button = document.createElement("button");
button.innerHTML = "Click Me";
button.onclick = function() {
    alert("You clicked me!");
}
document.body.appendChild(button);

// create a text box
var textBox = document.createElement("input");
textBox.type = "text";
textBox.value = "Enter text here";
document.body.appendChild(textBox);

// create a paragraph
var paragraph = document.createElement("p");
paragraph.innerHTML = "This is a paragraph";
document.body.appendChild(paragraph);

// create a link
var link = document.createElement("a");
link.href = "http://www.google.com";
link.innerHTML = "Google";
document.body.appendChild(link);

