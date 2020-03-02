class Game {
    constructor(){
        this.computer = new Player();
        this.user = new Player();
        this.currentPlayer = this.user;
    }

    checkWhoWonTurn(){
        let $rockbtn = document.querySelectorAll(".rock-btn");
        let $scissorsbtn = document.querySelectorAll(".scissors-btn");
        let $paperbtn = document.querySelectorAll(".paper-btn");
        switch(this.currentPlayer){
            case this.currentPlayer === $rockbtn && this.computer === $scissorsbtn:
                this.currentPlayer.score +=1;
                alert = "Player 1 wins!"
                    break;
            case this.currentPlayer === $scissorsbtn && this.computer === $paper-btn:
                this.currentPlayer.score += 1;
                alert = "Player 1 wins!";
                break;
            case this.currentPlayer === $paperbtn && this.computer === $rockbtn:
                this.currentPlayer += 1;
                alert = "Player 1 wins!";
                break;
            case this.currentPlayer === $rockbtn && this.computer === $paperbtn:
                this.computer.score  += 1 ;
                alert = "Player 2 wins!"
                    break;
            case this.currentPlayer === $scissorsbtn && this.computer === $rockbtn:
                this.computer.score += 1;
                alert = "Player 2 wins";
                break;
            case this.currentPlayer === $paperbtn && this.computer === $scissorsbtn:
                this.computer += 1;
                alert = "Player 2 wins!";
                break;
            case this.currentPlayer === $rockbtn && this.computer === $rockbtn:
                alert = "It's a draw. Play again!";
                    break;
            case this.currentPlayer === $scissorsbtn && this.computer === $scissorsbtn:
                alert = "It's a draw. Play again!";
                    break;
            case this.currentPlayer === $paperbtn && this.computer === $paperbtn:
                alert = "It's a draw. Play agin!";
                    break;
            }
        }
    }

    // checkWinner(){
    //     // if (this.currentPlayer = Player.score === 2 
    // }

//     switchTurn(){
//         if (this.currentPlayer < this.computer){
//             this.currentPlayer = click
//         } else {
//             this.computer = click
//         }
//     }
// }


document.addEventListener("keydown", function renderPick(player){
    switch(event.code){
        case "p":
            Game.currentPlayer.
            break;
        case "o":
            Game.currentPlayer.currentPlayer
            break;
        case "i":
            Game.currentPlayer.
            break;
    }
}



function renderPicks(player1, player2) {

}
