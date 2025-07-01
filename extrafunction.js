let lastScrollY = window.scrollY;
  const header = document.getElementById("mainHeader");

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      header.style.top = "-150px"; // hide on scroll down
    } else {
      header.style.top = "0"; // show on scroll up
    }
    lastScrollY = window.scrollY;
  });

  const text = "Charge your soul with Mushk By Huzaifah";
  const target = document.getElementById("autoTypeText");

  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      target.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50); // speed of typing
    } else {
      target.style.borderRight = "none"; // remove cursor after complete
    }
  }

  window.addEventListener("DOMContentLoaded", typeWriter);
