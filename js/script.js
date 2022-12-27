const navigation = document.querySelector('.header-navigation__list');
const navToggle = document.querySelector('.nav-toggle');
const overlay = document.querySelector('.overlay');

const openNav = function () {
  navigation.setAttribute('data-visible', true);
  navToggle.setAttribute('aria-expanded', true);
  overlay.classList.remove('hidden');
};

const closeNav = function () {
  navigation.setAttribute('data-visible', false);
  navToggle.setAttribute('aria-expanded', false);
  overlay.classList.add('hidden');
};

navToggle.addEventListener('click', function () {
  const visibility = navigation.getAttribute('data-visible');

  if (visibility === 'false') {
    openNav();
  } else if (visibility === 'true') {
    closeNav();
  }
});

overlay.addEventListener('click', function () {
  closeNav();
});
