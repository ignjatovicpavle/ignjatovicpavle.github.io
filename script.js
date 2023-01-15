
var navLinks = document.getElementById("navLinks")
    
function showmenu(){
    navLinks.style.display = "block"
    navLinks.style.animation = "menuopen 1s"
}

function hidemenu(){
    navLinks.style.animation = "menuclose 1s"
    setTimeout(() => {
        navLinks.style.display = "none"     
    }, 1000);
}


const faders = document.querySelectorAll('.fade-in')

const appearOpt = {
    threshold: 0.2,
}


const appearFun = new IntersectionObserver(function(entries, appearFun){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return
        } else {
            entry.target.classList.add('appear')
            appearFun.unobserve(entry.target)
        }
    })
}, appearOpt)

faders.forEach(fader => {
    appearFun.observe(fader)
})
