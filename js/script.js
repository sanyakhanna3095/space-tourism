// Select the menu icon, close icon, and navigation items
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('closeIcon');
const navItems = document.getElementById('mobile-navbar');

// Open side navbar when menu icon is clicked
menuIcon.addEventListener('click', (event) => {
    event.preventDefault();
  navItems.classList.add('active');
});

// Close side navbar when close icon is clicked
closeIcon.addEventListener('click', (event) => {
    event.preventDefault();
  navItems.classList.remove('active');
});

// // Get the current path from the URL
// const currentPath = window.location.pathname;

// // Select all navigation links
// const navLinks = document.querySelectorAll('.nav-link');

// // Loop through links and add the 'active' class to the matching link
// navLinks.forEach(link => {
//   if (link.getAttribute('href') === currentPath) {
//     link.classList.add('active');
//   } else {
//     link.classList.remove('active'); // Ensure others do not have the active class
//   }
// });
