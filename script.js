//SHHHHHHHHH DO NOT TELL ANYONE ABOUT THE FIRST FUNCTION!

function triggerEasterEgg() {
  alert("You were warned... 😼");
  document.body.style.transition = "all 0.5s ease";
  document.body.style.background = "#ff69b4";
  document.body.style.color = "#000";

  const heading = document.querySelector("h1");
  if (heading) heading.textContent = "You clicked it. There's no going back. :3";
}

document.addEventListener("DOMContentLoaded", () => {
  const doNotClick = document.getElementById("doNotClick");
  if (doNotClick) {
    doNotClick.addEventListener("click", (e) => {
      e.preventDefault();
      triggerEasterEgg();
    });
  }
});
