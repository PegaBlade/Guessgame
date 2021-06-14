var score
score = 0;
function checkAnswer(){

   a= prompt('What animal is in the image?');

    if(a=='dog'){

        alert('Well Done. Correct answer');
        score = score + 1;
  		document.getElementById("answer1").disabled = true;

    }

    else{

        alert('Sorry, incorrect, it is a dog');
        document.getElementById("answer1").disabled = true;
    }

}
function checkAnswer2(){

   b= prompt('What animal is in the image?');

    if(b=='cat'){

        alert('Well Done. Correct answer');
        score = score + 1;
        document.getElementById("answer2").disabled = true;

    }

    else{

        alert('Sorry, incorrect, it is a cat');
        document.getElementById("answer2").disabled = true;
    }

}
function checkAnswer3(){

   c= prompt('What animal is in the image?');

    if(c=='lion'){

        alert('Well Done. Correct answer');
        score = score + 1;
        document.getElementById("answer3").disabled = true;

    }

    else{

        alert('Sorry, incorrect, it is a lion');
        document.getElementById("answer3").disabled = true;
    }

}
function checkAnswer4(){

   d= prompt('What animal is in the image?');

    if(d=='rabbit'){

        alert('Well Done. Correct answer');
        score = score + 1;
        document.getElementById("answer4").disabled = true;

    }

    else{

        alert('Sorry, incorrect, it is a rabbit');
        document.getElementById("answer4").disabled = true;
    }

}
function checkAnswer5(){

   e= prompt('What animal is in the image?');

    if(e=='panda'){

        alert('Well Done. Correct answer');
        score = score + 1;
        document.getElementById("answer5").disabled = true;
        alert('Your score is ' + score+ '/5')
    }

    else{

        alert('Sorry, incorrect, it is a panda');
        document.getElementById("answer5").disabled = true;
        alert('Your score is ' + score+ '/5')
    }

}