window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var button = document.getElementById('topMenu');
    if (scrollTop > button.offsetTop) {
      document.querySelector('.menu').classList.add('visible');
    } else {
      document.querySelector('.menu').classList.remove('visible');
    }
});