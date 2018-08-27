const url = 'https://lit-fortress-6467.herokuapp.com/object'

document.getElementById('buttonChoose').onclick = function () {
  location.href = 'playlist.html';
};
callAPI(processResponse)

function processResponse(response) {
  console.log(response);
  console.log(response.results[0].title);
  const albums = response.results
  console.log(albums);
}

// help from Cameron with this request:
function callAPI(whenDone) {
  let request = new XMLHttpRequest();
  request.addEventListener("load", function(ev){
    const response = ev.target.response;
    const obj = JSON.parse(response);

    whenDone(obj);
  });
  request.open("GET", url);
  request.send();
}

function getThreeAlbums(albums) {
  let randomIndexes = [];
  let randomAlbums = [];

  const randIndex = (arr) => Math.floor(Math.random() * arr);

  for(let i = 0; i < 3; i++) {
    let index;
    let includesIndex = true;
    while (includesIndex) {
      index = randIndex(albums.length);
      includesIndex = randomIndexes.includes(index);
      if (!includesIndex) {
        randomIndexes.push(index);
        randomAlbums.push(albums[index]);
      }
    }
  }

  return randomAlbums

}
const albums = ['one', 'two', 'three', 'four', 'five', 'six']

console.log(getThreeAlbums(albums))
























// // create header, footer, button side, album side, and containers for body and albums
//
// const header = document.createElement('header');
// const container = document.createElement('div');
// const albumContainer = document.createElement('div')
// const chooseSide = document.createElement('chooseSide');
// const trainSide = document.createElement('trainSide');
// const buttonChoose = document.getElementById('buttonChoose');
// // const buttonClear = document.createElement('clear tracks');
// // const buttonSubmit = document.createElement('submit bin');
// const footer = document.createElement('footer');
// const body = document.querySelector('body');
//
// body.style.margin = '0';
// body.style.padding = '0';
//
// body.appendChild(header);
// header.style.backgroundColor = '#9B9B8D';
// header.style.height = '5vh';
//
// body.appendChild(container);
// container.style.backgroundColor = '#EEEEEE';
// container.style.height = '70vh';
// container.style.display = 'flex';
// container.appendChild(chooseSide);
// container.appendChild(trainSide);
//
// chooseSide.style.width = '70vw';
// chooseSide.innerText = 'track bin';
// chooseSide.style.font = '50px #450F62 avenir';
// chooseSide.innerTextAlign = 'center';
// // chooseSide.appendChild(buttonChoose);
// // buttonChoose.type = 'button';
// // buttonChoose.value = 'url(./playlist.html)';
//
// trainSide.style.width = '70vw';
// trainSide.style.backgroundImage = 'url(./resources/track.fw.png)';
// trainSide.style.backgroundSize = 'contain';
// trainSide.style.opacity = '0.19';
//
// body.appendChild(footer);
// footer.innerText = '© 2018 LiquidTorch Media';
// footer.style.background = '#68685A';
// footer.style.height = '5vh';
