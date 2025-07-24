//shhhhh
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
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (doNotClick) {
    doNotClick.addEventListener("click", (e) => {
      e.preventDefault();
      triggerEasterEgg();
    });
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
  }
  
  const animatedElements = document.querySelectorAll('.animate-on-load');
  animatedElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('show-on-load');
    }, index * 200); 
  });

if (modeToggle) {
  // Local storage 😼
  const savedMode = localStorage.getItem('theme');
  if (savedMode === 'light') {
    document.body.classList.add('light-mode');
    modeToggle.textContent = '☀️';
  } else {
    modeToggle.textContent = '🌙';
  }

  modeToggle.addEventListener('click', () => {
    const body = document.body;

    body.classList.add('fade-out');

    setTimeout(() => {
      body.classList.toggle('light-mode');

      const isLight = body.classList.contains('light-mode');
      modeToggle.textContent = isLight ? '☀️' : '🌙';
      localStorage.setItem('theme', isLight ? 'light' : 'dark');

      body.classList.remove('fade-out');
      body.classList.add('fade-in');

      setTimeout(() => {
        body.classList.remove('fade-in');
      }, 400);
    }, 300);
  });
}

});
