var para = [];
var node = [];
var element = [];
var letter = [];
var control=7;
var letID = " ";
var guess = "a";
var gameCheck = 0;
var rand = 1;
var winCount = 0;

var marioGame = {
    letterAmount : 5,
    name : ["m","a","r","i","o"],
}

function boardMaker(control) {  

    for (i=0;i<control;i++){    
    para[i] = document.createElement("p");
    para[i].setAttribute('id',"1234567"[i]);
    para[i].setAttribute('class','col-xl-1 whiteText');
    node[i] = document.createTextNode("_");
    para[i].appendChild(node[i]);
    element[i] = document.getElementById("hangmanArea");
    element[i].appendChild(para[i]);
    }
}

function letterChanger(letID, guess){
    document.getElementById(letID).innerHTML = guess;
}
if (rand === 1){
    boardMaker(marioGame.letterAmount);
        for (index=0;index<99;index++){
            guess = prompt("Enter a letter");
            if (guess === "m"){
                winCount++
                letterChanger("1",guess)
            }
            else if(guess === "a"){
                winCount++
                letterChanger("2",guess)
            }
            else if(guess === "r"){
                winCount++
                letterChanger("3",guess)
            }
            else if(guess === "i"){
                winCount++
                letterChanger("4",guess)
            }
            else if(guess === "o"){
                winCount++
                letterChanger("5",guess)
            }
            else{
                if(gameCheck === 0){
                gameCheck++;
                document.getElementById("stock1").style.opacity = 0;
                }
                else if(gameCheck === 1){
                    gameCheck++;
                    document.getElementById("stock2").style.opacity = 0;
                }
                else{
                    index = 100;
                    document.getElementById("stock3").style.opacity = 0;

                }
            }
            if (winCount === marioGame.name.length){
                index = 99;
                alert("You Win");
            }
        }         
}


