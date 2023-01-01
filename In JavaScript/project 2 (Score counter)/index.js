let livecount = document.getElementById("live-count")
let count = 0

function score(){
    count+=3;
    console.log("+ score"+count)
    livecount.innerText= count
}
function foul(){
    if(count>0){
        count--
        console.log("- score"+count)
        livecount.innerText= count
    }
}

