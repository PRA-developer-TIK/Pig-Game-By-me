
var scores,roundScore,activePlayer,gameplaying;


init();

function init()
{
    gameplaying=true;
    scores=[0,0];
    roundScore=0;
    activePlayer=0;

    document.querySelector('.dice').style.display='none';

    document.getElementById("current--0").textContent=0;
    document.getElementById("current--1").textContent=0;
    document.getElementById("score--0").textContent=0;
    document.getElementById("score--1").textContent=0;

    //changing player names from winner to player
    document.getElementById("name--0" ).textContent="Player1";
    document.getElementById("name--1" ).textContent="Player2";

    //removing and adding active and winner classes from players 
    document.querySelector(".player--1").classList.remove("winner");
    document.querySelector(".player--0").classList.remove("winner");
    document.querySelector(".player--0").classList.remove("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active");








}

//Function to switch between players 
function NextPlayer()
{
     //Change the current player's roundscore
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1; 
    roundScore=0;

    //Once u get 1 then the text displaying current score will turn 0
    document.getElementById("current--0").textContent=0;
    document.getElementById("current--1").textContent=0;

    /*Change active class while switching players i.e 
        add class from one player and add it to another
        another way of doin it is using toggle class
    */

    /*document.querySelector(".player--0").classList.remove(".player--active");
    document.querySelector(".player--1").classList.add(".player--active");*/

    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");

    document.querySelector('.dice').style.display='none';

}


//Roll dice event 
document.querySelector('.btn--roll').addEventListener('click',function(){
    //till no one wins continue rolling dice
    if(gameplaying)
    {
        //1.Generate random number
        var dice=Math.floor(Math.random() * 6)+1;

        //2.Update dice image 
        var diceDom=document.querySelector('.dice');
        diceDom.style.display='block';
        diceDom.src="dice-" + dice + ".png";

        //3.Updating the roundScore 

        if(dice !== 1)
        {
            //continue adding to current players round score
            roundScore+=dice;
            document.querySelector("#current--" + activePlayer).textContent=roundScore;
        }
        else
        {
            NextPlayer();
        }
    }
});


//Hold button event 
document.querySelector(".btn--hold").addEventListener("click",function(){

    //till no ones a winnner you canhold score 
    if(gameplaying)
    {
        //Update and store roundScores in array
        scores[activePlayer]+=roundScore;

        //Update the text content 
        document.querySelector("#score--"+activePlayer).textContent=scores[activePlayer];

        //Check if payer has won  the game 
        if(scores[activePlayer]>=100)
        {
            document.querySelector("#name--" + activePlayer).textContent="Winner!";
            document.querySelector('.dice').style.display='none';
            document.querySelector(".player--" + activePlayer).classList.add("winner");
            document.querySelector(".player--" + activePlayer).classList.remove("player--active");
            //game is over 
            gameplaying=false;
        }
        else
        {
            //switch to next player
            NextPlayer();
        }
    }

});

//New game button event
//we write init and not init() because we want to  call  it only when button is clicked
document.querySelector(".btn--new").addEventListener("click",init);













/*
//console.log(dice);



//using innerHTML to manipulate text 
//document.querySelector('#current--' + activePlayer).innerHTML =' <em>'+ dice +'</em>';

var x =document.querySelector('#score--' + activePlayer).textContent;*/