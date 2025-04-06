import { adder, minus } from "./js/calc";

const plusBtn = document.querySelector(".plus")
const minusBtn = document.querySelector(".minus")

plusBtn.addEventListener("click", (e) =>{
    const a = Number(document.querySelector(".one").value)
    const b = Number(document.querySelector(".two").value)

    const result = adder(a, b)
    document.querySelector("#result").innerHTML = result
    if (isNaN(document.querySelector("#result").innerHTML)){
        document.querySelector("#result").innerHTML = "ви вводете не числа"
    }
})
minusBtn.addEventListener("click", (e) =>{
    const a = Number(document.querySelector(".one").value)
    const b = Number(document.querySelector(".two").value)

    const result = minus(a, b)
    document.querySelector("#result").innerHTML = result
    if (isNaN(document.querySelector("#result").innerHTML)){
        document.querySelector("#result").innerHTML = "ви вводете не числа"
    }
})