const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}))


const FIGMABar = document.querySelector('.bar-FIGMA')
const AdobeXDBar = document.querySelector('.bar-AdobeXD')
const AdobePSBar = document.querySelector('.bar-AdobePS')
const AdobeAIBar = document.querySelector('.bar-AdobeAI')
const AdobeIDBar = document.querySelector('.bar-AdobeID')
const InVisionBar = document.querySelector('.bar-InVision')

var t1 = new TimelineLite()

t1.fromTo(FIGMABar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(80% - 6px)', ease: Power4.easeOut })
    .fromTo(AdobeXDBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(90% - 6px)', ease: Power4.easeOut })
    .fromTo(AdobePSBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(90% - 6px)', ease: Power4.easeOut })
    .fromTo(AdobeAIBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(90% - 6px)', ease: Power4.easeOut })
    .fromTo(AdobeIDBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(70% - 6px)', ease: Power4.easeOut })
    .fromTo(InVisionBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(70% - 6px)', ease: Power4.easeOut })

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
    .setTween(t1)
    .addTo(controller)

const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for (i = 0; i < links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class^="category-"]')
    for (i = 0; i < categories.length; i++) {
        if (categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.remove('showCategory')
}

const openEmail = () => {
    window.open('mailto:rouge.ludovica@gmail.com');
}