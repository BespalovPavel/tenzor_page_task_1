const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("leadForm");

openBtn.onclick = () => modal.classList.add("active");
closeBtn.onclick = () => modal.classList.remove("active");

window.onclick = (e) => {
  if (e.target === modal) modal.classList.remove("active");
};

form.onsubmit = (e) => {
  e.preventDefault();
  alert("Заявка отправлена!");
  form.reset();
  modal.classList.remove("active");
};

const dropdown = document.getElementById("dropdown");
const dropdownBtn = dropdown.querySelector(".dropdown-btn");
const options = dropdown.querySelectorAll("li");
const cards = document.querySelectorAll(".card");

dropdownBtn.onclick = (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("open");
};

document.addEventListener("click", () => dropdown.classList.remove("open"));

options.forEach((item) => {
  item.onclick = () => {
    options.forEach((el) => el.classList.remove("selected"));
    item.classList.add("selected");

    dropdownBtn.textContent = item.textContent;
    const selectedLevel = item.dataset.level;

    cards.forEach((card) => {
      if (selectedLevel === "all" || card.dataset.level === selectedLevel) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };
});
