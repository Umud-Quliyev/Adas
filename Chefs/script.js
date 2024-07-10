var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".right__arrow",
    prevEl: ".left__arrow",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".teamSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".right__arrow",
    prevEl: ".left__arrow",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    922: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

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

