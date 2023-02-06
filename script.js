
const SongImages = document.getElementById("SongImages");
const songTitle = document.getElementById("songTitle");
const audioTitle = document.getElementById("audioTitle");
const container = document.getElementById("container");

const colorList = ["rgb(245, 185, 74)","rgb(95, 95, 201)","rgb(136, 180, 136)","rgb(114, 53, 53)","rgb(215, 61, 61)","rgb(240, 240, 190)","black","rgb(72, 102, 99)","rgb(173, 164, 164)","rgb(244, 216, 216)"]

const songList = ["SONG/music2.mp3","SONG/music3.mp3","SONG/DardDilo.mp3","SONG/Dil_Galti.mp3",
"SONG/meri_zindagi.mp3","SONG/PhirBhiTumkoChaahunga.mp3","SONG/music1.mp3","SONG/Raataan_lambiyan.mp3","SONG/TeriMeri_Kahaani.mp3","SONG/TuHiHaiAashiqui.mp3"];
 
const ImageList = ["image/kesariya.jpg","image/rimjhim.jpg","image/darddilo.jpg","image/dilgalti.jpg"
,"image/merizingalihaitu.jpg","image/phirbhitumko.jpg","image/img1.jpg","image/ratyalambiya.jpg","image/terimerikahani.jpg","image/tuhihaiaashiqui.jpg"]

const TitleName = ["Kesariya Tera Rang Hai Piya","Rim Jhim Ye Savan Ki Barshate","Dard Dilo Ke Kam Ho Jate Main Aur Tum Ghar Ham Ho Jate","Dil Galti Kar Baitha Hai Galti Kar Baitha Hai Dil",
"Meri Jindagi Savari Mujhko Gale Lagake Baitha Liya Falak Pe","Phir Bhi Tumko Chahunga","Jitni Dafa Dekhu tujhe Dhadhke Joro se","Raataan Lambiyaan Lambiyaan Kate Tere Sanghiya","Teri Meri Kahani Hai Barisho ka Pani","Tu hi hai aashiki tu hi avaragi tu hi hai jindai tu hi juda"]
let MusicIndex = 0;
  function PlayNextSong(){
    document.getElementById("audioTitle").src=`${songList[MusicIndex]}`;
   
    SongImages.src=`${ImageList[MusicIndex]}`
    songTitle.innerText=`${TitleName[MusicIndex]}`
    container.style.backgroundColor=`${colorList[MusicIndex]}`;
    MusicIndex++;
    if(MusicIndex>songList.length-1){
        MusicIndex=0;
    }
  }
  function PlayPrevSong(){
    document.getElementById("audioTitle").src=`${songList[MusicIndex]}`;
    SongImages.src=`${ImageList[MusicIndex]}`;
    songTitle.innerText=`${TitleName[MusicIndex]}`;
    MusicIndex--;
    if(MusicIndex<0)
    MusicIndex=songList.length-1;
  }



