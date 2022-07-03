const slider = document.querySelector('input')
const tanya = document.querySelector('.tanyaQuote')
const john = document.querySelector('.johnQuote')
const pic = document.querySelector('.pictureDiv__picture')


slider.addEventListener('change', displayThis)
window.addEventListener('load', displayThis)

function displayThis() {
    if (slider.value === '0') {
        tanya.style.opacity = '1'
        john.style.opacity = '0'
        pic.style.backgroundImage = 'url(./images/image-tanya.jpg)'
    } else if (slider.value === '1') {
        john.style.opacity = '1'
        tanya.style.opacity = '0'
        pic.style.backgroundImage = 'url(./images/image-john.jpg)'
    }
}