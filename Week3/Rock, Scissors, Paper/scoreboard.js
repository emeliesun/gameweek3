let scoreDiv = document.getElementsByClassName("scorecount");
let scoreH1 = document.getElementById("pvc")

class Scoreboard {
    constructor(){
        this.userScore = 0;
        this.compScore = 0;
    }
   
    renderScoreboard(){
        // let $scoreboard = document.createElement('div');
        // $scoreboard.innerHTML = `<div>
        // <span id="scorecount">${this.userScore} - ${this.compScore}</span>
        // </div>`;
        
        // // $scoreboard.setAttribute('id', 'scorecount');
        // let p = document.createElement(`p`);
        // p.innerHTML = "test"



        // scoreDiv.appendChild(p);

scoreH1.innerHTML = `${this.userScore} - ${this.compScore}`;

    }
    reset(){
        this.score = 0;
        this.compScore = 0;
    }
}
