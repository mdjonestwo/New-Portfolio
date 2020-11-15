
//Name Animation
const text = document.querySelector('#name');
const strText = text.textContent;
const splitText = strText.split("")
console.log(splitText)
text.textContent = ""

for(let i = 0; i <splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>"
    if (splitText[i] === " "){
        text.innerHTML += " " + " " + " " 
        
    }
}

let char = 0;
let timer = setInterval(onTick, 200);

function onTick(){
    const span = text.querySelectorAll("span")[char]
    span.classList.add('fade')
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer)
    timer = null
}

//Show Email Modal
var modal = document.querySelector(".modal")


function showEmail() {
    modal.classList.add("is-active")
  }

function closeEmail(){
    modal.classList.remove("is-active")
}