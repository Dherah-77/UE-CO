// Image change
const styleImages = [
  "./Images/BAG2-scaled.jpg",
  "./Images/Gallery2.jpg",
  "./Images/gallery6.jpeg",
  "./Images/Gallery11.jpg",
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

// Form
function openModal(service) {
  const modal = document.getElementById("consultationModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  if (service) {
    document.getElementById("serviceSelect").value = service;
  }
}

function closeModal() {
  const modal = document.getElementById("consultationModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function handleContactMode(value) {
  const phoneInput = document.getElementById("phoneField");

  if (value === "Phone") {
    phoneInput.classList.remove("hidden");
    phoneInput.required = true;
  } else {
    phoneInput.classList.add("hidden");
    phoneInput.required = false;
    phoneInput.value = "";
  }
}
