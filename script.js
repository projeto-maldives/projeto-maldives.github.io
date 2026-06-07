gsap.registerPlugin(ScrollTrigger);

let valorMaskSize = '2800vw';
let valorStartTxt = '30% top';

if (window.innerWidth < 1300) {
    valorMaskSize = '4200vw';
}

if (window.innerWidth < 850) {
    valorStartTxt = '300% top';
}


gsap.to('.mask', {
    maskSize: valorMaskSize,
    maskPosition: '53% center',

    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom 20%',
        scrub: 2,
        pin: true
    }
});

gsap.from('.txtMagico', {
    opacity: 0,
    y: 20,
    stagger: .3,

    scrollTrigger: {
        trigger: '.txtMagico',
        start: valorStartTxt,
        end: '+=350 top',
        scrub: 1
    }
});