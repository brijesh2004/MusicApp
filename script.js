const playMySong = document.getElementById("playMySong");
const StopMySong = document.getElementById("StopMySong");
const SongImages = document.getElementById("SongImages");
const songTitle = document.getElementById("songTitle");
const start = document.getElementById("start");
const end = document.getElementById("end");
const file = document.getElementById("file");

const songList = ["SONG/music2.mp3","SONG/music3.mp3","SONG/DardDilo.mp3","SONG/Dil_Galti.mp3",
"SONG/meri_zindagi.mp3","SONG/PhirBhiTumkoChaahunga.mp3","SONG/music1.mp3","SONG/Raataan_lambiyan.mp3","SONG/TeriMeri_Kahaani.mp3","SONG/TuHiHaiAashiqui.mp3"];
 
const ImageList = ["image/kesariya.jpg","image/rimjhim.jpg","image/darddilo.jpg","image/dilgalti.jpg"
,"image/merizingalihaitu.jpg","image/phirbhitumko.jpg","image/img1.jpg","image/ratyalambiya.jpg","image/terimerikahani.jpg","image/tuhihaiaashiqui.jpg"]

const TitleName = ["Kesariya Tera Rang Hai Piya","Rim Jhim Ye Savan Ki Barshate","Dard Dilo Ke Kam Ho Jate Main Aur Tum Ghar Ham Ho Jate","Dil Galti Kar Baitha Hai Galti Kar Baitha Hai Dil",
"Meri Jindagi Savari Mujhko Gale Lagake Baitha Liya Falak Pe","Phir Bhi Tumko Chahunga","Jitni Dafa Dekhu tujhe Dhadhke Joro se","Raataan Lambiyaan Lambiyaan Kate Tere Sanghiya","Teri Meri Kahani Hai Barisho ka Pani","Tu hi hai aashiki tu hi avaragi tu hi hai jindai tu hi juda"]
let MusicIndex = 0;
function playMyAudio(){
    document.getElementById("myAudio").pause();
    StopMySong.style.display="block";
    playMySong.style.display="none";
   
  }
  function StopMyAudio(){
   document.getElementById("myAudio").play();
   let audio = document.getElementById("myAudio");
  //  let audiorc = document.getElementById("myAudio").src;
  //  console.log(audiosrc);
    StopMySong.style.display="none";
    playMySong.style.display="block";
    let dur = Math.floor((audio.duration));
    // console.log(dur);
    file.style.width=`${dur}px`;
    file.max = `${dur}`;
    // console.log(file.max);
    audio.addEventListener('timeupdate', function() {
      // console.log('Current time:', audio.duration, 'seconds');
      // file.value = `${(Math.floor(audio.duration))%Math.floor((audio.currentTime))}`;
      // console.log((Math.floor(audio.duration))%Math.floor((audio.currentTime)));
      // console.log(Math.floor((audio.currentTime)));
      file.value =`${Math.floor(audio.currentTime)%dur}`;
      console.log(Math.floor(audio.currentTime))
      dur = Math.floor((audio.duration));
      end.innerText=dur+"s";
      start.innerText=Math.floor(audio.currentTime)+"s";
      // console.log(dur);
      if(Math.floor(audio.currentTime) == dur){
        dur = Math.floor((audio.duration));
        document.getElementById("myAudio").pause();
        StopMySong.style.display="block";
        playMySong.style.display="none";
      }

    });

  }

  function PlayNextSong(){
    document.getElementById("myAudio").src=`${songList[MusicIndex]}`;
    SongImages.src=`${ImageList[MusicIndex]}`
    songTitle.innerText=`${TitleName[MusicIndex]}`
    // document.getElementById("myAudio").play();
    // let audio = document.getElementById("myAudio");

    // let dur = Math.floor((audio.duration));
    // file.style.width=`${dur}px`;
    // file.max = `${dur}`;
    // console.log(file.max);

    // var audio = new Audio(`${songList[MusicIndex]}`);
    // audio.addEventListener("loadedmetadata", function() {
    //   console.log("Duration:", audio.duration, "seconds");
    // });
    MusicIndex++;
    if(MusicIndex>songList.length-1){
        MusicIndex=0;
    }

    document.getElementById("myAudio").pause();
    StopMySong.style.display="block";
    playMySong.style.display="none";
  }
  function PlayPrevSong(){
    document.getElementById("myAudio").src=`${songList[MusicIndex]}`;
    SongImages.src=`${ImageList[MusicIndex]}`;
    songTitle.innerText=`${TitleName[MusicIndex]}`;
    // document.getElementById("myAudio").play();
    // let audio = document.getElementById("myAudio");

    // let dur = Math.floor((audio.duration));
    // file.style.width=`${dur}px`;
    // file.max = `${dur}`;
    // console.log(file.max);

    MusicIndex--;
    if(MusicIndex<0)
    MusicIndex=songList.length-1;

    document.getElementById("myAudio").pause();
    StopMySong.style.display="block";
    playMySong.style.display="none";
  }



