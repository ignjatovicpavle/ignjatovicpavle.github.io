
//Preload animation

let time = 0
var timecounter = setInterval(function() {
    time += 1
}, 1000)

function loaded(){
    loader.classList.add('remove')
    document.getElementById('main').style.display = 'block'
    document.getElementById('main').classList.add('appear')
    var x = setTimeout(() => {
        loader.style.display = 'none'
        document.getElementById('main').style.opacity = 1
    }, 1000);
}


var loader = document.getElementById("preload")
    window.addEventListener("load", function(){
        if (time >= 3){
            loaded()
            clearInterval(timecounter)
        } else{
            var timecounter2 = setInterval(function(){
                if (time >= 3){
                    loaded()
                    clearInterval(timecounter)
                    clearInterval(timecounter2)
                }
            }, 200)
        }
    })

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
            entry.target.classList.remove('appear')
            return
        } else {
            entry.target.classList.add('appear')
            //appearFun.unobserve(entry.target)
        }
    })
}, appearOpt)

faders.forEach(fader => {
    appearFun.observe(fader)
})
