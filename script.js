// Header animation

const header = document.getElementById("mainHeader");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  // Background change
  if (window.scrollY > 100) {
    header.classList.remove("bg-transparent");
    header.classList.add("bg-[#f7f1e1]", "shadow-lg");
  } else {
    header.classList.add("bg-transparent");
    header.classList.remove("bg-[#f7f1e1]", "shadow-lg");
  }

  // Hide on scroll down, show on scroll up
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    header.style.transform = "translateY(-120%)";
  } else {
    header.style.transform = "translateY(0)";
  }

  lastScrollY = window.scrollY;
});

// Image change
const styleImages = [
  "./Images/BAG2-scaled.jpg",
  "./Images/Gallery2.jpg",
  "./Images/Gallery7.jpg",
  "./Images/Gallery6.jpg",
  "./Images/Bag2.jpg",
  "./Images/Gallery5.jpg",
];
let currentIndex = 0;
const styleImageElement = document.getElementById("carImage");

setInterval(() => {
  currentIndex = (currentIndex + 1) % styleImages.length;
  styleImageElement.src = styleImages[currentIndex];
}, 4000);

// Vission, Mission & Service
// Vission
const visDown = document.getElementById("visangdn");
const visUp = document.getElementById("visangup");
const visMess = document.getElementById("vismess");

visDown.addEventListener("click", () => {
  visDown.classList.add("hidden");
  visUp.classList.remove("hidden");
  visMess.classList.remove("hidden");
});

visUp.addEventListener("click", () => {
  visMess.classList.add("hidden");
  visUp.classList.add("hidden");
  visDown.classList.remove("hidden");
});

// Mission
const missDown = document.getElementById("missangdn");
const missUp = document.getElementById("missangup");
const missMess = document.getElementById("missmess");

missDown.addEventListener("click", () => {
  missDown.classList.add("hidden");
  missUp.classList.remove("hidden");
  missMess.classList.remove("hidden");
});

missUp.addEventListener("click", () => {
  missDown.classList.remove("hidden");
  missUp.classList.add("hidden");
  missMess.classList.add("hidden");
});

// Service
// const serDown = document.getElementById("serangdn");
// const serUp = document.getElementById("serangup");
// const serMess = document.getElementById("sermess");

// serDown.addEventListener("click", () => {
//   serDown.classList.add("hidden");
//   serUp.classList.remove("hidden");
//   serMess.classList.remove("hidden");
// });

// serUp.addEventListener("click", () => {
//   serDown.classList.remove("hidden");
//   serUp.classList.add("hidden");
//   serMess.classList.add("hidden");
// });

// Sliding Images
const track = document.getElementById("track");

const gap = 16;
const pause = 3000;
const move = 1500;

function slide() {
  const firstImage = track.children[0];
  const imageWidth = firstImage.getBoundingClientRect().width;
  const slideWidth = imageWidth + gap;

  track.style.transition = "transform 1.5s ease-in-out";
  track.style.transform = `translateX(-${slideWidth}px)`;

  setTimeout(() => {
    track.style.transition = "none";
    track.appendChild(firstImage);
    track.style.transform = "translateX(0)";
    track.offsetHeight;
  }, move);
}

setInterval(slide, pause + move);

//Forms
function openModal(service) {
  document.getElementById("consultationModal").classList.remove("hidden");
  document.getElementById("consultationModal").classList.add("flex");
  document.getElementById("serviceSelect").value = service;
}

function closeModal() {
  document.getElementById("consultationModal").classList.add("hidden");
  document.getElementById("consultationModal").classList.remove("flex");
}
