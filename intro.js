



const title = document.getElementById("title");

const text = document.getElementById("text");

const question = document.getElementById("questionBox");

const success = document.getElementById("success");

const journey = document.getElementById("journeyBtn");



title.innerHTML = "Hi Chitty ❤️";



const messages = [

"I wanted to tell you something...",

"Actually...",

"Not just something.",

"Something I've wanted to tell you for years...",

"Thank you for always believing in me.",

"For being my safest place.",

"For being my Chitty ❤️"

];



let i = 0;



function nextMessage(){

    if(i < messages.length){

        text.innerHTML = messages[i];

        i++;

        setTimeout(nextMessage,2500);

    }

    else{

        question.style.display = "block";

    }

}



setTimeout(nextMessage,1800);




function checkAnswer(){

    const ans = document
    .getElementById("answer")
    .value
    .trim()
    .toLowerCase();


    if(ans === "chitty"){

        question.style.display="none";

        success.innerHTML="Welcome Home, Chitty ❤️";

        journey.style.display="inline-block";

    }

    else{

        alert("Hint ❤️ It's the name Teju always calls you.");

    }

}




journey.onclick=function(){

    startMusic();

    document.body.style.opacity="0";


    setTimeout(()=>{

        location.href="chapter1.html";

    },1000);

}