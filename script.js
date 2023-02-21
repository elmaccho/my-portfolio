const start = document.querySelector('.start')
const startTitle = document.querySelector('.startTitle')
const startText = document.querySelector('.startText')


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
    startTitle.innerHTML = TitleText[0].substring(0,  textPosition) + "<span>\u25ae\</span>"

    if(textPosition++ != TitleText[0].length){
        setTimeout(typewriter, 50)    
    }
}

window.addEventListener('load', openAnimation)