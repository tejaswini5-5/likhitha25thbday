let bgMusic = new Audio("audio/music.mp3");

bgMusic.loop = true;
bgMusic.volume = 0.35;


function startMusic(){

    bgMusic.play();

    localStorage.setItem("musicPlaying","yes");

}