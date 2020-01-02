


function ageinDays(){

    var birthYear = prompt("What year were you born at?");
    var answer = (2019 - birthYear) * 365;

    /* Create a html element called as "h1" */

    var h1 = document.createElement("h1");

    /* Create a textnode */

    var textAnswer = document.createTextNode("you are" + answer + "days old");

    /* Set attributes to h1 */

    h1.setAttribute("id", "ageinDays");

    /* Append "textAnswer to a list ?" */
    
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}





    /* Isn't reset() an official function? */

    function reset(){

        /* We get the element by id... and then delete it. */

        document.getElementById('ageinDays').remove();

    }

    
    function GenerateCat(){

       /* alert("this function is working"); */

        /* Creating a HTML element called image */

        var image = document.createElement('img');

        var div = document.getElementById("flex-cat-gen");

        image.src ="thecatapi.com/api/images/get?format=src&type=gif&size=small";

        div.appendChild(image);

    }

    function rpsGame(yourChoice){
        

        console.log(yourChoice);
        
        let humanChoice;

        let botChoice;

        //humanChoice = yourChoice.id;

        // results = decideWinner(humanChoice,botChoice);
        
        

        botChoice = numberToChoice(randToRpsInt());

        console.log(botChoice);

        /*message = finalMessage(){

            alert("You won");

        }
        */
        /*
        rpsFrontEnd(yourChoice.id, botChoice, message)
        */
    }

    /* math random() returns a number between 0 and 1.
    
        math.floor() returns the largest integer number.
    */


    function randToRpsInt(){

        return Math.floor(Math.random()*3);

    }


    /* if number is 0, it will return rock ... and so on */

    function numberToChoice(number){
        return ['rock','paper','scissors'][number];
    }
      














