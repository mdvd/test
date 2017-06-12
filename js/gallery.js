var bigImg = document.getElementById("bigImg");
var smallImg = document.getElementById("listImg");


smallImg.onclick = function(e) {
      var target = e.target;
      hide();
      target.parentNode.style.opacity = 1;
      while (target != this) {

        if (target.nodeName == "A") {
          showThumbnail(target.href, target.title);
          target.parentNode.style.opacity = 1;
          return false;
        }

        target = target.parentNode;
      }

    }

    function showThumbnail(href, title) {
      bigImg.src = href;
      bigImg.alt = title;
    }

    var imgs = smallImg.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
      var url = imgs[i].parentNode.href;
      var img = document.createElement("img");
      img.src = url;
    }

    function hide() {
      var listItems = smallImg.getElementsByTagName("li");

      for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.opacity = 0.5;
      }
    }
