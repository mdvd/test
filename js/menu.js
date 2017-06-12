var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var catMenu = document.querySelector(".menu-categories");

navToggle.addEventListener('click',
  function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
    if (catMenu.classList.contains('menu-categories--show')) {
      catMenu.classList.remove('menu-categories--show');
      removeChildren(list1);
      removeChildren(list2);
      removeChildren(list3);
      removeChildren(saleList1);
      removeChildren(saleList2);
    }
  });
