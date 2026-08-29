let v = prompt("Enter your choose(rock, paper, scissor)")
let m = v.toLowerCase()
let humansrc = 0;
let compsrc = 0;
let roundnum = 0;
function compres(){
    z = Math.random()
    if (z === 0) {
        return "rock"
    }else if (z > 0 && z < 0.5) {
        return "paper"
    }else if (z >= 0.5) {
        return "scissor"
    }
}
console.log(compres());


function playRound() {
    let a = compres()
    if (m === "paper" && a === "rock") {
        humansrc += 1;
    }else if (m === "rock" && a === "scissor") {
        humansrc += 1;
    }else if (m === "scissor" && a === "paper") {
        humansrc += 1;
    }
    //conditions for comp win//
    else if (a === "paper" && m === "rock") {
        compsrc +=1;
    }else if (a === "rock" && m === "scissor") {
        compsrc +=1;
    }else if (a === "scissor" && m === "paper") {
        compsrc +=1;
    }     
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound()
        roundnum += 1;
    }
}

playGame()

function windec() {
    if  (humansrc > compsrc) {
    alert("you won")
    }else if (humansrc < compsrc) {
        alert("you lose")
    }else if (humansrc = compsrc) {
        alert("tie")
    }
}
windec()