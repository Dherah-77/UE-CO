const styleImages = [
  "./Images/BAG2-scaled.jpg",
  "./Images/imana-sLD5bnqTuY8-unsplash.jpg",
  "./Images/shreesha-bhat-lz6z9GZu8hk-unsplash.jpg",
  "./Images/kingsley-osei-abrah-fmuCylX5NKA-unsplash.jpg",
  "./Images/prince-akachi-LWkFHEGpleE-unsplash.jpg",
];
let currentIndex = 0;
const styleImageElement = document.getElementById("carImage");

setInterval(() => {
  currentIndex = (currentIndex + 1) % styleImages.length;
  styleImageElement.src = styleImages[currentIndex];
}, 4000);
