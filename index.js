

var dis = document.getElementById("numdisplay")
var rightnum = Math.round(Math.random()*100);
var score = 100;

document.getElementById("start").addEventListener("click",
function(){
   document.getElementById("cover").style.zIndex = "-1"; 
});

document.getElementById("guess").addEventListener("click",
                                                
function () {
    var numguess = parseInt(document.getElementById("num").value);
    
    console.log(numguess);
    
    if(numguess >= 101){
    dis.innerText = "I SAID BETWEEN 1 AND 100";
    document.getElementById("display").style.backgroundColor = "red";
    }
    else if(numguess <= 0){
    dis.innerText = "I SAID BETWEEN 1 AND 100";
    document.getElementById("display").style.backgroundColor = "red";
    }
    else{
        if(numguess > rightnum){
            dis.innerText = "Too big"
            document.getElementById("display").style.backgroundColor = "white";
        }
        else if(numguess < rightnum) {
            dis.innerText = "too Small";
            document.getElementById("display").style.backgroundColor = "white";
        }
        else if(numguess == rightnum){
            dis.innerText = "You guessed: "+numguess+" You Win! Your score is "+score;
            document.getElementById("display").style.backgroundColor = "aqua";
            //alert("You guessed: "+numguess+"Which is right!!!");
            console.log("nested first if");
            score = score - 1;
            rightnum = Math.round(Math.random()*100);
        }
        
    }
    
});