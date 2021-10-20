let cancelButton = document.querySelector(".cancel-btn");
let ghost = document.querySelector(".ghost");
let pityCount = 0;

let words = [
  "Essaie ENCORE !",
  "T'y étais presque...",
  "Nop ! ",
  "Pas asser rapide Jacky !",
  "Mince ! ça c'est joué à 3px",
 
  "C'est la piquette Jack ! Tu sais pas jouer Jack ! T'es mauvais !"
];

function runAway(e) {
  ghost.classList.add("appear");
  document.body.style = `background: #212121;
                color: red;`;
  event.stopPropagation();
  pityCount += 1;

  if (pityCount < 20) {
    cancelButton.innerText = words[Math.floor(Math.random() * (6 - 0) + 0)];
    ghost.style = `transform: translate(${
      Math.random() * (40 - -40) + -40
    }vw, ${Math.random() * (40 - -40) + -40}vh);`;
  } else {
    cancelButton.innerText = "Azy t'es naze, 'me casse";
    ghost.style = "opacity: 0;";
  }
}

cancelButton.addEventListener("mouseover", (e) => runAway(e));
