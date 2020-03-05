class Player1 {
  constructor() {
    this.chooseHand = '';
    // choosePick(){}
  }
}

class Player2 {
  constructor() {
    this.chooseHand = '';
  }
  // choosePick(){
  // }
}

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'a':
      console.log('Player 1 choose rock'); // change the action so that the player's different option store the data and then reveals when both players have chosen their hand.
      game.currentPlayer.chooseHand = 'a';
      break;
    case 's':
      console.log('Player 1 choose scissors'); // change the action so that the player's different option store the data and then reveals when both players have chosen their hand.
      game.currentPlayer.chooseHand = 's';
      break;
    case 'd':
      console.log('Player 1 choose paper'); // change the action so that the player's different option store the data and then reveals when both players have chosen their hand.
      game.currentPlayer.chooseHand = 'd';
      break;
  }
});

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'j':
      console.log('Player 2 choose rock'); // change the action so that the player's different option store the data and then reveals when both players have chosen their hand.
      game.computer.chooseHand = 'j';
    game.checkWhoWonTurn();
      break;
    case 'k':
      console.log('Player 2 choose scissors'); // change the action so that the player's different option store the data and then reveals when both players have chosen their hand.
      game.computer.chooseHand = 'k';
      game.checkWhoWonTurn();
      break;
    case 'l':
      console.log('Player 2 choose paper'); // change the action so that the player's different option store the data and then reveals when both players have chosen their hand.
      game.computer.chooseHand = 'l';
      game.checkWhoWonTurn();
      break;
  }
});
