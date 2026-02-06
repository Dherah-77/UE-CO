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

// Vission & Mission
// VISION
const visDown = document.getElementById("visangdn");
const visUp = document.getElementById("visangup");
const visMess = document.getElementById("vismess");

if (visDown && visUp && visMess) {
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
}

// MISSION
const missDown = document.getElementById("missangdn");
const missUp = document.getElementById("missangup");
const missMess = document.getElementById("missmess");

if (missDown && missUp && missMess) {
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
}

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

// HOME MODAL
const modal = document.getElementById("leadModal");

window.openHomeModal = function () {
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
};

window.closeHomeModal = function () {
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
};

//  SHOW ON EVERY PAGE LOAD
if (modal) {
  window.addEventListener("load", () => {
    setTimeout(openHomeModal, 1500);
  });
}

// Service Form
function openServiceModal(button, service = null) {
  const modal = button.closest("section").querySelector(".consultationModal");

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  if (service) {
    modal.querySelector(".serviceSelect").value = service;
  }
}

function closeServiceModal(button) {
  const modal = button.closest(".consultationModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function handleContactMode(select) {
  const modal = select.closest(".consultationModal");
  const phoneInput = modal.querySelector(".phoneField");

  if (select.value === "Phone") {
    phoneInput.classList.remove("hidden");
    phoneInput.required = true;
  } else {
    phoneInput.classList.add("hidden");
    phoneInput.required = false;
    phoneInput.value = "";
  }
}
