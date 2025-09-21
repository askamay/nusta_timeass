const cancelBtn = document.getElementById("cancel");
const yesBtn = document.getElementById("yes");
const celebration = document.getElementById("celebration");
const left = celebration.querySelector(".left");
const right = celebration.querySelector(".right");
const text = celebration.querySelector(".celebration-text");


let hoverCount = 0;

const messages = [
  "Request yaar, aap bahot ziddy ho 😅",
  "Yaar, maan jao na 😜",
  "plzzz yaar, aise na karo 😜",
];

cancelBtn.addEventListener("mouseenter", () => {
  hoverCount++;

  const top = Math.floor(Math.random() * 80) + 10;
  const leftPos = Math.floor(Math.random() * 80) + 10;
  cancelBtn.style.top = top + "%";
  cancelBtn.style.left = leftPos + "%";

  if (hoverCount >= 3 && hoverCount < 6) {
    cancelBtn.textContent = messages[0];
  } else if (hoverCount >= 6 && hoverCount < 9) {
    cancelBtn.textContent = messages[1];
  }else if (hoverCount >= 9 && hoverCount < 12) {
    cancelBtn.textContent = messages[2];
  }
  else{
    cancelBtn.textContent = messages[Math.floor(Math.random() * messages.length)];
  }
});

yesBtn.addEventListener("click", () => {
  celebration.style.pointerEvents = "auto";
  celebration.style.display = "flex";

  left.classList.add("show-left");
  right.classList.add("show-right");
  text.classList.add("show-text");
});
