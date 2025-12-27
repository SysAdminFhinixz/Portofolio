const nav = document.getElementById('nav');

window.addEventListener('scroll', function(){
    scrollposition = window.scrollY;

    if ( scrollposition >=60 ) {
        nav.classList.add('nav-dark')
    } else if (scrollposition <= 60 ) {
        nav.classList.remove('nav-dark')
    }
})

/* === AUTO CLOSE NAVBAR SAAT LINK DIKLIK === */
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  });
});
