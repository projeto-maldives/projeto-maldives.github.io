gsap.registerPlugin(ScrollTrigger);

let valorMaskSize = "3000vw"

if(window.innerWidth < 1000){
    valorMaskSize = "4000vw"
}


gsap.to(".mask", {
    maskSize: valorMaskSize,
    maskPosition:"53% center",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        start: "top top",
        end: "bottom 20%",
        scrub: 2
    }
})


gsap.from(".content", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".content",
        start: "top top",
        end: "bottom 20%",
        scrub: 2,
        markers: true
    }
})