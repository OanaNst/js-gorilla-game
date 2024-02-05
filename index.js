// The state of the game
let state = {};

// The main canvas element and its drawing context
const canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

newGame();

function newGame() {
  // Reset game state
  state = {
    phase: "aiming", //aiming || in flight || celebrating
    currentPlayer: 1,
    bomb: {
      x: undefined,
      y: undefined,
      rotation: 0,
      velocity: { x: 0, y: 0 },
    },

    // Building
    backgroundBuildings: [],
    buildings: [],
    blastHoles: [],
  };

  // Generate background buildings
  for (let i = 0; i < 22; i++) {
    generateBackgroundBuilding(i);
  }

  // Generate building
  for (let i = 0; i < 8; i++) {
    generateBuilding(i);
  }

  initializeBombPosition();

  draw();
}

function generateBackgroundBuilding(index) {
  const previousBuilding = state.backgroundBuildings[index - 1];
  const x = previousBuilding
    ? previousBuilding.x + previousBuilding.width + 4
    : -30;

  const minWidth = 80;
  const maxWidth = 150;
  const width = minWidth + Math.random() * (maxWidth - minWidth);

  const minHeight = 400;
  const maxHeight = 650;
  const height = minHeight + Math.random() * (maxHeight - minHeight);

  state.backgroundBuildings.push({ x, width, height });
}
function generateBuilding(index) {}
function initializeBombPosition() {}

function draw() {
  ctx.save();

  // Flip coordinate system upside down
  ctx.translate(0, window.innerHeight);
  ctx.scale(1, -1);

  // Draw scene
  drawBackground();
  drawBackgroundBuildings();
  drawBuildings();
  drawGorilla(1);
  drawGorilla(2);
  drawBomb();

  // Restore transformation
  ctx.restore();
}

function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
  gradient.addColorStop(1, "#F8BA85");
  gradient.addColorStop(0, "#FFC28E");

  //Draw sky
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  //Draw moon
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.beginPath();
  ctx.arc(300, 900, 60, 0, 2 * Math.PI);
  ctx.fill();
}

function drawBackgroundBuildings() {
  state.backgroundBuildings.forEach((building) => {
    ctx.fillStyle = "#947285";
    ctx.fillRect(building.x, 0, building.width, building.height);
  });
}

// Event handlers

function throwBomb() {}

function animate(timestamp) {}
