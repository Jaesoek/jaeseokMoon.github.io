gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const li = document.querySelectorAll(".move");
const navPos = document.querySelectorAll(".nav_point");

function activeMenu() {
    let len = navPos.length
    while (--len && window.scrollY + 500 < navPos[len].offsetTop) { }
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

const floatingOn = gsap.to(".floating-menu", { opacity: 1, paused: true });
ScrollTrigger.create({
    trigger: ".service_view_6",
    start: "80% bottom",
    onEnter: () => floatingOn.play()
});

ScrollTrigger.create({
    trigger: ".service_view_6",
    start: "30% bottom",
    onLeaveBack: () => floatingOn.pause(0)
});
