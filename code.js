var computer;
var score = 0;


function show_Rules()
{
    document.getElementById("global2").style.visibility = "visible";
    document.getElementById("container2").style.transform = "translate(0,0)";
}

function Hide_Rules()
{
    document.getElementById("container2").style.transform = "translateY(15px)";
    document.getElementById("global2").style.visibility = "hidden";
}

function Game(choix)
{
    score = localStorage.getItem("score");
    document.getElementById("class2").style.visibility = "hidden";
    document.getElementById("WIN_GAIN").style.visibility = "hidden";
    document.getElementById("picked1").style.visibility = "visible";
    document.getElementById("picked2").style.visibility = "visible";
    document.getElementById("images").style.visibility = "visible";
    document.getElementById(choix).style.visibility = "visible";
    
    setTimeout(function () {
        computer = Math.floor(Math.random() * 3);
        document.getElementById("0"+computer).style.visibility = "visible";
        document.getElementById("cercle1_1").style.transform = "translateX(0)";
        document.getElementById("cercle2_1").style.transform = "translateX(0)";
        document.getElementById("WIN_LOSE").style.transform = "translateY(-50px)";
        document.getElementById("AGAIN").style.transform = "translateY(-40px)";
        document.getElementById("WIN_GAIN").style.visibility = "visible";
        
        let win_lose = "YOU LOSE";
        switch(choix) {
            case 0:
            if(computer == 0 || computer == 2)
             {win_lose = "YOU WIN";}
              break;
            case 1:
             if(computer == 1 || computer == 0)
              {win_lose = "YOU WIN";}
              break;
            default:
              if(computer == 2 || computer == 1)
               {win_lose = "YOU WIN";}
          }
          document.getElementById("WIN_LOSE").innerHTML = win_lose;
          if(win_lose == "YOU WIN")
           {score++;
            document.getElementById("cercle1_1").style.visibility = "visible";
           }
          else {score--;
                document.getElementById("cercle2_1").style.visibility = "visible";
               }
          document.getElementById("score_value").innerHTML = score;
          localStorage.setItem("score", score);
    }
        , 700);   

    

}

function Again()
{
    document.getElementById("class2").style.visibility = "visible";
    document.getElementById("WIN_GAIN").style.visibility = "hidden";
    document.getElementById("picked1").style.visibility = "hidden";
    document.getElementById("picked2").style.visibility = "hidden";
    document.getElementById("images").style.visibility = "hidden";
    document.getElementById(0).style.visibility = "hidden";
    document.getElementById(1).style.visibility = "hidden";
    document.getElementById(2).style.visibility = "hidden";
    document.getElementById("0"+computer).style.visibility = "hidden";
    
    document.getElementById("cercle1_1").style.transform = "translateX(80px)";
    document.getElementById("cercle2_1").style.transform = "translateX(-80px)";
    document.getElementById("WIN_LOSE").style.transform = "translateY(-80px)";
    document.getElementById("AGAIN").style.transform = "translateY(-20px)";
    document.getElementById("cercle1_1").style.visibility = "hidden";
    document.getElementById("cercle2_1").style.visibility = "hidden";


}