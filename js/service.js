const li = document.querySelectorAll(".move");
const navPos = document.querySelectorAll("section");

function activeMenu() {
    let len = navPos.length
    while(--len && window.scrollY + 97 < navPos[len].offsetTop) {}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);