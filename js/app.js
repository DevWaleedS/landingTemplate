// Create drwobdown menu
let navSlide = () => {
    let toggle = document.querySelector(".fa-bars");
    let cancle = document.querySelector(".fa-xmark");
    let nav = document.querySelector(".nav-links");
    let navLinks = document.querySelectorAll(".nav-links >li");
    let navForm = document.querySelector(".header-form");

    // toggle nav

    toggle.addEventListener("click", () => {
        nav.style.display = "block";
        //animate links
        navLinks.forEach((links, index) => {
            links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            navForm.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
    });
    cancle.addEventListener("click", () => {
        nav.style.display = "none";
    });
}
navSlide();





// create Counter 
let statsSection = document.querySelector(".our-awesome-stats");
let counterNumbers = document.querySelectorAll(".box .number");
let speed = 2000;
let isStarted = false; // function  start ? >> no



// create Counter function 
function updateCounter(el) {



    let traget = el.dataset.traget
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == traget) {
            clearInterval(counter);
        }
    }, speed / traget)

}



// Create Date Time Count
const countDown = () => {
        const countDate = new Date("May 1, 2022 00:00:00").getTime();
        const now = new Date().getTime();
        const gap = countDate - now;

        // How dose time work?
        const second = 1000;
        const mintue = second * 60;
        const hour = mintue * 60;
        const day = hour * 24;

        // calculate this

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMintue = Math.floor((gap % hour) / mintue);
        const textSecond = Math.floor((gap % mintue) / second);


        // add it on html element
        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour;
        document.querySelector(".mintue").innerText = textMintue;
        document.querySelector(".second").innerText = textSecond;

    }
    // count down counter
setInterval(countDown, 1000);



window.onscroll = function() {

    //2- progress par
    let progressSection = document.querySelector(".our-skills");
    let spans = document.querySelectorAll(".progress span");
    if (window.scrollY >= progressSection.offsetTop - 10) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;

        });
    };


    //3- Counter Numbers
    if (window.scrollY = statsSection.offsetTop - 10) {

        if (!isStarted) {
            counterNumbers.forEach((number) => {
                updateCounter(number)
            });
        }
        isStarted = true;
    };


};

//1- Create Scroll to top function 
window.addEventListener("scroll", function() {
    let scrollToTop = document.getElementById("scroll-to-top");
    if (this.scrollY >= 1000) {
        scrollToTop.classList.add("show");
    } else {
        scrollToTop.classList.remove("show")

    };
    scrollToTop.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",

        });
        scrollToTop.classList.remove("show")
    }


})