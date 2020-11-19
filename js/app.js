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
        newLiTag.setAttribute("id", sectionID + "__link");
        newLiTag.innerHTML = `<a href="#${sectionID}">${sectionTitle}</a>`;
        navMenuFrag.appendChild(newLiTag);
    }
    navBarList.appendChild(navMenuFrag)
}

function minElemArray(array) {
    var index = 0;
    var value = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < value) {
            value = array[i];
            index = i;
        }
    }
    return index
}

function getSectionInView() {
    let distFromTop = []
    for (const eachSection of sectionNodeList) {
        let rect = eachSection.getBoundingClientRect();
        distFromTop.push(Math.abs(rect.top))
    }

    let largestSectionIndex = minElemArray(distFromTop)

    return sectionNodeList[largestSectionIndex]
}

function makeViewedSectionActive() {
    sectionInView = getSectionInView()
    for (const eachSection of sectionNodeList) {
        let sectionID = eachSection.getAttribute("id")
        let sectionMenuLink = document.getElementById(sectionID + "__link");
        if (eachSection == sectionInView) {
            sectionMenuLink.classList.add("active");
        }
        else {
            sectionMenuLink.classList.remove("active");
        }
    }
}

// add eventlistener for scroll, check if each section is in viewport, then add active to element's class

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNavMenu()

document.addEventListener("scroll", makeViewedSectionActive);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu

// Scroll to section on link click

// Set sections as active


