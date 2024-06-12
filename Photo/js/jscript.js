// Duplicate
function duplicateImage(id) {

    const getimage = id;
    const clonedImage = getimage.cloneNode(true);

    const container = document.getElementById('contain');
    container.appendChild(clonedImage);

}
// Grayscale
function gscale(imageElement){
  document.getElementById(imageElement).style.filter = "grayscale(1)"
}

// check RGB
function crgb(imageElement, parentElement) {

    // Create the canvas element
    var canvas
        = document.createElement('canvas'),

        // Get the 2D context of the canvas
        context
            = canvas.getContext &&
            canvas.getContext('2d'),
        imgData, width, height,
        length,

        // Define variables for storing
        // the individual red, blue and
        // green colors
        rgb = { r: 0, g: 0, b: 0 },

        // Define variable for the
        // total number of colors
        count = 0;

    // Set the height and width equal
    // to that of the canvas and the image
    height = canvas.height =
        imageElement.naturalHeight ||
        imageElement.offsetHeight ||
        imageElement.height;
    width = canvas.width =
        imageElement.naturalWidth ||
        imageElement.offsetWidth ||
        imageElement.width;

    // Draw the image to the canvas
    context.drawImage(imageElement, 0, 0);
    imageElement.crossOrigin = "anonymous";
    // Get the data of the image
    imgData = context.getImageData(
                0, 0, width, height);

    // Get the length of image data object
    length = imgData.data.length;

    for (var i = 0; i < length; i += 4) {

        // Sum all values of red colour
        rgb.r += imgData.data[i];

        // Sum all values of green colour
        rgb.g += imgData.data[i + 1];

        // Sum all values of blue colour
        rgb.b += imgData.data[i + 2];

        // Increment the total number of
        // values of rgb colours
        count++;
    }

    // Find the average of red
    rgb.r
        = Math.floor(rgb.r / count);

    // Find the average of green
    rgb.g
        = Math.floor(rgb.g / count);

    // Find the average of blue
    rgb.b
        = Math.floor(rgb.b / count);


    var result = ""

    if(rgb.r > rgb.g){
        if(rgb.r > rgb.b){
            result = "red";
        }
        else{
            result = "blue"
        }
    }
    else{
        if(rgb.g > rgb.b){
            result = "green"
        }
        else{
            result = "blue"
        }
    }

    const para = document.createElement("p");
    para.style.color = result;
    const node = document.createTextNode("The image is "+ result+"ish");
    para.appendChild(node);

    parentElement.appendChild(para);

}

function changeColor(imageElement, toColor) {

    // Create the canvas element
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    height = canvas.height = imageElement.naturalHeight || imageElement.offsetHeight || imageElement.height;
    width = canvas.width = imageElement.naturalWidth || imageElement.offsetWidth || imageElement.width;


    // Draw the image to the canvas
    context.drawImage(imageElement, 0, 0);

    imageElement.crossOrigin = "anonymous";
    // Get the data of the image
    imgData = context.getImageData(
                0, 0, width, height);

    // Get the length of image data object
    length = imgData.data.length;

    for (var i = 0; i < length; i += 4) {
        if(toColor == 'red'){
            imgData.data[i] = imgData.data[i+1] + imgData.data[i+2];
        }
        else if(toColor == 'green'){
            imgData.data[i+1] = imgData.data[i] + imgData.data[i+2];
        }
        else{
            imgData.data[i+2] = imgData.data[i] + imgData.data[i+1];
        }


    }

    context.putImageData(imgData, 0, 0);
    imageElement.src = canvas.toDataURL();
}

function showDropdown() {

    const elements = document.querySelectorAll('[id^="submenu-"]');

    elements.forEach(element => {

        element.style.display = 'block';
        element.style.left = '50px'; //  left   needed
    });
}

function hideDropdown() {
    const elements = document.querySelectorAll('[id^="submenu-"]');

    elements.forEach(element => {
        element.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[id^="submenu-"]');
    elements.forEach(element => {
        element.addEventListener('mouseenter', showDropdown);
        element.addEventListener('mouseleave', hideDropdown);
    });
});


let brightnessLevel = 100;

function increaseBrightness(imgid) {
    brightnessLevel += 10;
    if (brightnessLevel > 200) {
        brightnessLevel = 200;
    }
    document.getElementById(imgid).style.filter = `brightness(${brightnessLevel}%)`;
}

function resolution(imageElement) {

    var img = document.getElementById(imageElement);
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    const scaleFactor = 0.9;

    canvas.width = img.width * scaleFactor;
    canvas.height = img.height * scaleFactor;

    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.crossOrigin = "anonymous";
    const reducedImageDataURL = canvas.toDataURL('image/jpeg', 0.2);
    img.src = reducedImageDataURL;
}

function cavatar(imageElement, myCanvas) {
    const image = document.getElementById(imageElement);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext("2d");

    const avatarSize = Math.min(canvas.width, canvas.height);

    context.beginPath();
    context.arc(avatarSize / 2, avatarSize / 2, avatarSize / 2, 0, 2 * Math.PI);
    context.clip();

    context.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, avatarSize, avatarSize);

    document.getElementById(myCanvas).appendChild(canvas);
}

function fred(id){

}


