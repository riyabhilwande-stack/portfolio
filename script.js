// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Typewriter effect
const words = ["Riya 👋", "a Digital Marketer", "a Storyteller", "a Brand Strategist"];
let i = 0;
let j = 0;
let currentWord = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  document.querySelector(".typewriter").innerHTML = currentWord.join("");

  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord.push(words[i][j]);
      j++;
      document.querySelector(".typewriter").innerHTML = currentWord.join("");
    }

    if (isDeleting && j <= words[i].length) {
      currentWord.pop(words[i][j]);
      j--;
      document.querySelector(".typewriter").innerHTML = currentWord.join("");
    }

    if (j == words[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentWord = [];
      isDeleting = false;
      i++;
      if (i === words.length) {
        i = 0;
      }
    }
  }
  const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
  setTimeout(loop, speed);
}

loop();
