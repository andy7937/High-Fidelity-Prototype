// Modal script
document.getElementById('trigger-modal').onclick = function() {
    document.getElementById('modal').style.display = 'block';
}

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Image slider script
let currentIndex = 1;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;

function cycleImages() {
    const nextIndex = (currentIndex + 1) % totalImages; 
    images[currentIndex].style.opacity = '0'; 
    images[nextIndex].style.opacity = '1'; 
    currentIndex = nextIndex;
    setTimeout(cycleImages, 10000); 
}

// Start the cycle
window.onload = function() {
    cycleImages();
};
