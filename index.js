window.onload = () => {

  const circulo = document.getElementById("circulo");
  const rectangulo = document.getElementById("rectangulo");
  const rectangulo2 = document.getElementById("rectangulo2");

  let direccionX = 1;
  let direccionY = 1;

  const limiteDerecho = 590;
  const limiteIzquierdo = 10;
  const limiteArriba = 400;
  const limiteAbajo = 10;

  let rectanguloY = parseFloat(rectangulo.getAttribute("y"));
  let rectangulo2Y = parseFloat(rectangulo2.getAttribute("y"));
  const radioCirculo = parseFloat(circulo.getAttribute("r"));

  const velocidadRectangulo = 15;

  function moverCirculo() {
    const x = parseFloat(circulo.getAttribute("cx"));
    const y = parseFloat(circulo.getAttribute("cy"));

    const rectanguloX = parseFloat(rectangulo.getAttribute("x"));
    const rectanguloY = parseFloat(rectangulo.getAttribute("y"));
    const rectanguloAncho = parseFloat(rectangulo.getAttribute("width"));
    const rectanguloAlto = parseFloat(rectangulo.getAttribute("height"));

    const rectangulo2X = parseFloat(rectangulo2.getAttribute("x"));
    const rectangulo2Y = parseFloat(rectangulo2.getAttribute("y"));
    const rectangulo2Ancho = parseFloat(rectangulo2.getAttribute("width"));
    const rectangulo2Alto = parseFloat(rectangulo2.getAttribute("height"));

    if (
      x + radioCirculo >= rectanguloX &&
      x - radioCirculo <= rectanguloX + rectanguloAncho &&
      y + radioCirculo >= rectanguloY &&
      y - radioCirculo <= rectanguloY + rectanguloAlto
    ) {
      if (direccionX === 1) {
        direccionX = -1;
      } else {
        direccionX = 1;
      }
    }

    if (
      x + radioCirculo >= rectangulo2X &&
      x - radioCirculo <= rectangulo2X + rectangulo2Ancho &&
      y + radioCirculo >= rectangulo2Y &&
      y - radioCirculo <= rectangulo2Y + rectangulo2Alto
    ) {
      if (direccionX === 1) {
        direccionX = -1;
      } else {
        direccionX = 1;
      }
    }

    if (direccionX === 1) {
      if (x + radioCirculo < limiteDerecho) {
        circulo.setAttribute("cx", x + 1);
      } else {
        direccionX = -1;
      }
    } else {
      if (x - radioCirculo > limiteIzquierdo) {
        circulo.setAttribute("cx", x - 1);
      } else {
        direccionX = 1;
      }
    }

    if (direccionY === 1) {
      if (y + radioCirculo < limiteArriba) {
        circulo.setAttribute("cy", y + 1);
      } else {
        direccionY = -1;
      }
    } else {
      if (y - radioCirculo > limiteAbajo) {
        circulo.setAttribute("cy", y - 1);
      } else {
        direccionY = 1;
      }
    }
  }

  function moverRectangulo(event) {
    const key = event.key;
    if (key === "w" && rectanguloY > limiteAbajo) {
      rectanguloY -= velocidadRectangulo;
    } else if (key === "s" && rectanguloY + 60 < limiteArriba) {
      rectanguloY += velocidadRectangulo;
    }
    rectangulo.setAttribute("y", rectanguloY);
  }

  function moverRectangulo2(event) {
    const key = event.key;
    if (key === "ArrowUp" && rectangulo2Y > limiteAbajo) {
      rectangulo2Y -= velocidadRectangulo;
    } else if (key === "ArrowDown" && rectangulo2Y + 60 < limiteArriba) {
      rectangulo2Y += velocidadRectangulo;
    }
    rectangulo2.setAttribute("y", rectangulo2Y);
  }

  document.addEventListener("keydown", moverRectangulo);
  document.addEventListener("keydown", moverRectangulo2);
  setInterval(moverCirculo, 0);
};
