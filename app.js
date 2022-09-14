//set date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//toggle links
const linksCon = document.querySelector(".links-container");
const navTog = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navTog.addEventListener("click", function() {
    // linksCon.classList.toggle("show-links");
    const containerHeight = linksCon.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksCon.style.height = `${linksHeight}px`
    } else {
        linksCon.style.height = 0;
    }

})