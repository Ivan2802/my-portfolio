const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const closeElem = document.querySelector('.menu__close')
const ali = document.querySelectorAll('.menu__link')

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
})

closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
})

const lineWrappper = document.querySelectorAll('.skills-percents')
const line = document.querySelectorAll('.percent__line')

lineWrappper.forEach((item, i) => {
    line[i].style.width = item.innerHTML
})

ali.addEventListener('click', function(){
    menu.classList.remove('active')
})