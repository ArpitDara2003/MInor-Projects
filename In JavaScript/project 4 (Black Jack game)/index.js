let card = []
let winner = false
let ingame = false
let message
let sum = 0;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player ={
    name: "Arpit",
    chips: 150
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $"+ player.chips

function getRandomCard() {
    let x = (Math.random()*13)+1;    
    x = Math.floor(x);
    if(x>10)
    x=10;
    else if(x==1)
    x=11;
    return x;

}

function redergame(){
    if (sum<21) {
        message = "Do u wanna draw a new card"
        winner = false
        ingame = true

    }else if (sum==21) {
        message = "Winner!! u have got black jack"
        winner = true
        ingame = false

    }else{
        message = "Game lost!!"
        winner= false
        ingame = false

    }
    //console.log(message)
    console.log("Winner: " + winner)
    console.log("still in game: "+ ingame)
    messageEl.innerText = message;
}


function startGame() {
    sum = 0;
    card = [];
    cardEl.textContent = "Cards:"
    card.push(getRandomCard())
    sumEl.textContent = "Sum: " + card[0];
    for (let i = 0; i < card.length; i++)
    cardEl.textContent  +=  " " + card[i] ;
    redergame()
    if(player.chips==0)
    alert("Are you sure you want to continue with dept")
    else if(player.chips<0)
    alert("Are you sure you want to continue. You are in dept")
}


function newCard(){
    if(ingame === true && winner === false){
        let newcard = getRandomCard();
        card.push(newcard);
        sum=0;
        for(let i = 0; i < card.length; i++)
        sum += card[i];
        sumEl.textContent = "Sum: " + sum;
        cardEl.textContent += " " + card[card.length-1];
        redergame()
    }
    if(winner === true){
        player.chips +=100;
        playerEl.textContent = player.name +": $"+ player.chips
    }else if(sum>20){
        player.chips -=50;
        playerEl.textContent = player.name +": $"+ player.chips  
    }
}