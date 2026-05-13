// Navbar scroll effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

// Call button interaction
document.getElementById("callBtn").addEventListener("click", (e) => {
  e.preventDefault();
  alert("📞 Wir rufen dich gleich zurück!");
});

// More info button (dynamic text injection)
document.getElementById("moreInfoBtn").addEventListener("click", () => {
  document.querySelector(".half-width p").innerText =
    "🔥 Unser Fitnessstudio bietet moderne Geräte, Personal Trainer und 24/7 Zugang!";
});

// Video button dynamic behavior
document.getElementById("videoBtn").addEventListener("click", () => {
  const text = document.getElementById("videoText");
  text.innerText = "🎥 Video-Modus aktiviert: Motivation läuft!";
  text.style.color = "yellow";
});

// Smooth scroll for menu
document.querySelectorAll(".menu-link").forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
