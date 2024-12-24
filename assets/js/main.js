/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    // Check if both toggle and nav exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show'); // Toggle the 'show' class for the menu
        });
    }
};

// Initialize the mobile menu toggle
showMenu('nav-toggle', 'nav-menu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // Remove 'active' class from all links
    navLink.forEach(n => n.classList.remove('active'));
    
    // Add 'active' class to the clicked link
    this.classList.add('active');
    
    // Hide the mobile menu after clicking a link
    const navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show'); // Remove 'show' class after selection
    }
}

// Add click event listener to each navigation link
navLink.forEach(n => n.addEventListener('click', linkAction));
