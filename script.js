const start = document.querySelector('.start')
const startTitle = document.querySelector('.startTitle')
const startText = document.querySelector('.startText')
const blinkEl = document.querySelector('.blink')

const skills = document.querySelectorAll('.skill')
const skillCounters = document.querySelectorAll('.skillCounter')
const htmlBox = document.querySelector('.html')


let TitleText = ["Cześć, jestem Maciej"]
let TextText = ["Junior FrontEnd Developer"]
let textPosition = 0


const openAnimation = () => {
    start.classList.add('startOpen')

    setTimeout(() => {
        typewriter()

        setTimeout(() => {
            OpenstartText()
        }, 700);
    }, 1500);
}
const OpenstartText = () => {
    startText.classList.add("startTextOpen")
    startText.textContent = TextText
}
const typewriter = () => {
    startTitle.innerHTML = TitleText[0].substring(0,  textPosition) + "<span class=\"blink\">\u25ae\</span>"

    if(textPosition++ != TitleText[0].length){
        setTimeout(typewriter, 50)
    }
}
window.addEventListener('load', openAnimation)

document.addEventListener('click', () => {
    skills[0].classList.add('html')
    skills[1].classList.add('css')
    skills[2].classList.add('javascript')
    skills[3].classList.add('php')
    skills[4].classList.add('wordpress')
})