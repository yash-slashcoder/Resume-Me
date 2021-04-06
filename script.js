var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
for (let index = 0; index < navMenuAnchorTags.length; index++) {
  navMenuAnchorTags[index].addEventListener('click', function (e) {
    e.preventDefault();
    var targetSectionId = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionId);
    interval = setInterval(
      scrollVertically,
      20,
      targetSection,
      targetSectionId
    );
  });
}

function scrollVertically(targetSection, targetSectionId) {
  var targetCoordinates = targetSection.getBoundingClientRect();
  if (targetSectionId == 'contact') {
    if (targetCoordinates.top <= 100) {
      clearInterval(interval);
      return;
    }
  }
  if (targetCoordinates.top <= 50) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}

var progressBars = document.querySelectorAll('.range > div');
var targetSection = document.getElementById('skills');
var contactSection = document.getElementById('contact');
var animationDone = false;
var contactAnimation = false;

function intializeBars() {
  for (let bar of progressBars) {
    bar.style.width = 0 + '%';
  }
}

function fillBars() {
  for (let bar of progressBars) {
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;
    let interval = setInterval(function () {
      if (currentWidth > targetWidth) {
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + '%';
    }, 3);
  }
}

intializeBars();
window.addEventListener('scroll', checkScroll);

function checkScroll() {
  var coordinates = targetSection.getBoundingClientRect();
  if (!animationDone && coordinates.top < window.innerHeight) {
    animationDone = true;
    fillBars();
  } else if (coordinates.top > window.innerHeight) {
    animationDone = false;
    intializeBars();
  }

  var contactCoOrinate = contactSection.getBoundingClientRect();
  if (!contactAnimation && contactCoOrinate.top < window.innerHeight) {
    contactAnimation = true;
    $('#contact .section-heading span').css({
      animation: 'drawBorderFromCenter 4s ease-in-out',
    });
  } else if (contactCoOrinate.top > window.innerHeight) {
    contactAnimation = false;
    $('#contact .section-heading span').css({
      animation: '',
    });
  }
}
