const li = document.querySelectorAll(".move");
const navPos = document.querySelectorAll(".nav_point");

function activeMenu() {
    let len = navPos.length
    while (--len && window.scrollY + 500 < navPos[len].offsetTop) { }
    li.forEach(ltx => ltx.classList.remove("active"));
    if (len == 0) {
        if (window.scrollY + 500 < navPos[len].offsetTop) {
            li[len].classList.add("active");
        } else {
            li[len + 1].classList.add("active");
        }
    } else {
        li[len + 1].classList.add("active");
    }
}

activeMenu();
window.addEventListener("scroll", activeMenu);