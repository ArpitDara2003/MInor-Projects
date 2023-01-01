let count = 0;
let countEl = document.getElementById("count-el")
function increment(){

    console.log("the button is clicked",count,"increment")
    count++;
    countEl.innerText = count

}
let saveEl = document.getElementById("save-el")
function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    console.log("save clicked")
    count = 0
    countEl.innerText = count
}