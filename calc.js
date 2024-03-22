let display = document.getElementById("display");
let btns = document.querySelectorAll(".btns");
let calc = document.querySelector(".calc");
let deleteDisplay = document.querySelector(".clear");
let operator = document.querySelectorAll(".operator");


btns.forEach(btn =>{
    btn.addEventListener("click", handleClick)
})


deleteDisplay.addEventListener("click",(e)=>{
    display.value = "";
})


function handleClick(e){
    let input = e.target.textContent;
  display.value += input;
}

calc.addEventListener("click", calculate)



function calculate(){
    try{
        display.value = eval(display.value)
    }catch{
        display.value = "Error"
    }
}
