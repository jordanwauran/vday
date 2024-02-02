
//const button = document.querySelector('button');

var b = document.querySelector("#nopeButton");
b.addEventListener("click",change);

function change()
{
let i =Math.abs(Math.floor(Math.random()*window.innerWidth-55))
let j = Math.abs(Math.floor(Math.random()*window.innerHeight-21));
console.log('here' , i ,j , b.style.left , b.style.top);
    b.style.left = i+'px';
    b.style.top = j + "px";
}




