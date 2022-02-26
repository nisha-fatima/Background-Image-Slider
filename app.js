var i = 0;
images = ["./images/image1.jpg", "./images/image2.jpg", "./images/image3.jpg"]
let currentImage = document.getElementById("image")
currentImage.src = images[0]

setInterval(() => {
    if (i === 3) {
        i = 0
    }
    currentImage.src = images[i]
    i = i + 1;
}, 3000);

