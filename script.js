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
