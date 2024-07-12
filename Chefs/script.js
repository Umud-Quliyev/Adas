window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const goTopButton = document.createElement("button");
  goTopButton.className = "go-top";
  goTopButton.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  document.body.appendChild(goTopButton);

  window.onscroll = () => {
    goTopButton.style.display = window.scrollY > 200 ? "block" : "none";
  };

  goTopButton.onclick = () => {
    const startY = window.scrollY,
      duration = 300,
      startTime = performance.now();

    function animateScroll() {
      const elapsed = performance.now() - startTime,
        progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY * (1 - progress));
      if (progress < 1) requestAnimationFrame(animateScroll);
    }

    animateScroll();
  };
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navigation");

  const handleClick = () => {
    hamburger.classList.toggle("hamburger--active");
    nav.classList.toggle("navigation--active");
  };

  hamburger.addEventListener("click", handleClick);
});

