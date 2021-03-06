// Navbar Scripts
const navbar = document.querySelector('#navbar');
const navbarToggle = navbar.querySelector('.navbar-toggle');
const navbarMenu = navbar.querySelector('.navbar-menu');
const navbarLinksContainer = navbar.querySelector('.navbar-links');

const openMobileNavbar = () => {
    // Opens closed navbar when called
    navbar.classList.add('opened');
    navbarToggle.setAttribute('aria-label', 'Close navigation menu.');
}

const closeMobileNavbar = () => {
    // Closes opened navbar when called
    navbar.classList.remove('opened');
    navbarToggle.setAttribute('aria-label', 'Open navigation menu.');
}

navbarToggle.addEventListener('click', () => {
    // Toggle the expanded navbar view when on mobile/small screen devices
    if (navbar.classList.contains('opened')) {
        closeMobileNavbar();
    } else {
        openMobileNavbar();
    }
});

navbarLinksContainer.addEventListener('click', (clickEvent) => {
    // Prevents issues caused by errant mouse clicks
    clickEvent.stopPropagation();
});

navbarMenu.addEventListener('click', closeMobileNavbar);

// Random Quote Script
const quotes = [
    '"When we speak without jargon, it frees us from hiding behind knowledge we don’t have."', // ―Richard Feynman
    '"No amount of anxiety makes any difference to anything that is going to happen."', // ―Alan Watts
    '"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."', // ―Linus Torvalds
    '"If you can\'t explain it simply, you don\'t understand it well enough."', // ―Albert Einstein
    '"When you do things right, people won\'t be sure you\'ve done anything at all."', // ―God in Futurama
    '"Never trust a computer you can\'t throw out a window."', // ―Steve Wozniak
];

const welcomeQuote = document.querySelector('#welcome-quote');
// let quoteIndex = Math.floor(Math.random() * quotes.length); // random index number
let quoteIndex = 0;
welcomeQuote.innerText = quotes[quoteIndex];

// Cycle through quotes when quote is clicked
welcomeQuote.addEventListener('click', () => {
    quoteIndex = (quoteIndex === quotes.length-1) ? quoteIndex = 0 : ++quoteIndex;
    welcomeQuote.innerText = quotes[quoteIndex];
});