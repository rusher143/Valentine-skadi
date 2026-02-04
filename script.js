const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// Переход на страницу "Ja"
yesBtn.addEventListener("click", () => {
  window.location.href = "yes_page.html";
});

// Кнопка "Nein" убегает при наведении
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
