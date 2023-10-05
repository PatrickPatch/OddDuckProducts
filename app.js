const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

let userClicks = 0;
let maxClicks = 25;

const gubbins = [];

function Gubbin(name, views, clicks) {
  this.name = name;
  this.src = `./img/${name}.jpg`;
  this.views = views;
  this.clicks = clicks;

  gubbins.push(this);
}

if (localStorage.getItem("gubbinstorage") === null) {
  new Gubbin("bag", 0, 0);
  new Gubbin("banana", 0, 0);
  new Gubbin("bathroom", 0, 0);
  new Gubbin("boots", 0, 0);
  new Gubbin("breakfast", 0, 0);
  new Gubbin("bubblegum", 0, 0);
  new Gubbin("chair", 0, 0);
  new Gubbin("cthulhu", 0, 0);
  new Gubbin("dog-duck", 0, 0);
  new Gubbin("dragon", 0, 0);
  new Gubbin("pen", 0, 0);
  new Gubbin("pet-sweep", 0, 0);
  new Gubbin("scissors", 0, 0);
  new Gubbin("shark", 0, 0);
  new Gubbin("sweep", 0, 0);
  new Gubbin("tauntaun", 0, 0);
  new Gubbin("unicorn", 0, 0);
  new Gubbin("water-can", 0, 0);
  new Gubbin("wine-glass", 0, 0);
} else {
  const gubbinsLS = JSON.parse(localStorage.getItem("gubbinstorage"));

  for (let i = 0; i < gubbinsLS.length; i++) {
    new Gubbin(gubbinsLS[i].name, gubbinsLS[i].views, gubbinsLS[i].clicks);
  }
}

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

  gubbins[gubbins1Index].views++;
  gubbins[gubbins2Index].views++;
  gubbins[gubbins3Index].views++;

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

    localStorage.setItem("gubbinstorage", JSON.stringify(gubbins));

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
image1.addEventListener("click", handleImageClick);
image2.addEventListener("click", handleImageClick);
image3.addEventListener("click", handleImageClick);

renderGubbins();
