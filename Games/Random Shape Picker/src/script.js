const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const renderMenuInterval = 4000;

let shapesArray = ["Triangle", "Circle", "Square"];
let colorsArray = ["Verde", "Vermelho", "Azul", "Rosa"];

colorsObject = {
  Verde: {
    name: "Verde",
    color: "#14532d",
  },
  Vermelho: {
    name: "",
    color: "",
  },
  Azul: {
    name: "",
    color: "",
  },
  Rosa: {
    name: "",
    color: "",
  },
};

drawTriangle = (x, y, size) => {
  ctx.beginPath();
  ctx.moveTo(x, y); // Ponto superior
  ctx.lineTo(x - size, y + size); // Ponto inferior esquerdo
  ctx.lineTo(x + size, y + size); // Ponto inferior direito
  ctx.closePath();
  ctx.fillStyle = "red"; // Cor do triângulo
  ctx.fill();
};

drawCircle = (x, y, radius) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2); // Desenha o círculo
  ctx.fillStyle = "blue"; // Cor do círculo
  ctx.fill();
};

drawSquare = (x, y, size) => {
  ctx.fillStyle = "green"; // Cor do quadrado
  ctx.fillRect(x - size / 2, y - size / 2, size, size); // Desenha o quadrado centrado
};

drawShapesRandomly = () => {
  const size = 50; // Tamanho padrão para triângulo e quadrado
  const radius = 25; // Raio do círculo

  // Gera posições aleatórias
  const triangleX = Math.random() * (canvas.width - size); // Evita que o triângulo saia do canvas
  const triangleY = Math.random() * (canvas.height - size);
  const circleX = Math.random() * (canvas.width - radius); // Evita que o círculo saia do canvas
  const circleY = Math.random() * (canvas.height - radius);
  const squareX = Math.random() * (canvas.width - size); // Evita que o quadrado saia do canvas
  const squareY = Math.random() * (canvas.height - size);

  // Desenha as formas nas posições aleatórias
  drawTriangle(triangleX, triangleY, size);
  drawCircle(circleX, circleY, radius);
  drawSquare(squareX, squareY, size);
};

changeShapeText = () => {
  const pickShapesText = document.getElementById("shapes");
  const randomShapesIndiceGenerator = Math.floor(
    Math.random() * shapesArray.length
  );
  pickShapesText.textContent = shapesArray[randomShapesIndiceGenerator];
};

changeColorText = () => {
  const pickColorsText = document.getElementById("color");
  const randomColorsIndiceGenerator = Math.floor(
    Math.random() * colorsArray.length
  );
  pickColorsText.textContent = colorsArray[randomColorsIndiceGenerator];
};

// loops = () => {
//   setInterval(changeShapeText, renderMenuInterval);
//   setInterval(changeColorText, renderMenuInterval);
//   setInterval(drawShapesRandomly, renderMenuInterval);
// };

// setInterval(loops, renderMenuInterval);
