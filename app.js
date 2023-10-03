const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

let userClicks = 0;
let maxClicks = 25;

// let gubbinsContainer = document.querySelector("section");
// let image1 = document.querySelector("section img:first-child");
// let image2 = document.querySelector("section img:nth-child(2)");
// let image3 = document.querySelector("section img:nth-child(3)");

function Gubbin(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

const gubbins = [
  new Gubbin("bag.jpg", "./img/bag.jpg"),
  new Gubbin("banana", "./img/banana.jpg"),
  new Gubbin("bathroom", "./img/bathroom.jpg"),
  new Gubbin("boots", "./img/boots.jpg"),
  new Gubbin("breakfast", "./img/breakfast.jpg"),
  new Gubbin("bubblegum", "./img/bubblegum.jpg"),
  new Gubbin("chair", "./img/chair.jpg"),
  new Gubbin("cthulhu", "./img/cthulhu.jpg"),
  new Gubbin("dog-duck", "./img/dog-duck.jpg"),
  new Gubbin("dragon", "./img/dragon.jpg"),
  new Gubbin("pen", "./img/pen.jpg"),
  new Gubbin("pet-sweep", "./img/pet-sweep.jpg"),
  new Gubbin("scissors", "./img/scissors.jpg"),
  new Gubbin("shark", "./img/shark.jpg"),
  new Gubbin("sweep", "./img/sweep.png"),
  new Gubbin("tauntaun", "./img/tauntaun.jpg"),
  new Gubbin("unicorn", "./img/unicorn.jpg"),
  new Gubbin("water-can", "./img/water-can.jpg"),
  new Gubbin("wine-glass", "./img/wine-glass.jpg"),
];

function getRandomIndex() {
  return Math.floor(Math.random() * gubbins.length);
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

  image1.src = gubbins[gubbins1Index].src;
  image2.src = gubbins[gubbins2Index].src;
  image3.src = gubbins[gubbins3Index].src;
  image1.alt = gubbins[gubbins1Index].name;
  image2.alt = gubbins[gubbins2Index].name;
  image3.alt = gubbins[gubbins3Index].name;

  gubbins[gubbins1Index].views++;
  gubbins[gubbins2Index].views++;
  gubbins[gubbins3Index].views++;
}

function handleImageClick(event) {
  if (userClicks === maxClicks) {
    alert("You're out of votes!");
    return;
  }
  userClicks++;

  let clickedGubbin = event.target.alt;

  for (let i = 0; i < gubbins.length; i++) {
    if (clickedGubbin === gubbins[i].name) {
      gubbins[i].clicks++;
      break;
    }
  }
  renderGubbins();
}

// gubbinsContainer.addEventListener("click", handleGubbinsClick);

image1.addEventListener("click", handleImageClick);
image2.addEventListener("click", handleImageClick);
image3.addEventListener("click", handleImageClick);

function showResults() {
  const results = document.getElementById("results");

  for (let i = 0; i < gubbins.length; i++) {
    const li = document.createElement("li");
    const gubbin = gubbins[i];
    li.textContent = `${gubbin.name} was viewed ${gubbin.views} times, and clicked ${gubbin.clicks} times`;
    results.appendChild(li);
  }
}
const viewResults = document.getElementById("view-results");
viewResults.addEventListener("click", showResults);

renderGubbins();
