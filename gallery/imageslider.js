

//Adding first 5 images to slider
let slidesimages = document.getElementById('allGalleries').querySelectorAll('img');








// Access the Images
let slideImages = document.getElementById('slides').querySelectorAll('img');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// Code for next button
next.addEventListener('click', slideNext);
function slideNext(){
slideImages[counter].style.animation = 'next1 1.5s ease-in-out forwards';
if(counter >= slideImages.length-1){
    counter = 0;
}
else{
    counter++;
}
slideImages[counter].style.animation = 'next2 1.5s ease-in-out forwards';
indicators();
}

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev(){
slideImages[counter].style.animation = 'prev1 1.5s ease-in-out forwards';
if(counter == 0){
    counter = slideImages.length-1;
}
else{
    counter--;
}
slideImages[counter].style.animation = 'prev2 1.5s ease-in-out forwards';
indicators();
}

// Auto slideing
function autoSliding(){
    deletInterval = setInterval(timer, 5500);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

// Add and remove active class from the indicators
function indicators(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

// Add click event to the indicator
function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
    slideImages[counter].style.animation = 'next1 1.5s ease-in-out forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 1.5s ease-in-out forwards';
    }
    else if(imageId == counter){
        return;
    }
    else{
    slideImages[counter].style.animation = 'prev1 1.5s ease-in-out forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 1.5s ease-in-out forwards';	
    }
    indicators();
}