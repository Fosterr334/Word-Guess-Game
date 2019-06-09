var para = [];
var node = [];
var element = [];
var letter = [];
var control=7;
var letID = " ";
var guess = "a";
var gameCheck = 0;
var rand = Math.floor(Math.random() * 3);;
var winCount = 0;
var picSwap;

var marioGame = {
    letterAmount : 5,
    name : ["m","a","r","i","o"],
}

var linkGame = {
    letterAmount : 4,
    name : ["l","i","n","k"],
}

var foxGame = {
    letterAmount : 3,
    name : ["f","o","x"],
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
function letterChecker(letID){
    if(document.getElementById(letID).innerHTML=== guess)
    {
        winCount--;
    }
}
if (rand === 1){
    boardMaker(marioGame.letterAmount);
        document.onkeyup = function(event){
            guess = event.key;
            if (guess === "m"){
                letterChecker("1");
                letterChanger("1",guess);
                winCount++
            }
            else if(guess === "a"){
                letterChecker("2");
                letterChanger("2",guess);
                winCount++
            }
            else if(guess === "r"){
                letterChecker("3");
                letterChanger("3",guess);
                winCount++
            }
            else if(guess === "i"){
                letterChecker("4");
                letterChanger("4",guess);
                winCount++
            }
            else if(guess === "o"){
                letterChecker("5");
                letterChanger("5",guess);
                winCount++
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
                    document.getElementById("stock3").style.opacity = 0;
                    document.onkeyup = function(event){
                        alert("YOU LOSE! Refresh To Retry")
                    }
                }
            }
            if (winCount === marioGame.name.length){
                alert("YOU WIN!!! Refresh To Play Again")
                document.onkeyup = function(event){
                    alert("YOU WIN!!! Refresh To Play Again")
                }
            }
        } 
            
}

if (rand === 0){
    boardMaker(linkGame.letterAmount);
        document.onkeyup = function(event){
            guess = event.key;
            if (guess === "l"){
                letterChecker("1");
                letterChanger("1",guess)
                winCount++
            }
            else if(guess === "i"){
                letterChecker("2");
                letterChanger("2",guess)
                winCount++
            }
            else if(guess === "n"){
                letterChecker("3");
                letterChanger("3",guess)
                winCount++
            }
            else if(guess === "k"){
                letterChecker("4");
                letterChanger("4",guess)
                winCount++
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
                    document.getElementById("stock3").style.opacity = 0;
                    document.onkeyup = function(event){
                        alert("YOU LOSE! Refresh To Retry")
                    }
                }
            }
            if (winCount === linkGame.name.length){
 
                alert("YOU WIN!!! Refresh To Play Again")
                document.onkeyup = function(event){
                    alert("YOU WIN!!! Refresh To Play Again")
                }

            }
        } 
            
}

if (rand === 2){
    boardMaker(foxGame.letterAmount);
        document.onkeyup = function(event){
            guess = event.key;
            if (guess === "f"){
                letterChecker("1");
                letterChanger("1",guess)
                winCount++
            }
            else if(guess === "o"){
                letterChecker("2");
                letterChanger("2",guess)
                winCount++
            }
            else if(guess === "x"){
                letterChecker("3");
                letterChanger("3",guess)
                winCount++
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
                    document.getElementById("stock3").style.opacity = 0;
                    document.onkeyup = function(event){
                        alert("YOU LOSE! Refresh To Retry")
                    }
                }
            }
            if (winCount === foxGame.name.length){
                alert("YOU WIN!!! Refresh To Play Again")
                document.onkeyup = function(event){
                    alert("YOU WIN!!! Refresh To Play Again")
                }

                
            }
        } 
            
}


