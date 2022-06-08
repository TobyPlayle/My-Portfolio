const homeText = document.getElementById("homeText")
const aboutMeText = document.getElementById("aboutMeText")
const projectsText = document.getElementById("projectsText")
const contactText = document.getElementById("contactText")

const toAboutMe = () => {
    homeText.style.display = "none";
    aboutMeText.style.display = "block";
    projectsText.style.display = "none";
    contactText.style.display = "none";
}

const toProjects = () => {
    homeText.style.display = "none";
    aboutMeText.style.display = "none";
    projectsText.style.display = "block";
    contactText.style.display = "none";
}

const toContact = () => {
    homeText.style.display = "none";
    aboutMeText.style.display = "none";
    projectsText.style.display = "none";
    contactText.style.display = "block";
}

const toHome = () => {
    homeText.style.display = "block";
    aboutMeText.style.display = "none";
    projectsText.style.display = "none";
    contactText.style.display = "none";
}