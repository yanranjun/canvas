var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    image = new Image();

    image.src = 'timg.jpeg';
    image.onload = function(e) {
      context.drawImage(image,0,0);
    }
// // drawImage()
// function drawImage(){
//   context.clearRect(0,0,canvas.width,canvas.height);
//   if(scaleCheckbox.checked) {
//     context.drawImage(image, 0, 0, canvas.width, canvas.height);
//   } else {
//     context.drawImage(image, 0 ,0)
//   }
// }