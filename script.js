function page1Animation() {
    var tl = gsap.timeline();

    tl.from('nav h1, nav h4, nav button', {
        y: -30,
        opacity: 0,
        delay: 0.6,
        duration: 0.5,
        stagger: 0.15,
    })

    tl.from('.center-part1 h1', {
        x: -200,
        opacity: 0,
        duartion: 0.5,
    })

    tl.from('.center-part1 p', {
        x: -100,
        opacity: 0,
        duartion: 0.45,
    })

    tl.from('.center-part1 button', {
        opacity: 0,
        duartion: 0.3,
    })

    tl.from('.center-part2 img', {
        x: 150,
        opacity: 0,
        duartion: 0.5,
    }, '-=0.7')

    tl.from('.section1bottom img', {
        opacity: 0,
        y: 30,
        duration: 0.4,
        stagger: 0.13,
    })

}

function page2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section2',
            scroller: 'body',
            start: 'top 50%',
            end: 'top -10%',
            scrub: 2,
        }
    });

    tl2.from('.services', {
        y: 30,
        opacity: 0,
        duration: 0.2,
    })

    tl2.from('.elem.line1.left', {
        x: -100,
        opacity: 0,
        duration: 0.5,
    }, 'one')

    tl2.from('.elem.line1.right', {
        x: 100,
        opacity: 0,
        duration: 0.5,
    }, 'one')

    tl2.from('.elem.line2.left', {
        x: -100,
        opacity: 0,
        duration: 0.5,
    }, 'two')

    tl2.from('.elem.line2.right', {
        x: 100,
        opacity: 0,
        duration: 0.5,
    }, 'two')
}

function page3Animation() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section3',
            scroller: 'body',
            start: 'top 65%',
            end: 'top 0%',
            scrub: 2,
        }
    });

    tl3.from('#container', {
        x: -200,
        opacity: 0,
        duartion: 0.4,
    })
}

function page4Animation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section4',
            scrolller: 'body',
            start: 'top 110%',
            end: 'top 50%',
            scrub: 2,
        }
    });

    tl4.from('.top', {
        y: -15,
        opacity: 0,
        duartion: 0.5,
    })

    tl4.from('.bottom', {
        y: 60,
        opacity: 0,
        duartion: 1,
    })
}

page1Animation();
page2Animation();
page3Animation();
page4Animation();