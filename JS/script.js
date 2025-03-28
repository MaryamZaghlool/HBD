var slider = document.getElementsByClassName("slider")[0]
slider.style.backgroundImage = "url('image/1.jpeg')";
var left = document.getElementsByClassName("fa-chevron-left");
var right = document.getElementsByClassName("fa-chevron-right");
var recent = 1;
var interval;

function nextImage() {
    if (recent == 14) {
        recent = 0
    }
    recent++
    slider.style.backgroundImage = `url('image/${recent}.jpeg')`;
}
function previousImage() {
    if (recent == 1) {
        recent =15
    }
    recent--
    slider.style.backgroundImage = `url('image/${recent}.jpeg')`;
}


interval=setInterval(nextImage,2000)

// function play(){
//     interval=setInterval(nextImage,2000)
// }

// function stop(){
//     clearInterval(interval)
// }