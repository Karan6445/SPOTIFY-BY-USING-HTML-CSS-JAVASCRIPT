console.log("Welcome to Spotify");

// Initialize variables
let songIndex = 0;
let audioElement = new Audio(`songs/1.mp3`); // Updated path
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songitemPlay"));

let songs = [
    { songName: "Bandeya Rey Bandeya...", filePath: "songs/1.mp3", coverPath: "cover1.jpg" },
    { songName: "Tu Jhoom...", filePath: "songs/2.mp3", coverPath: "cover2.jpg" },
    { songName: "Lofi Love...", filePath: "songs/3.mp3", coverPath: "cover3.jpg" },
    { songName: "Husn...", filePath: "songs/4.mp3", coverPath: "cover4.jpg" },
    { songName: "Jo Tum Mere Ho...", filePath: "songs/5.mp3", coverPath: "cover5.jpg" },
    { songName: "Tu Hain To Main Hoon...", filePath: "songs/6.mp3", coverPath: "cover6.jpg" },
    { songName: "Haan ke Haan...", filePath: "songs/7.mp3", coverPath: "cover7.jpg" },
    { songName: "O Mahi...", filePath: "songs/8.mp3", coverPath: "cover8.jpg" },
];

// Handle play/pause click
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});

// Listen to time update event
audioElement.addEventListener("timeupdate", () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Update song time when progress bar is changed
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Function to reset all play buttons
const makeAllPlays = () => {
    songItems.forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    });
};

// Handle play button click on song list
songItems.forEach((element, i) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = i;
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");

        // Corrected song path
        audioElement.src = songs[songIndex].filePath;
        

        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    });
});

document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex>=8){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

})

document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

})
