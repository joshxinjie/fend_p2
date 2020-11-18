/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navMenuFrag = document.createDocumentFragment();
const sectionNodeList = document.querySelectorAll("section");
let navBarList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildNavMenu() {
    for (const eachSection of sectionNodeList) {
        let sectionID = eachSection.getAttribute("id")
        let sectionTitle = eachSection.getAttribute("data-nav")
        let newLiTag = document.createElement("li");
        newLiTag.setAttribute("class", "menu__link");
        newLiTag.innerHTML = `<a href="#${sectionID}">${sectionTitle}</a>`;
        navMenuFrag.appendChild(newLiTag);
    }
    navBarList.appendChild(navMenuFrag)
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNavMenu()

// Scroll to section on link click

// Set sections as active


