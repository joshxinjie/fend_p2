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
        newLiTag.innerHTML = `<a href="#${sectionID}">${sectionTitle}</a>`;
        navMenuFrag.appendChild(newLiTag);
    }
    navBarList.appendChild(navMenuFrag)
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
 * @description Appends the 'active' class to the section that is currently
 * in view
*/
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

document.addEventListener("scroll", makeViewedSectionActive);

addScrollToTopFunct()

document.addEventListener("scroll", showTopBtn);