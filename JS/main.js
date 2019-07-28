const closeBtn = document.getElementById("close-icon");
const responsiveNav = document.getElementById("responsive-nav");
const navBtn = document.getElementById("nav-icon");
const header = document.getElementsByClassName("lower-header");


const deployBtn = document.getElementById("deploy-btn");
const deployed = document.getElementsByClassName("successfully-deployed");

closeBtn.onclick = function() {
    responsiveNav.classList.add("inactive");
}

navBtn.onclick = function() {
    responsiveNav.classList.remove("inactive");
    responsiveNav.classList.add("active");
}

deployBtn.onclick = function() {
    deployed[0].style.display = "flex";
}