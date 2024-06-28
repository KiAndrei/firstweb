var icon = document.getElementById("icon");

        icon.onclick = function(){
            document.body.classList.toggle("dark-theme")
        }


document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll('.header__image img');
    let currentImageIndex = 0;

    images[currentImageIndex].classList.add('active');

    setInterval(function() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }, 3000);
});


document.addEventListener("DOMContentLoaded", function() {
    let headerContent = document.querySelector('.header__content-inner');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function showHeaderContent() {
        if (isInViewport(headerContent)) {
            headerContent.classList.add('visible');
            window.removeEventListener('scroll', showHeaderContent);
        }
    }

    showHeaderContent();

    window.addEventListener('scroll', showHeaderContent);
});

document.addEventListener("DOMContentLoaded", function() {
    let icon = document.getElementById("icon");
    let destinationsLink = document.querySelector('.nav__links li:nth-child(2) a');
    let reviewsLink = document.querySelector('.nav__links li:nth-child(4) a');

    icon.onclick = function() {
        document.body.classList.toggle("dark-theme");
    }

    destinationsLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('.destination__container').scrollIntoView({ behavior: 'smooth' });
    });

    reviewsLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('.gallery__container').scrollIntoView({ behavior: 'smooth' });
    });

    let images = document.querySelectorAll('.header__image img');
    let currentImageIndex = 0;

    images[currentImageIndex].classList.add('active');

    setInterval(function() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }, 3000); 

    let headerContent = document.querySelector('.header__content-inner');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function showHeaderContent() {
        if (isInViewport(headerContent)) {
            headerContent.classList.add('visible');
            window.removeEventListener('scroll', showHeaderContent);
        }
    }

    showHeaderContent();

    window.addEventListener('scroll', showHeaderContent);
});


const sectionTitles = document.querySelectorAll('.section__title');
const sectionSubtitles = document.querySelectorAll('.section__subtitle');

function showSectionText() {
    sectionTitles.forEach(title => {
        if (isElementInViewport(title)) {
            title.classList.add('show');
        }
    });

    sectionSubtitles.forEach(subtitle => {
        if (isElementInViewport(subtitle)) {
            subtitle.classList.add('show');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', showSectionText);
window.addEventListener('load', showSectionText);

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault;
    if(!ValidateForm(form)) return;
})

const validateForm = (form => {
    let valid = true;
    let name = form.querySelector(".name");
    let message = form.querySelector(".message");
    let email = form.querySelector(".email");

    if(name.value === "") {
        giveError(name, "please enter your name");
    }
})

const giveError =(field, message) => {
    let parentElement = field.parentElement;
    parentElement.classList.add("error");
}

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    const logoutButton = document.getElementById("logoutButton");

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
        loginButton.style.display = "none";
        logoutButton.style.display = "block";
    } else {
        loginButton.style.display = "block";
        logoutButton.style.display = "none";
    }

    loginButton.addEventListener("click", () => {
        window.location.href = "login.html"; // Redirect to the login page
    });

    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("user");
        alert("Logged out successfully");
        window.location.reload();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    const logoutButton = document.getElementById("logoutButton");
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
        loginButton.style.display = "none";
        logoutButton.style.display = "block";
    } else {
        loginButton.style.display = "block";
        logoutButton.style.display = "none";
    }

    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("user");
        alert("Logged out successfully");
        window.location.reload();
    });
});

// for view all in Best trip package
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("imageModal");
    var btn = document.querySelector(".view__all .btn");
    var span = document.getElementsByClassName("close")[0];

    // to open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
// until here

document.addEventListener('DOMContentLoaded', function() {
    const visitHereButton = document.querySelector('.header__content .btn');
    const bestTripPackageSection = document.getElementById('best-trip-package');

    visitHereButton.addEventListener('click', function() {
        bestTripPackageSection.scrollIntoView({ behavior: 'smooth' });
    });
});

