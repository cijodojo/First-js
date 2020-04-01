/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores,roundScore,activePlayer,gamePlaying;
 
init();



//dice = Math.floor(Math.random()*6)+1;
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent=dice;

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying){
        //1. randome numver or dice roll:
        var dice = Math.floor(Math.random() * 6) + 1;

        //display
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = "block";
        diceDom.src = 'dice-' + dice + '.png';

        //roll if not hit 1

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            /* if player hits one
            activePlayer===0 ? activePlayer=1 : activePlayer=0;
            roundScore=0;
            document.getElementById('current-0').textContent=0;
     
            document.getElementById('current-1').textContent = 0;
         
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active'); */
            nextPlayer();
        }

    }
   

});

document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gamePlaying){

        //update total score
        scores[activePlayer] += roundScore;

        //display in UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //check if the player won the game

        if (scores[activePlayer] >= 50) {

            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;
    }

    /* after hold shift to next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;

    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active'); */
else{

    nextPlayer();
}
    
    }
});


document.querySelector('.btn-new').addEventListener('click' , init )

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;

    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying=true;


    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent0;
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 1';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
