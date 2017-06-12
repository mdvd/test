var descToggle = document.querySelector(".card-item__desc-select");
var infoToggle = document.querySelector(".card-item__info-select");
var reviewToggle = document.querySelector(".card-item__review-select");

var descText = document.querySelector(".card-item__text-desc");
var infoText = document.querySelector(".card-item__text-info");
var reviewText = document.querySelector(".card-item__text-review");

descToggle.addEventListener("click",
  function() {
    if (descToggle.classList.contains("card-item__desc-nav-item--show")) {

    } else {
      descToggle.classList.add("card-item__desc-nav-item--show");
      isContainsToggle(infoToggle);
      isContainsToggle(reviewToggle);
    }

    if(descText.classList.contains("card-item__text--show")) {

    } else {
      descText.classList.add("card-item__text--show");
      isContainsText(infoText);
      isContainsText(reviewText);
    }

  });

  infoToggle.addEventListener("click",
    function() {
      if (infoToggle.classList.contains("card-item__desc-nav-item--show")) {

      } else {
        infoToggle.classList.add("card-item__desc-nav-item--show");
        isContainsToggle(descToggle);
        isContainsToggle(reviewToggle);
      }

      if(infoText.classList.contains("card-item__text--show")) {

      } else {
        infoText.classList.add("card-item__text--show");
        isContainsText(descText);
        isContainsText(reviewText);
      }

    });

    reviewToggle.addEventListener("click",
      function() {
        if (reviewToggle.classList.contains("card-item__desc-nav-item--show")) {

        } else {
          reviewToggle.classList.add("card-item__desc-nav-item--show");
          isContainsToggle(infoToggle);
          isContainsToggle(descToggle);
        }

        if(reviewText.classList.contains("card-item__text--show")) {

        } else {
          reviewText.classList.add("card-item__text--show");
          isContainsText(infoText);
          isContainsText(descText);
        }
        
      });







  function isContainsToggle(elem) {
    if(elem.classList.contains("card-item__desc-nav-item--show")) {
      elem.classList.remove("card-item__desc-nav-item--show");
    }
  }
  function isContainsText(elem) {
    if(elem.classList.contains("card-item__text--show")) {
      elem.classList.remove("card-item__text--show");
    }
  }
