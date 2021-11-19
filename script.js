const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerMenu = document.querySelector('.menu__mobile');
const desktopMenu = document.querySelector('.menu__desktop');
const productBtn = document.getElementById('productBtn');
const companyBtn = document.getElementById('companyBtn');
const connectBtn = document.getElementById('connectBtn');

function showDropdown(mouseTarget, modifier) {
  if (mouseTarget.localName === 'button') {
    mouseTarget.nextElementSibling.classList.toggle(`menu__dropdown--${modifier}`);
    mouseTarget.classList.toggle('clicked');
  }
}

document.onclick = function(evt) {
  const mouseTarget = evt.target;

  // Detect click outside mobile menu
  if (!hamburgerMenu.classList.contains('menu__mobile--hidden')) {
      console.log(hamburgerMenu.contains(mouseTarget));
    if (
      !hamburgerMenu.contains(mouseTarget) &&
      mouseTarget.id !== 'hamburgerBtn'
    ) {
      hamburgerMenu.classList.toggle('menu__mobile--hidden');
    }
  }

  // Detect click outside desktop menu
  if (
    desktopMenu.outerHTML.includes('menu__dropdown--active') &&
    mouseTarget.localName !== 'button'
  ) {
    const activeDropdown = document.querySelector('.menu__dropdown--active');
    const activeBtn = document.querySelector('.clicked');

    activeDropdown.classList.toggle('menu__dropdown--active');
    activeBtn.classList.toggle('clicked');
  }
}

hamburgerBtn.onclick = function() {
  hamburgerMenu.classList.toggle('menu__mobile--hidden');
}

hamburgerMenu.onclick = function(evt) {
  showDropdown(evt.target, 'hidden');
}

desktopMenu.onclick = function(evt) {
  const mouseTarget = evt.target;

  if (mouseTarget.localName === 'button') {
    if (
      document.querySelector('.menu__dropdown--active') &&
      mouseTarget !== document.querySelector('.menu__dropdown--active').previousElementSibling
  ) {
      const activeDropdown = document.querySelector('.menu__dropdown--active');

      activeDropdown.classList.toggle('menu__dropdown--active');
      activeDropdown.previousElementSibling.classList.toggle('clicked');
    }
    mouseTarget.nextElementSibling.classList.toggle('menu__dropdown--active');
    mouseTarget.classList.toggle('clicked');
  }
}
