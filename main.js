let str = document.getElementById('str');

let changeText = document.getElementById('changeText');
let plus = document.getElementById('plus');
let sub = document.getElementById('sub');
let changeColoe = document.getElementById('changeColoe');
let changebg = document.getElementById('changebg');
let show = document.getElementById('show');



changeText.addEventListener("click", () => {
    str.textContent = "Hello World";
});

plus.addEventListener("click", () => {
    str.style.fontSize = "5rem";
});

sub.addEventListener("click", () => {
    str.style.fontSize = "1rem";
});

changeColoe.addEventListener("click", () => {
    str.style.color = "blue";
});

changebg.addEventListener("click", () => {
    str.style.backgroundColor = "grey";
});

show.addEventListener("click", () => {
    let img = document.createElement('img');
    img.setAttribute = ("src", "https://images.unsplash.com/photo-1725489890986-330621425633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D");
    img.setAttribute
    document.getElementById('body').appendChild('img');
});

show.addEventListener("click", () => {
    img.src = "https://images.unsplash.com/photo-1725610588142-b2b0a03c29d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D";
});