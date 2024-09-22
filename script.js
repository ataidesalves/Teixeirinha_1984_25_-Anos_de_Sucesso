var musicPlayer = document.getElementById("musicPlayer");
var playPauseBtn = document.getElementById("playPauseBtn");
var volumeControl = document.getElementById("volumeControl");
var progressBar = document.getElementById("progressBar");
var currentTimeDisplay = document.getElementById("currentTime");
var durationDisplay = document.getElementById("duration");
var audioSource = document.getElementById("audioSource");
var songList = document.getElementById("songList");


var songs = [
    { name: "01 - Apenas uma Flor", file: "./01 - Apenas uma Flor.mp3" },
    { name: "02 - Na Batalha do Amor", file: "./02 - Na Batalha do Amor.mp3" },
    { name: "03 - Ela Tornou-se Freira", file: "./03 - Ela Tornou-se Freira.mp3" },
    { name: "04 - Cinzeiro Amigo", file: "./04 - Cinzeiro Amigo.mp3" },
    { name: "05 - Velho Casarão", file: "./05 - Velho Casarão.mp3" },
    { name: "06 - Meu Velho Pai", file: "./06 - Meu Velho Pai.mp3" },
    { name: "07 - Coração de Luto", file: "./07 - Coração de Luto.mp3" },
    { name: "08 - Paulistinha Bonita", file: "./08 - Paulistinha Bonita.mp3" },
    { name: "09 - Que Droga de Vida", file: "./09 - Que Droga de Vida.mp3" },
    { name: "10 - Tordilho Negro", file: "./10 - Tordilho Negro.mp3" },
    { name: "11 - Ébrio de Amor", file: "./11 - Ébrio de Amor.mp3" },
    { name: "12 - Desafio das Peguntas", file: "./12 - Desafio das Peguntas.mp3" },

];    

var currentIndex = 0;

// Inicialização com a primeira música
audioSource.src = songs[currentIndex].file;
musicPlayer.load();

function playPause() {
    if (musicPlayer.paused) {
    musicPlayer.play();
    playPauseBtn.innerHTML = "Pause";
    } else {
    musicPlayer.pause();
    playPauseBtn.innerHTML = "Play";
    }
}

function setVolume() {
    musicPlayer.volume = volumeControl.value / 100;
}

function changeSong() {
    currentIndex = songList.selectedIndex;
    audioSource.src = songs[currentIndex].file;
    musicPlayer.load();
  playPause(); // Inicia automaticamente a nova música
}

function updateProgressBar() {
    var currentTime = musicPlayer.currentTime;
    var duration = musicPlayer.duration;

    var currentTimeMinutes = Math.floor(currentTime / 60);
    var currentTimeSeconds = Math.floor(currentTime % 60);
    currentTimeDisplay.innerHTML = currentTimeMinutes + ":" + (currentTimeSeconds < 10 ? "0" : "") + currentTimeSeconds;

    var durationMinutes = Math.floor(duration / 60);
    var durationSeconds = Math.floor(duration % 60);
    durationDisplay.innerHTML = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;

    var progress = (currentTime / duration) * 100;
    progressBar.value = progress;
};

function playNextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    audioSource.src = songs[currentIndex].file;
    musicPlayer.load();
    musicPlayer.play();
    playPauseBtn.innerHTML = "Pause";
    songList.selectedIndex = currentIndex;
}

musicPlayer.addEventListener("timeupdate", updateProgressBar);
musicPlayer.addEventListener("ended", playNextSong);
