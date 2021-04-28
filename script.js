'use strict';
const player0E=document.querySelector('.player--0');
const player1E=document.querySelector('.player--1');
const score0=document.getElementById('score--0');
const score1=document.getElementById('score--1');
const rollDice=document.querySelector('.btn--roll');
const holdDice=document.querySelector('.btn--hold');
var current0=document.getElementById('current--0');
var current1=document.getElementById('current--1');
score1.textContent=0;
score0.textContent=0;
const dice=document.querySelector('.dice');
dice.classList.add('hide');
let currentScore=0;
let activePlayer=0;
const score=[0,0];
//generating random number
// let randomNo=Math.trunc(Math.random()*6)+1;
// console.log(randomNo);
rollDice.addEventListener('click',function(){
	let randomNo=Math.trunc(Math.random()*6)+1;
	console.log(randomNo);
	dice.classList.remove('hide');
	// if(randomNo==1){
	// 	dice.classList.remove('hide');
	// 	document.querySelector('.dice')
 //             .src="dice-1.png";
	// }else if(randomNo==2){
	// 	dice.classList.remove('hide');
	// 	document.querySelector('.dice')
 //             .src="dice-2.png";
	// }else
	// if(randomNo==3){
	// 	dice.classList.remove('hide');
	// 	document.querySelector('.dice')
 //             .src="dice-3.png";
	// }else
	// if(randomNo==4){
	// 	dice.classList.remove('hide');
	// 	document.querySelector('.dice')
 //             .src="dice-4.png";
	// }else
	// if(randomNo==5){
	// 	dice.classList.remove('hide');
	// 	document.querySelector('.dice')
 //             .src="dice-5.png";
	// }else if(randomNo==6){
	// 	dice.classList.remove('hide');
	// 	document.querySelector('.dice')
 //             .src="dice-6.png";
	// }
	dice.src=`dice-${randomNo}.png`;
	//adding the dice value to the current score
	if(randomNo!=1){
         currentScore=currentScore+randomNo;
         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
	}else{
		document.getElementById(`current--${activePlayer}`).textContent=0;
		currentScore=0;
        activePlayer=activePlayer===0?1:0;
        player0E.classList.toggle('player--active');
        player1E.classList.toggle('player--active');
        
	}
});
  holdDice.addEventListener('click',function(){
     // document.(`score--${activePlayer}`).textContent=currentScore
      document.getElementById(`score--${activePlayer}`).textContent=currentScore
   })