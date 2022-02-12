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
