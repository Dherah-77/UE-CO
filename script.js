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

const slideWidth = 240 + 16; // w-60 (240px) + gap-4 (16px)
const pause = 3000; // 1.8 seconds pause
const move = 1500; // slide duration

function slide() {
  track.style.transform = `translateX(-${slideWidth}px)`;

  setTimeout(() => {
    track.appendChild(track.firstElementChild);
    track.style.transition = "none";
    track.style.transform = "translateX(0)";
    track.offsetHeight; // force repaint
    track.style.transition = "transform 1s ease-in-out";
  }, move);
}

setInterval(slide, pause + move);
