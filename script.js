'use strict';
let score = [0,0];
let activePlayer = 0;
let currentTotal = 0;
let playing = true;

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceImg = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

// console.log(player0El);
// console.log(player1El);



// Removing the dice from the beggining and putting score = 0 for both players
diceImg.classList.add('hidden');
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;

rollBtn.addEventListener('click', function() {

    if(playing) {
    // Getting a random number from 1 to 6
    let rolledNumber = Math.trunc(Math.random() * 6) + 1;

    // Showing the dice roll
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${rolledNumber}.png`;

    // Showing the current Score
    if(rolledNumber !== 1){
        currentTotal += rolledNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentTotal;
    } else {
        switchPlayers();
    }
    }

});

holdBtn.addEventListener('click', function() {
   
    if(playing) { 

    score[activePlayer] += currentTotal;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    if(score[activePlayer] >= 100) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    
    switchPlayers();
    }
});


newBtn.addEventListener('click', function() {
    activePlayer = 0;
    playing = true;
    currentTotal = 0;
    score = [0,0];
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    if(player1El.classList.contains('player--active')) player1El.classList.remove('player--active');
})


function switchPlayers() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0? 1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    currentTotal = 0;
}