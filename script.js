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

// Sliding Images

const track = document.getElementById("track");

const gap = 16; // Tailwind gap-4 = 16px
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
    track.offsetHeight; // force repaint
  }, move);
}

setInterval(slide, pause + move);
