var prev = document.querySelector(".popular-items__btn--left");
var next = document.querySelector(".popular-items__btn--right");

var itemsContainer = document.querySelector(".popular-items__card-container");

var sliderCount = itemsContainer.children.length;

var width = 300;
var count = 1;

var listElems = itemsContainer.querySelectorAll('li');

var position = 0;

prev.onclick = function() {
  position = Math.min(position + width * count, 0);
  itemsContainer.style.marginLeft = position + 'px';
};

next.onclick = function() {
  position = Math.max(position - width * count, -width * (listElems.length - count));
  itemsContainer.style.marginLeft = position + 'px';
};
