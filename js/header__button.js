document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header-nav-button').addEventListener('click', function() {
      var sound = document.querySelector('.sound');
      sound.play();
    });
  });