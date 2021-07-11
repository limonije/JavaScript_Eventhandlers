const button = document.getElementById('mybutton');
button.addEventListener("click", function() {alert("button clicked")});

const newbutton = document.getElementById('newbutton');
const inhoud = document.querySelector('body');
const makebackgroundred = () => {
    inhoud.classList.toggle("red-background");
}
newbutton.addEventListener("click", makebackgroundred);