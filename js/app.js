const navMenuFrag = document.createDocumentFragment();
const sectionNodeList = document.querySelectorAll("section");
let navBarList = document.getElementById("navbar__list");
const topButton = document.getElementById("topBtn");

/**
 * @description Builds the navigation bar dynamically based on
 * the sections of the page
*/
function buildNavMenu() {
    for (const eachSection of sectionNodeList) {
        let sectionID = eachSection.getAttribute("id")
        let sectionTitle = eachSection.getAttribute("data-nav")
        let newLiTag = document.createElement("li");
        newLiTag.setAttribute("class", "menu__link");
        newLiTag.setAttribute("id", sectionID + "__link");
        newLiTag.setAttribute("href", `#${sectionID}`);
        newLiTag.innerHTML = `<a>${sectionTitle}</a>`;
        navMenuFrag.appendChild(newLiTag);
    }
    navBarList.appendChild(navMenuFrag)
}

/**
 * @description Scroll to the referenced section
*/
function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
  });
}

/**
 * @description Add event listeners on each of the navigation bar's
 * buttons to listen for clicks and scroll to the requested section
*/
function addScrolltoSectListeners() {
    const navSectionBtn = document.querySelectorAll(".menu__link");

    for (const navBtn of navSectionBtn) {
        navBtn.addEventListener("click", scrollToSection);
    }
}

/**
 * @description Return the index of smallest number in array
 * @param {Array} array
 * @returns {number} index
*/
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

/**
 * @description Return the section that is in view
 * @returns {Element} sectionInView
*/
function getSectionInView() {
    let distFromTop = []
    for (const eachSection of sectionNodeList) {
        let rect = eachSection.getBoundingClientRect();
        distFromTop.push(Math.abs(rect.top))
    }

    let largestSectionIndex = minElemArray(distFromTop)

    let sectionInView = sectionNodeList[largestSectionIndex]

    return sectionInView
}

/**
 * @description Appends the 'active-section' class to the section that is
 * currently in view, as well as an 'active' class to the nav bar button 
 * associated with the section
*/
function makeViewedSectionActive() {
    sectionInView = getSectionInView()
    for (const eachSection of sectionNodeList) {
        let sectionID = eachSection.getAttribute("id")
        let sectionMenuLink = document.getElementById(sectionID + "__link");
        if (eachSection == sectionInView) {
            sectionMenuLink.classList.add("active");
            eachSection.classList.add("active-section")
        }
        else {
            sectionMenuLink.classList.remove("active");
            eachSection.classList.remove("active-section")
        }
    }
}

/**
 * @description Scroll to the top of the page
*/
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/**
 * @description Add scroll to top functionality to topBtn element
*/
function addScrollToTopFunct () {
    topButton.setAttribute("onclick", "scrollToTop()");
}

/**
 * @description Show the scroll to top button when the last section
 * is in view. Otherwise, hide the button.
*/
function showTopBtn() {
    const menuLinks = document.querySelectorAll(".menu__link");
    let lastSectionMenuLink = menuLinks[menuLinks.length -1];
    if (lastSectionMenuLink.classList.contains("active")) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

buildNavMenu()

addScrolltoSectListeners()

document.addEventListener("scroll", makeViewedSectionActive);

addScrollToTopFunct()

document.addEventListener("scroll", showTopBtn);