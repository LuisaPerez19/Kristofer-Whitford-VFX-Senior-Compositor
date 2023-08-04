const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");

var sectionIndex = 0;

function setIndex() {
  document.querySelector(".controls .selected").classList.remove("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  indicatorParents.children[sectionIndex].classList.add("selected");
}

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    setIndex();
  });
});

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  setIndex();
});

rightArrow.addEventListener("click", function () {
  if (sectionIndex === 3) {
    sectionIndex = 0;
  } else {
    sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  }
  setIndex();
});
