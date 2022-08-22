gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.defaults({ ease: "power1", duration: 2 });
// view_2
const path = gsap.timeline()
    .to(".youtube", { top: "25.9%", left: "-6%" }, 0)
    .to(".kakao", { top: "25.9%", left: "-6%" }, 0);
ScrollTrigger.create({
    animation: path,
    trigger: ".view_2",
    start: "top center",
    scrub: true,
    // pin: true
});

// view_3
gsap.to("#move_avatar", {
    duration: 1,
    scrollTrigger: {
        trigger: ".view_3",
        start: "center center"
    },
    css: { left: "17%" }
});
gsap.to("#fade_avatar", {
    duration: 1,
    scrollTrigger: {
        trigger: ".view_3",
        start: "center center"
    },
    className: "img_avatar_blink expandUp"
});

// view_4
gsap.to("#sns_group_1", {
    scrollTrigger: {
        trigger: ".view_4",
        start: "top center"
    },
    className: "slideUp img_capture"
});
gsap.to("#sns_group_2", {
    scrollTrigger: {
        trigger: ".view_4",
        start: "top center"
    },
    className: "slideUp img_capture"
});

// // 브라우저창, 보여지는 화면 자체
// window.addEventListener('scroll', _.throttle(
//     function () {
//         // 페이지 스크롤 위치가 500px이 넘으면.
//         let tl = gsap.timeline();
//         console.log(tl);
//         if (window.scrollY > 500) {
//             // Badge 요소 숨기기!
//             gsap.to(view2_kakao, .6, {
//                 opacity: 0
//             })
//         // 페이지 스크롤 위치가 500px이 넘지 않으면.
//         }
//     }, 300)
// );