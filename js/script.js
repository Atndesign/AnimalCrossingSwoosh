let imgContainer = document.getElementById("image-container");
let transitionBars = document.querySelectorAll(".transition-bar");

let delay = 0;
let delayToAdd = 0.2;
let delayList = [];
let img = 3;
let images = [
  "https://www.actugaming.net/wp-content/uploads/2019/09/animal-crossing-new-horizons-10.jpg",
  "https://www.actugaming.net/wp-content/uploads/2019/09/animal-crossing-new-horizons-11.jpg",
  "https://www.actugaming.net/wp-content/uploads/2019/09/animal-crossing-new-horizons-13.jpg",
];

function transition() {
  transitionBars.forEach((transitionBar) => {
    transitionBar.style.transform = "translateY(-2000px)";
    transitionBar.style.transitionDelay = `${delay}s`;
    delay += delayToAdd;
    delayList.push(delay);

    setTimeout(() => {
      imgContainer.style.backgroundImage = `url(${images[img]})`;
      transitionBar.style.transform = "translateY(4000px)";
    }, 3500);
  });
  setTimeout(() => {
    delay = 0;
    console.log(img >= images.length);
    console.log(img + 1, images.length);
    if (img + 1 >= images.length) {
      img = 0;
    } else {
      img += 1;
    }
    transition();
  }, 12000);
}

transition();
