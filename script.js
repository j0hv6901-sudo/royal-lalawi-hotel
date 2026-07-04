// =============================
// Royale Lalawi Hotel
// script.js
// =============================

// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

// Close menu after clicking a link
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Reveal animation
const revealElements = document.querySelectorAll(
".room-card,.facility-card,.review-card,.faq-item,.gallery-grid img"
);

const revealOnScroll = () =>{

    const windowHeight = window.innerHeight;

    revealElements.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight-80){

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        }

    });

};

revealElements.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition=".6s";

});

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


// Floating Welcome Message

window.addEventListener("load",()=>{

setTimeout(()=>{

console.log("Welcome to Royale Lalawi Hotel");

},1000);

});
