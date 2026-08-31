// let v = prompt("Enter your choose(rock, paper, scissor)")//
//let m = v.toLowerCase()//
let m = "";
let humansrc = 0;
let compsrc = 0;
let rounddisplay = document.getElementById("roundnum");
let roundnum = 0;
let nextbut = document.getElementById("footbut");
let winner = document.getElementById("rondwinner");
let strround = document.getElementById("startrounnd");
let faterbut = document.getElementById("faterbut");
let yoursrc = document.getElementById("yoursrc");
let bronosrc = document.getElementById("bronosrc");
let footer = document.getElementById("footer");
// human button//
nextbut.addEventListener("click", playRound);

function compres(){
    z = Math.random()
    if (z === 0) {
        return "rock"
    }else if (z > 0 && z <= 0.1) {
        return "paper"
    }else if (z > 0.1 && z <= 0.2) {
        return "scissor"
    }else if (z > 0.2 && z <= 0.3) {
        return "rock"
    }else if (z > 0.3 && z <= 0.4) {
        return "paper"
    }else if (z > 0.4 && z <= 0.5) {
        return "scissor"
    }else if (z > 0.5 && z <= 0.6) {
        return "rock"
    }else if (z > 0.6 && z <= 0.7) {
        return "paper"
    }else if (z > 0.8 && z <= 0.9) {
        return "scissor"
    }else if (z > 0.9 && z < 1) {
        return "scissor"
    }else{
        return "Brono Forget to choose"
    }
}





// valuation of m//

let playcount = 0;
function playRound() {
    nextbut.innerText = "Next Round =>";

    faterbut.innerHTML = '<div><button id="but1"><img src="rock.jpeg" alt="ROCK"></button></div>';
    faterbut.innerHTML += '<div><button id="but2"><img src="paper.jpeg" alt="PAPER"></button></div>';
    faterbut.innerHTML +=  '<div><button id="but3"><img src="scissor.jpeg" alt="SCISSOR"></button></div>';
    
    const rockbut = document.querySelector('#but1');
    const paperbut = document.querySelector('#but2');
    const scissorbut = document.querySelector('#but3');
    rockbut.addEventListener('click', () => {
        m = "rock"
        playGame();
        rockbut.disabled = true;
    });
    paperbut.addEventListener('click', () => {
        m = "paper"
        playGame();
        paperbut.disabled = true;
    });
    scissorbut.addEventListener('click', () => {
        m = "scissor"
        playGame();
        scissorbut.disabled = true;
    });
    console.log(m);

    function playGame() {
        playcount++;
        let a = compres();
            

        // Human wins
        if (
            (m === "rock" && a === "scissor") || 
            (m === "paper" && a === "rock") ||
            (m === "scissor" && a === "paper")
        ) {
            humansrc += 1;
        }else if (
            (a === "paper" && m === "rock") ||
            (a === "rock" && m === "scissor") ||
            (a === "scissor" && m === "paper")
        ) {
            compsrc += 1;
        }else {
            faterbut.innerHTML = `<div><h1>It was TIE</h1></div>`;
        }
        rounddisplay.innerHTML = `<div>Your choice => ${m}</div>`;
        rounddisplay.innerHTML += `<div>ROUND NUMBER ${playcount}</div>`;
        rounddisplay.innerHTML += `<div>Brono choice =>${a}</div>`;
        // winner.innerHTML = windec();
        yoursrc.innerHTML = `Your Score is =>${humansrc}`;
        bronosrc.innerHTML = `Your Score is =>${compsrc}`;       
    }
    if (playcount > 5) {
        // nextbut.removeEventListener('click', playRound());//
        nextbut.disabled = true;
        faterbut.innerHTML = `<div><h1>Match is over ${windec()}</h1></div>`;
    }
    
}
    


function windec() {
    if  (humansrc > compsrc) {
        return "You won"
    }else if (humansrc < compsrc) {
        return "Brono won"
    }else if (humansrc = compsrc) {
        return "It's tie"
    }
     
}


