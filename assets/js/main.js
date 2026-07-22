document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('mobile-nav--open');
      toggle.classList.toggle('menu-toggle--active');
      document.body.classList.toggle('body--menu-open', isOpen);
    });
  }
});
