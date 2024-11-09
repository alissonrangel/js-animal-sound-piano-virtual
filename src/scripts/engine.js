const pianoKeys = document.querySelectorAll('.piano-keys .key');
const pianoKeysSpan = document.querySelectorAll('.piano-keys .key span');

const volumeSlider = document.querySelector('.volume-slider input');
const keysChech = document.querySelector('.keys-check input');

let mapedKeys = []
let audio = new Audio("src/tunes/a.wav")

const playTune = (key) => {
  audio.src = `src/sounds/${key}.mp3`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key='${key}']`)
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
}

pianoKeys.forEach((key, index) => {

  key.addEventListener("click", () => playTune(key.dataset.key) );
  console.log(pianoKeysSpan[index].innerHTML);
  pianoKeysSpan[index].style.backgroundImage = `url('src/images/${key.dataset.key}.png')`;
  pianoKeysSpan[index].style.backgroundRepeat = "no-repeat"
  pianoKeysSpan[index].style.backgroundSize = "50px 50px"

  mapedKeys.push(key.dataset.key);
})

document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) {
    playTune(e.key);  
  }
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
  console.log(e.target.value);
}

volumeSlider.addEventListener("input", handleVolume)

const showHideKeys = () => {
  pianoKeysSpan.forEach( (key, index ) => {
    key.classList.toggle("hide");
    if (key.classList.contains('hide')) {
      key.innerHTML = "";   
    } else {
      console.log('show'); 
      key.innerHTML = `${mapedKeys[index]}`   
    }
  })
  
}

keysChech.addEventListener("click", showHideKeys )