let inputBtn = document.getElementById("input-btn");
let leadEL = document.getElementById("lead-el");
let list = document.getElementById("ul-el");
let leads = [];
let leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"));
let delBtn = document.getElementById("del-btn");
let tabBtn = document.getElementById("tab-btn");


delBtn.addEventListener("click",function(){
    leads=[];
    localStorage.clear();    
    render(leads);
    location.reload()
})

tabBtn.addEventListener("click",function(tab){
    if (leadsfromlocalstorage) {
        leads = leadsfromlocalstorage;
        render(leads);      
    }
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        leads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(leads));  
        render(leads)
    })
    
})



inputBtn.addEventListener("click", function(){
   
   if (leadsfromlocalstorage) {
       leads = leadsfromlocalstorage;
       render(leads);      
   }
    leads.push(leadEL.value);
    leadEL.value =""; 
    localStorage.setItem("myleads",JSON.stringify(leads));  
    render(leads)
})
 
function render(myleads){
    let listItems = "";
    for (let i = 0; i < myleads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myleads[i]}'>${myleads[i]} </a>
            </li>
       `        
    }
    list.innerHTML = listItems;
    
      

}