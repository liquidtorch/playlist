// create header, footer, button side, album side, and containers for body and albums

const header = document.createElement('header');
const container = document.createElement('div');
const albumContainer = document.createElement('div')
const buttonSide = document.createElement('buttonSide');
const trainSide = document.createElement('trainSide');
const footer = document.createElement('footer');
const body = document.querySelector('body');

body.style.margin = '0';
body.style.padding = '0';

body.appendChild(header);
header.style.backgroundColor = '#9B9B8D';
header.style.height = '5vh';

body.appendChild(container);
container.style.backgroundColor = '#EEEEEE';
container.style.height = '70vh';
container.style.display = 'flex';
container.appendChild(buttonSide);
container.appendChild(trainSide);

buttonSide.style.width = '70vw';
trainSide.style.width = '70vw';
trainSide.style.backgroundImage = 'url(./resources/track.fw.png)';
trainSide.style.backgroundSize = 'contain';
trainSide.style.opacity = '0.19';

body.appendChild(footer);
footer.innerText = '© 2018 LiquidTorch Media';
footer.style.background = '#68685A';
footer.style.height = '5vh';
