const barsContainer = document.getElementById("bars");
const statusText = document.getElementById("status");
const modal = document.getElementById("modal");
const blurWrapper = document.getElementById("blurWrapper");
const inputs = document.querySelectorAll(".inputs input");

let values = [];
const SPEED = 240;

/* 🔊 Beep system */
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function beep(freq = 400, duration = 0.08) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.frequency.value = freq;
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
}

/* Render bars */
function renderBars(showValues = true) {
  barsContainer.innerHTML = "";
  values.forEach(v => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${v}px`;

    if (showValues) {
      const span = document.createElement("span");
      span.textContent = v;
      bar.appendChild(span);
    }

    barsContainer.appendChild(bar);
  });
}

/* Random bars if nothing set */
function randomizeValues() {
  values = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 250) + 60
  );
  renderBars(true);
}

/* Sorting */
async function insertionSort(asc = true) {
  const bars = document.querySelectorAll(".bar");
  statusText.textContent = "*Arranging*";

  // hide values during sorting
  bars.forEach(bar => bar.innerHTML = "");

  for (let i = 1; i < values.length; i++) {
    let key = values[i];
    let j = i - 1;

    while (j >= 0 && (asc ? values[j] > key : values[j] < key)) {
      values[j + 1] = values[j];
      bars[j + 1].style.height = `${values[j]}px`;
      beep(350);
      await sleep(SPEED);
      j--;
    }

    values[j + 1] = key;
    bars[j + 1].style.height = `${key}px`;
    beep(600);
    await sleep(SPEED);
  }

    renderBars(true);
    statusText.textContent = "*Done, please select for more arrangement*";

    beep(700);
    setTimeout(() => beep(700), 120);
    setTimeout(() => beep(700), 240);

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* Modal controls */
document.getElementById("generate").onclick = () => {
  modal.style.display = "flex";
  blurWrapper.classList.add("blur");
};

document.getElementById("done").onclick = () => {
    values = [...inputs].map(i => {
    let val = i.value ? Number(i.value) : Math.floor(Math.random() * 250) + 60;
    return Math.min(val, 300);
});



  modal.style.display = "none";
  blurWrapper.classList.remove("blur");
  renderBars(true);
  statusText.textContent = "*Please start*";
};

document.getElementById("random").onclick = () => {
  inputs.forEach(i => {
    i.value = Math.floor(Math.random() * 250) + 60;
  });
};

/* Sort buttons */
document.getElementById("sortAsc").onclick = () => insertionSort(true);
document.getElementById("sortDesc").onclick = () => insertionSort(false);

/* Initial load */
randomizeValues();
