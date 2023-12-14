
const ljud = document.getElementById("ljud")
const minusknapp = document.getElementById("minus")

let siffra = 0

function plusclicker() {
    //alert("hej")
    siffra = siffra + 1
    console.log(siffra)
    document.getElementById("taltext").innerHTML = siffra
    ljud.play()
}

function minusClick() {
    //siffra=siffra - 1
    //siffra = - siffra
    siffra--
    document.getElementById("taltext").innerHTML = siffra
    console.log(siffra)
    ljud.play()
}

minusknapp.addEventListener("click", minusClick)