


function ageinDays(){

    var birthYear = prompt("What year were you born at?");
    var answer = (2019 - birthYear) * 365;

    /* Create a html element called as "h1" */

    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("you are" + answer + "days old");

    /* Set attributes to h1 */

    h1.setAttribute("id", "ageindays");

    /* Append "textAnswer to a list ?" */
    
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}





    /* Isn't reset() an official function? */

    function reset(){

        alert("the reset button ain't working properly yet.");

        document.getElementById(ageinDays).remove();
    
    }

    
    function GenerateCat(){

        alert("this function is working");

        /* Creating a HTML element called image */

        var image = document.createElement("img");

        var div = document.getElementById("flex-cat-gen");

        image.src ="https://giphy.com/gifs/link-the-legend-of-zelda-NVBR6cLvUjV9C";

        div.appendChild(image);

    }
      














