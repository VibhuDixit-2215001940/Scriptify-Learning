let playBtn = document.getElementById('playBtn');
let progress = document.getElementById('progress');
let songList = document.getElementById('songList');

let arr = [
    {
        name : 'a',
        id : 1
    },
    {
        name : 'b',
        id : 2
    },
    {
        name : 'c',
        id : 3
    },
    {
        name : 'd',
        id : 4
    }
]

let audio = new Audio('./assets/d.mp3')
// audio.play()

//show songs!!
for(let song of arr){
    let baccha = document.createElement('li');
    baccha.innerText = song.name;
    baccha.setAttribute('id',song.id);
    songList.append(baccha)
}

playBtn.addEventListener('click',function(){
    audio.paused ? audio.play() : audio.pause()
    if(playBtn.children[0].classList.contains('fa-circle-play')){
        playBtn.children[0].classList.remove('fa-circle-play');
        playBtn.children[0].classList.add('fa-circle-pause')
    }
    else{
        playBtn.children[0].classList.add('fa-circle-play');
        playBtn.children[0].classList.remove('fa-circle-pause')
    }
})
//current time ko dekho
audio.addEventListener('timeupdate',function(){
    let curr = audio.currentTime*100/audio.duration;
    progress.value = curr
})


//progress ko apne hisaab se aage peeche karo!!
progress.addEventListener('change',function(){
    let update = audio.duration * progress.value/100;
    audio.currentTime = update
})


//gana khud se karo select
songList.addEventListener('click',function(e){
    let songId = e.target.getAttribute('id');
    audio.src = `./assets/song${songId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.remove('fa-circle-play');
    playBtn.children[0].classList.add('fa-circle-pause')
})