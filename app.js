let gubbinsContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

function Gubbins(name, src) {
  this.name = name;
  this.srsc = src;
  this.views = 0;
}
function getRandomIndex() {
  return Math.floor(Math.random() * allGubbins.length);
}
function renderGubbins() {
  let gubbins1Index = getRandomIndex();
  let gubbins2Index = getRandomIndex();
  let gubbins3Index = getRandomIndex();

  while (
    gubbins1Index === gubbins2Index ||
    gubbins1Index === gubbins3Index ||
    gubbins2Index === gubbins3Index
  ) {
    (gubbins2Index = getRandomIndex()), (gubbins3Index = getRandomIndex());
  }

  image1.src = allGubbins[gubbins1Index].src;
  image2.src = allGubbins[gubbins2Index].src;
  image3.src = allGubbins[gubbins3Index].src;
  image1.alt = allGubbins[gubbins1Index].name;
  image2.alt = allGubbins[gubbins2Index].name;
  image3.alt = allGubbins[gubbins3Index].name;

  allGubbins[gubbins1Index].views++;
  allGubbins[gubbins2Index].views++;
  allGubbins[gubbins3Index].views++;
}

function handleGubbinsClick(event) {
  let clickedGubbins = event.target.alt;
  if (event.target === gubbinsContainer) {
    alert("Click on the pictures!");
  } else {
    renderGubbins();
  }
  for (let i = 0; i < allGubbins.length; i++) {
    if (clickedGubbins === allGubbins[i].name) {
      allGubbins[i].clicks++;
      break;
    }
  }
}
const allGubbins = [
  new Gubbins("bag.jpg", "./img/bag.jpg"),
  new Gubbins("banana", "./img/banana.jpg"),
  new Gubbins("bathroom", "./img/bathroom.jpg"),
  new Gubbins("boots", "./img/boots.jpg"),
  new Gubbins("breakfast", "./img/breakfast.jpg"),
  new Gubbins("bubblegum", "./img/bubblegum.jpg"),
  new Gubbins("chair", "./img/chair.jpg"),
  new Gubbins("cthulhu", "./img/cthulhu.jpg"),
  new Gubbins("dog-duck", "./img/dog-duck.jpg"),
  new Gubbins("dragon", "./img/dragon.jpg"),
  new Gubbins("pen", "./img/pen.jpg"),
  new Gubbins("pet-sweep", "./img/pet-sweep.jpg"),
  new Gubbins("scissors", "./img/scissors.jpg"),
  new Gubbins("shark", "./img/shark.jpg"),
  new Gubbins("sweep", "./img/sweep.png"),
  new Gubbins("tauntaun", "./img/tauntaun.jpg"),
  new Gubbins("unicorn", "./img/unicorn.jpg"),
  new Gubbins("water-can", "./img/water-can.jpg"),
  new Gubbins("wine-glass", "./img/wine-glass.jpg"),
];
gubbinsContainer.addEventListener("click", handleGubbinsClick);

renderGubbins();
