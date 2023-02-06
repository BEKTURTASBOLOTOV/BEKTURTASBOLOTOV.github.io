const overlay = document.querySelector(".overlay");
const btnOpen = document.querySelector(".hero__btn");
const close = document.querySelector(".close");

function modalToggler(el) {
  el.classList.toggle("hidden");
}

btnOpen.addEventListener("click", () => {
  modalToggler(overlay);
});

close.addEventListener("click", () => {
  modalToggler(overlay);
});

overlay.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    modalToggler(overlay);
  }
});
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/BEKTURTASBOLOTOV/webStudio.git
// git push
