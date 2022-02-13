// navigation
const primaryNav = document.getElementById('primary-nav')
const navToggle = document.querySelector('.mobile-nav-toggle')
const hamburger = navToggle.querySelector('.hamburger')

navToggle.addEventListener('click', () => {
    const isVisible = primaryNav.getAttribute('data-visible')
    primaryNav.toggleAttribute('data-visible')

    if (isVisible === 'false') {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }

    hamburger.classList.toggle('open')
})

// carousel

const hero = document.querySelector('.hero')

const headerText = document.querySelector('header section')
const title = headerText.querySelector('h1')
const p = headerText.querySelector('p')
const btns = [...document.querySelectorAll('[data-carousel-btn]')]

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const offset = btn.dataset.carouselBtn === 'next' ? 1 : -1
        const actualIndex = Number(hero.dataset.carouselIndex)
        const index = changeIndex(actualIndex, offset)

        hero.dataset.carouselIndex = index
        changeHeaderText(index)
    })
})

function changeIndex(index, value) {
    index += value

    if (index < 1) index = 3
    if (index > 3) index = 1

    return index
}

async function changeHeaderText(i) {
    const data = await fetch('src/code/carousel.json')
    const obj = await data.json()

    title.innerText = obj[i].title
    p.innerText = obj[i].p
}
