// Navigation bar scrow
var prevScrollposition = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPosition = window.pageYOffset;
    if (prevScrollposition > currentScrollPosition) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-80px";
    }
    prevScrollposition = currentScrollPosition;
}

// Experience
function openExperience(evt, jobName) {
    // Declare all variables
    var i, tabcontent, experience;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="experience" and remove the class "active"
    experience = document.getElementsByClassName("experience");
    for (i = 0; i < experience.length; i++) {
        experience[i].className = experience[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(jobName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();