
window.onscroll = function() {stickyNav()};

const navbar = document.getElementById("navbar");

const sticky = navbar.offsetTop;

const stickyness = 'App-nav-sticky'

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add(stickyness)
  } else {
    navbar.classList.remove(stickyness);
  }
}
