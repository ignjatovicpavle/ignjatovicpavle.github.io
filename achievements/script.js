
const boxes = document.querySelectorAll('.timeline-box')

window.addEventListener('scroll', displayContent)
displayContent()

function displayContent(){
    const triggerBottom = (window.innerHeight / 5) * 4
    boxes.forEach((box) => {
        const topBox = box.getBoundingClientRect().top;
        if (topBox < triggerBottom){
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    })
}