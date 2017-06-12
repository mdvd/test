var catBtn = document.querySelector(".main-nav__menu-categories");
var catMenu = document.querySelector(".menu-categories");
var list1 = document.querySelector(".menu-categories__product-clmn-1");
var list2 = document.querySelector(".menu-categories__product-clmn-2");
var list3 = document.querySelector(".menu-categories__product-clmn-3");
var saleList1 = document.querySelector(".menu-categories__sale-clmn-1");
var saleList2 = document.querySelector(".menu-categories__sale-clmn-2");

catBtn.addEventListener('click',
  function() {
    if (catMenu.classList.contains('menu-categories--show')) {
      catMenu.classList.remove('menu-categories--show');
      removeChildren(list1);
      removeChildren(list2);
      removeChildren(list3);
      removeChildren(saleList1);
      removeChildren(saleList2);
    } else {
      catMenu.classList.add('menu-categories--show');
      loadCategories();
    }
  });

  function removeChildren(elem) {
    while (elem.lastChild) {
      elem.removeChild(elem.lastChild);
    }
  }

function loadCategories() {

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'js/categories.json', true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      // обработать ошибку
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      try {
        var categories = JSON.parse(xhr.responseText);
      } catch (e) {
        alert("Некорректный ответ " + e.message);
      }
      showCategories(categories);
    }

  }

  xhr.send();
}

function showCategories(categories) {
  for (var i = 0; i < categories.length; i++) {
    if ( i >= 0 && i <= 7) {
        var li = list1.appendChild(document.createElement('li'));
        var link = li.appendChild(document.createElement('a'));
        link.href = categories[i].link;
        link.innerHTML = categories[i].name;
    } else if ( i >= 8 && i <= 15 ) {
        var li = list2.appendChild(document.createElement('li'));
        var link = li.appendChild(document.createElement('a'));
        link.href = categories[i].link;
        link.innerHTML = categories[i].name;
    } else if ( i >= 16 && i <= 23 ) {
      var li = list3.appendChild(document.createElement('li'));
      var link = li.appendChild(document.createElement('a'));
      link.href = categories[i].link;
      link.innerHTML = categories[i].name;
    }
  };

  for (var i = 0; i < categories.length; i++) {
    if ( categories[i].sale === "ok") {
      if ( i >= 0 && i <= 7) {
        var li = saleList1.appendChild(document.createElement('li'));
        var link = li.appendChild(document.createElement('a'));
        link.href = categories[i].link;
        link.innerHTML = categories[i].name;
      } else if ( i >= 8 ) {
        var li = saleList2.appendChild(document.createElement('li'));
        var link = li.appendChild(document.createElement('a'));
        link.href = categories[i].link;
        link.innerHTML = categories[i].name;
      }
    }
  };

}
