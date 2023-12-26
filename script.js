console.log("Welcome to spotify");
//initialize the variables
let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName:"ArabicKuthu", filePath:"1.mp3",coverPath:"1.jpg"},
    {songName:"gfgf", filePath:"2.mp3",coverPath:"2.jpg"},
    {songName:"A767", filePath:"3.mp3",coverPath:"3.jpg"},
    {songName:"gcghc7868", filePath:"4.mp3",coverPath:"4.jpg"},
    {songName:"ArabicKuthu", filePath:"5.mp3",coverPath:"5.jpg"},
    {songName:"ArabicKuthu", filePath:"2.mp3",coverPath:"6.jpg"},
    {songName:"ArabicKuthu", filePath:"1.mp3",coverPath:"7.jpg"},
    {songName:"ArabicKuthu", filePath:"3.mp3",coverPath:"8.jpg"},
    {songName:"ArabicKuthu", filePath:"4.mp3",coverPath:"9.jpg"},
    {songName:"ArabicKuthu", filePath:"4.mp3",coverPath:"10.jpg"},
]
songitems.forEach((elements)=>{
    console.log(element,i);
    elements.getElementsByTagName("img")[0].src = songs[i].coverPath;
    elements.getElementsByClassName("songname")[0].innerText = songs[i].songName;


})
//audioElement.play();
//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songitemplay')).forEach(()=>{
    element.classlist.add('fa-play-circle');
})
}
Array.from(document.getElementsByClassName('songitemplay')).forEach(()=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        e.target.classlist.remove('fa-play-circle');
        e.target.classlist.add('fa-pause-circle');


    })
})