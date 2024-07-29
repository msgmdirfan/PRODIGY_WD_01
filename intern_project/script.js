window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.8)';
    } else {
      navbar.style.backgroundColor = '#333';
    }
  });
  