function setup() {
  createCanvas(windowWidth, windowHeight);
}

let olhoX;
let olhoY;

function draw() {
  background("#FF0033");

  // posição central do rosto
  let rostoX = width / 2;
  let rostoY = height / 2;

  fill("#FF9999");
  circle(rostoX, rostoY, 300); // rosto

  fill("white");
  circle(rostoX - 50, rostoY - 50, 60); // olho esquerdo
  circle(rostoX + 50, rostoY - 50, 60); // olho direito

  line(rostoX - 50, rostoY + 70, rostoX + 50, rostoY + 35); // boca

  fill("#FF6666");
  triangle(rostoX, rostoY - 20, rostoX - 30, rostoY + 20, rostoX + 20, rostoY + 20); // nariz

  line(rostoX - 77, rostoY - 85, rostoX - 22, rostoY - 87); // sobrancelha esquerda
  line(rostoX + 25, rostoY - 84, rostoX + 79, rostoY - 94); // sobrancelha direita

  // pupilas que acompanham o mouse
  olhoX = map(mouseX, 0, width, rostoX - 70, rostoX - 30);
  olhoY = map(mouseY, 0, height, rostoY - 70, rostoY - 30);

  fill("#FF0033");
  circle(olhoX, olhoY, 10); // pupila esquerda
  circle(olhoX + 100, olhoY, 10); // pupila direita

  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
