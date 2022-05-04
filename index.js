const activeCloseMenu = document.querySelector('.active')
const buttonMobileNav = document.querySelector('.mobile_navbar_btn')
const header_mobile_nav = document.querySelector('.header')

buttonMobileNav.addEventListener("click", () => {
    header_mobile_nav.classList.toggle("active")
})