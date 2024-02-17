function scrollToTeamSection() {
    var element = document.getElementById("team-section");
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function scrollToProjectsSection(){
    var element = document.getElementById("projects-section");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest" })

}

// Отримуємо кнопку за її ідентифікатором
var zirkaplaceButton = document.getElementById("zirkaplaceButton");

// Додаємо обробник події для натискання на кнопку
//zirkaplaceButton.addEventListener("click", function() {
    // Переходимо на сайт "https://zirkaplace.com"
    //window.location.href = "https://zirkaplace.com";
//});

var marcoclinic = document.getElementById("marcoclinic");
//marcoclinic.addEventListener("click", function() {

//window.location.href = "https://markoclinic.org/"
//})