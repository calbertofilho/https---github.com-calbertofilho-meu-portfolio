// Controle do movimento da iluminação no fundo do Background
const light = document.querySelector(".light");
const grid = document.querySelector(".hex-grid");

grid.addEventListener("mousemove", function(e) {
	light.style.left = `${e.clientX}px`;
	light.style.top = `${e.clientY}px`;
});

// Controle da emulação de digitação
var type = new Typed('.typing-text', {
  strings: [ 'WEB Designer', 'Front-End Developer', 'Graphic Designer' ],
  typeSpeed: 200,
  loop: true
});
