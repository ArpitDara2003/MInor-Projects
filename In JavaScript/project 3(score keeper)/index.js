let res = document.getElementById("result")
let p = document.getElementById("a")
let q = document.getElementById("b")

function add(){
    let z = Number(p.value)+Number(q.value)
    res.textContent = "sum: "+z
    console.log("added")
}
function sub(){
    let z = Number(p.value)-Number(q.value)
    res.textContent = "diffrence: "+z
    console.log("subtracted")
}
function mul(){
    let z = Number(p.value)*Number(q.value)
    res.textContent =  "multiplication: "+z
    console.log("multiplied")
}
function div(){
    let z = Number(p.value)/Number(q.value)
    res.textContent = "divition: "+z
    console.log("divided")
}