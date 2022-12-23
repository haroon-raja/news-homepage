const navigation = document.querySelector('.header-navigation__list');
const navToggle = document.querySelector('.nav-toggle');
const headerNavigation = document.querySelector('.header-navigation');

navToggle.addEventListener('click', function () {
  const visibility = navigation.getAttribute('data-visible');

  if (visibility === 'false') {
    navigation.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    headerNavigation.classList.add('navigation-bg');
  } else if (visibility === 'true') {
    navigation.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    headerNavigation.classList.remove('navigation-bg');
  }
});
