var gameDispaly=document.getElementById('gameDisplay');
var gameState=['','','','','','','','',''];
var gameRule=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
var gameActive=true;
var currentPlayer= 'X';
var scorePlayer1=0;
var scorePlayer2=0;

var allCell=document.getElementsByClassName('col');
var players=document.getElementsByTagName('p');
players[0].innerHTML= 'Player 1 :'+ scorePlayer1;
players[1].innerHTML= 'Player 2 :'+scorePlayer2;



for(const cell of allCell){
   
    
    cell.addEventListener('click',cellClicked);

}

gameDispaly.innerHTML=playerTurn();
function cellClicked(event){
    var cellSelected=event.target;
  
    var cellIndex=parseInt(cellSelected.getAttribute('data-cell-index'));

    if(gameState[cellIndex]!==''|| !gameActive){
        return;
    }
   
handleCellsSelected(cellSelected,cellIndex);
handleGamesRules();


}

function handleCellsSelected(cellSelected,cellIndex){
    cellSelected.innerHTML=currentPlayer;
gameState[cellIndex]= currentPlayer;
console.log(gameState,cellIndex);



}
function handleGamesRules(){
    var won=false;
    for(i=0;i<8;i++){
        var rule=gameRule[i];
        console.log(rule);
        
        var a=gameState[rule[0]];
        var b=gameState[rule[1]];
        var c=gameState[rule[2]];
        if(a==='' || b==='' || c===''){
            continue;
        }
        if(a===b &&b===c){
            won=true;
            break;
        }
        
        }
        if(won){
            gameDispaly.innerHTML=winMessage();
            gameActive=false;
            addScore();
            return;
    }
    var draw=!gameState.includes('');
    if(draw){
        gameDispaly.innerHTML=drawMessage();
        gameActive=false;
        return;
}

    changePlayer();
   

}
function changePlayer(){
    currentPlayer=currentPlayer==='X'?'0':'X';
    gameDispaly.innerHTML=playerTurn();
}

function winMessage(){
    return `Pobjedio je igrac :${currentPlayer}`;
   
}
function drawMessage(){
    return 'Nerjeseno je pokusajte opet';
}
function playerTurn(){
    return `Na potezu je igrac: ${currentPlayer}`;
}
function RestartGame(){
    currentPlayer='X';
    gameActive=true;
   gameState=['','','','','','','','',''];
    gameDispaly.innerHTML=playerTurn();
    for(const cell of allCell){
        cell.innerHTML='';
    
    }


}
function addScore(){
    
    if(currentPlayer=='X'){
        scorePlayer1++;
        players[0].innerHTML=`Player 1 : ${scorePlayer1}`;
        console.log(scorePlayer1);
        
    }
    else if(currentPlayer=='0'){
        scorePlayer2++;
        players[1].innerHTML=`Player 2 : ${scorePlayer2}`; 
    }

}


