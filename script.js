let btns = document.querySelectorAll(".btn")
let input = document.querySelector(".input")
for (elements of btns){
    elements.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '='){
            input.value = eval(input.value)
        }
        else if(e.target.innerHTML =="Ac"){
            input.value = ""
        }
        else if(e.target.innerHTML == "C"){
            input.value = input.value.substring(0, input.value.length-1)
        }
        else{
            input.value += e.target.innerHTML.trim()
        }
    })
}