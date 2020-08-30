const slides = [
  {
    img: "./img/beach.jpg",
    text: "The sea is blue",
  },
  {
    img: "./img/farm.jpg",
    text: "View over the vineyard",
  },
  {
    img: "./img/field.jpg",
    text: "Tuscan hillside",
  },
  {
    img: "./img/river.jpg",
    text: "Welcome to Florence",
  },
];

let currentIndex = 0;

//slideshow
function slideShow() {
  document.querySelector("img").src = slides[currentIndex].img;
  document.querySelector("p span").innerText = slides[currentIndex].text;
  document.querySelector("p span").classList.add("active");
  // document.querySelector("p span").classList.remove("active");
  currentIndex++;
  if (currentIndex == slides.length) {
    currentIndex = 0;
  }
  //document.querySelector("p span").classList.remove("active");
  setTimeout(slideShow, 3 * 1000);
}
slideShow();

//arrow selector
const left = document.querySelector("#left");
const right = document.querySelector("#right");

right.addEventListener("click", () => {
  document.querySelector("img").src = slides[currentIndex].img; //assign the image element a new image source
  document.querySelector(".img-title").innerText = slides[currentIndex].text; //assigning the p element a new innertext

  // currentIndex is used to keep track of the current image being displayed
  currentIndex++; //increments the currentIndex value so the image element will display a different image
  console.log(currentIndex);
  for (let i = 0; i < slides.lenght; i++) {
    //go through the lenght of the array
    slides[i] = currentIndex; // moto indee]x is = to currentIndex which keeps incrementing
  }
  if (currentIndex == slides.length) {
    // and when it gets to the end of the array...
    currentIndex = 0; // starts counting again from the beginning of the array.
  }
  document.querySelector("p span").classList.add("active");
});

left.addEventListener("click", () => {
  document.querySelector("img").src = slides[currentIndex].img; //assign the image element a new image source
  document.querySelector(".img-title").innerText = slides[currentIndex].text; //assigning the p element a new innertext
  // currentIndex is used to keep track of the current image being displayed
  console.log(currentIndex);
  if (currentIndex <= 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex--;
  }
});

console.log(slides.length);
//selecting the buttons

const buttons = document.querySelectorAll(".buttons span");
console.log(buttons);

const singleButton = [...buttons]; //spread operator
console.log(singleButton);

singleButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    document.querySelector("img").src = slides[index].img;
    document.querySelector(".img-title").innerText = slides[index].text;
  });
});
