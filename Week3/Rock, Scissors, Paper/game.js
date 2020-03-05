class Game {
  constructor() {
    this.user = new Player1();
    this.currentPlayer = this.user;
    this.computer = new Player2();
    this.scoreboard = new Scoreboard();
    
  }
insertFirstPage(){

   var modal = document.getElementById('myModal2');
   modal.classList.remove('notVisible');
   modal.style.display = 'block';
   var span = document.getElementsByClassName('close2')[0];

   span.onclick = function() {
     modal.style.display = 'none';
     modal.setAttribute('class', ' modal notVisible');
   };

   window.onclick = function(event) {
     modal.style.display = 'none';
     modal.setAttribute('class', 'modal notVisible');
   };

   var yesbtn2 = document.getElementById('yesBtn2');
   var nobtn2 = document.getElementById('noBtn2');

   yesbtn2.onclick = function(event) {
     modal.style.display = 'none';
     modal.setAttribute('class', 'modal notVisible');

          nobtn2.onclick = function(event) {
            modal.style.display = 'none';
            game.insertFirstPage();
            modal.setAttribute('class', 'modal notVisible');
          };



 game.resetGame();

   };
}

  startGame() {
    setInterval(() => {
      renderEverything();
      this.insertFirstPage()
    }, 100);

    //doesnt work yet.
    // The event occurs when the user navigates to a webpage = addEventListener("pageshow", function())
    // var playBtn = document.querySelector('.letsplay');
    // playBtn.addEventListener('click', function() {
    //   document.getElementsByClassName('.player1hand').toggle('bounce', { times: 1 }, 'slow');
    // });
  }


  checkWhoWonTurn() {
    if (this.currentPlayer.chooseHand === 'a' && this.computer.chooseHand === 'k' || this.currentPlayer.chooseHand === 's' && this.computer.chooseHand === 'l' || this.currentPlayer.chooseHand === 'd' && this.computer.chooseHand === 'j'){
      console.log('Player 1 wins!');
      this.scoreboard.userScore ++;
      this.checkWinner();
      this.currentPlayer.chooseHand = "";
      this.computer.chooseHand = "";
      // this.currentPlayer.increment();
      // this.updateScore();
    } else if (this.currentPlayer.chooseHand === 'a' && this.computer.chooseHand === 'l' || this.currentPlayer.chooseHand === 's' && this.computer.chooseHand === 'j' || this.currentPlayer.chooseHand === 'd' && this.computer.chooseHand === 'k') {
      console.log('Player 2 wins!'); 
      this.scoreboard.compScore++;
       this.checkWinner();
       this.currentPlayer.chooseHand = '';
       this.computer.chooseHand = '';
      // this.computer.increment(); 
      // this.updateScore();
    } else if ( this.currentPlayer.chooseHand === 'a' && this.computer.chooseHand === 'j' || this.currentPlayer.chooseHand === 's' && this.computer.chooseHand === 'k' || this.currentPlayer.chooseHand === 'd' && this.computer.chooseHand === 'l') {
      console.log("It's a draw. Play again!");
         this.currentPlayer.chooseHand = '';
         this.computer.chooseHand = '';
    }
  }


  checkWinner() {
    setTimeout(() => {
      if (this.scoreboard.userScore === 3) {
        this.endgame();
        this.resetGame();
      } else if (this.scoreboard.compScore === 3) {
        this.endgame();
        this.resetGame();
      }
    }, 50);
  }

  endgame() {
    var modal = document.getElementById('myModal');
          // modal.classList.remove('notVisible');
          modal.style.display = "block";
    var span = document.getElementsByClassName('close')[0];
    
          span.onclick = function() {
                 modal.style.display = 'none';
                 modal.setAttribute("class", ' modal notVisible');
                };

          window.onclick = function(event) {
                  modal.style.display = 'none';
                  modal.setAttribute('class', 'modal notVisible');
                  };

    var yesbtn = document.getElementById('yesBtn');
    var nobtn = document.getElementById('noBtn');

          yesbtn.onclick = function(event) {
                 modal.style.display = 'none';
                game.resetGame();
                modal.setAttribute('class', 'modal notVisible');
                 };

          nobtn.onclick = function(event) {
                 modal.style.display = 'none';
                   game.insertFirstPage();
                modal.setAttribute('class', 'modal notVisible');
                };
  }

  resetGame() {
      // var score = document.getElementsByClassName('scorecount')[0];
      // score.innerHTML = `0 - 0`;

       this.scoreboard.userScore = 0;
       this.scoreboard.compScore = 0;
  

}


        // switchTurn(){
        //     if (this.currentPlayer === this.user && this.computer !=== this.user){
                
        //     } else {
        //         this.computer = click
        //     }
        // }
    }





// renderPick(player){
//     console.log(" XXX " + player);
// }

var game = new Game();
game.startGame();


function renderEverything() {
game.scoreboard.renderScoreboard();
//  game. renderPics();
  game.checkWhoWonTurn();
  game.checkWinner();
//  game.choosePick();

}
