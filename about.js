var i = 0; // Start point
var images = [];
var time = 3000;

// Image List

images[0] = 'envogue1.jpg';
images[1] = 'envogue4.jpg';
images[2] = 'envogue2.jpg';
images[3] = 'envogue6.jpg';
images[4] = 'envogue5.jpg';
images[5] = 'envogue7.jpg';
//Change Image
function changeImg(){
document.slide.src = images[i];

if(i < images.length - 1){
  i++;
} else {
 i = 0;
}

 setTimeout("changeImg()", time);
}

window.onload = changeImg;
