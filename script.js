console.log('welcome to spotify');

//Initialise the variables
let index= 1;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay')
let myprogressbar = document.getElementById('myprogressbar')
let gif1 = document.getElementById('gif1')
let gif2 = document.getElementById('gif2')
let mastersongname = document.getElementById('mastersongname')
let songitems = Array.from(document.getElementsByClassName('songitem'))
let songs =[
    
        {songName:'Kesariya',filePath:"songs/1.mp3",coverPath:'cover1.jpeg'},
        {songName:'Bewafa tera masum ',filePath:"songs/2.mp3",coverPath:'bewafa.jpg'},
        {songName:'DhokhaDhadi',filePath:"songs/3.mp3",coverPath:'dhokhadardi.jpg'},
        {songName:'Hamdard',filePath:"songs/4.mp3",coverPath:'hum.jpg'},
        {songName:'Kisi oor ke chat pe',filePath:"songs/5.mp3",coverPath:'kis.jpeg'},
        {songName:'Hamari Adhuri Kahani',filePath:"songs/6.mp3",coverPath:'hamariadhuri.jpg'},
        {songName:'Dil ka dariya',filePath:"songs/7.mp3",coverPath:'di.jpg'},
        {songName:'Samandar me kinara tu',filePath:"songs/8.mp3",coverPath:'sam.jpg'},
        {songName:'Tujhe bhool na',filePath:"songs/9.mp3",coverPath:'tujhe.jpg'},
        {songName:'Zaalima',filePath:"songs/10.mp3",coverPath:'zaa.jpg'}
    
]

songitems.forEach((element,i)=> {
    // console.log(element,i)
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
    
});
// audioelement.play();

//handle play pause click
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
        gif1.style.opacity = 1;
        gif2.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle')
        masterplay.classList.add('fa-play-circle')
        gif1.style.opacity = 0;
        gif2.style.opacity = 0;

    }
})

// listen to events
audioelement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    let progress = parseInt((audioelement.currentTime/audioelement.duration)*100)
    
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime = myprogressbar.value*audioelement.duration/100
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')

    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target)
        makeallplays();
        index = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioelement.src =`songs/${index}.mp3`;
        audioelement.currentTime =0;
        audioelement.play()
        // mastersongname.innerText= songs[index].songName;
        gif1.style.opacity = 1;
        gif2.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(index>9){
        index = 1;
    }
    else{
        index +=1;
    }
    mastersongname.innerText= songs[index].songName;
    audioelement.src =`songs/${index}.mp3`;
 
    audioelement.currentTime =0;
    audioelement.play()
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')


})


document.getElementById('previous').addEventListener('click',()=>{
    if(index<=1){
        index = 1;
    }
    else{
        index -=1;
    }
    mastersongname.innerText= songs[index].songName;
    audioelement.src =`songs/${index}.mp3`;
    audioelement.currentTime =0;
    audioelement.play()
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')


})
