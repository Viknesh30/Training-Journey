// main.js
function hideImage() {
    document.getElementById('image1').style.display = 'none';
}

function resetImages() {
    // Set the display property of all images back to 'block'
    var images = document.querySelectorAll('section img');
    images.forEach(function(image) {
        image.style.display = 'block';
    });
}
