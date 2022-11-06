gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.defaults({ ease: "power1", duration: 2 });
// view_2
const path = gsap.timeline()
    .to(".youtube", { top: "25.9%", left: "-6%" }, 0)
    .to(".naver", { top: "28.7%", left: "78.8%" }, 0)
    .to(".twitter", { top: "88.6%", left: "20%" }, 0)
    .to(".band", { top: "50%", left: "10.2%" }, 0)
    .to(".ideas", { top: "46%", left: "91.8%" }, 0)
    .to(".ideas_small", { top: "82.2%", left: "-4%" }, 0)
    .to(".kakao", { top: "63.6%", left: "80%" }, 0);
ScrollTrigger.create({
    animation: path,
    trigger: ".view_2",
    start: "center center",
    scrub: 1,
    pin: true
});

// view_3
const view3_anim = gsap.timeline()
    .to('#fade_avatar', {
        keyframes: {
            "0%": { scale: 0, opacity: 0 },
            "60%": { scale: 1.1 },
            "80%": { scale: 0.9, opacity: 1 },
            "100%": { scale: 1, opacity: 1 }
        },
        duration: 1
    }, 0)
    .to("#move_avatar", {
        left: "17%",
        duration: 1
    }, 0);
ScrollTrigger.create({
    trigger: ".view_3",
    start: "center 70%",
    onEnter: () => view3_anim.play()
});
ScrollTrigger.create({
    trigger: ".view_3",
    start: "top bottom",
    onEnter: () => view3_anim.pause(0)
});

// view_4
const view4_anim = gsap.timeline()
    .to('#sns_group_1', {
        keyframes: {
            "0%": { transform: 'translateY(100%)', opacity: 1 },
            "50%": { transform: 'translateY(-8%)' },
            "65%": { transform: 'translateY(4%)' },
            "100%": { transform: 'translateY(0%)' }
        },
        duration: 1.5,
        delay: 0.01
    }, 0)
    .to('#sns_group_2', {
        keyframes: {
            "0%": { transform: 'translateY(100%)', opacity: 1 },
            "50%": { transform: 'translateY(-12%)' },
            "65%": { transform: 'translateY(6%)' },
            "100%": { transform: 'translateY(0%)' }
        },
        duration : 1.2,
        delay: 0.6
    }, 0);
ScrollTrigger.create({
    trigger: ".view_4",
    start: "center 70%",
    onEnter: () => {
        view4_anim.play()
    }
});
ScrollTrigger.create({
    trigger: ".view_4",
    start: "top bottom",
    onEnter: () => view4_anim.pause(0)
});

// view_8
const group = gsap.utils.toArray('.group');
group.forEach(view8 => {
    const anim = gsap.to(view8, { top: 0, opacity: 1, paused: true })

    ScrollTrigger.create({
        trigger: view8,
        start: "40% bottom",
        onEnter: () => anim.play()
    })

    ScrollTrigger.create({
        trigger: view8,
        start: "-80% bottom",
        onLeaveBack: () => anim.pause(0)
    })
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