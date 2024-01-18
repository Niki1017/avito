let img = document.getElementById("img-item")
let imgs = [
    "item-five.jpg",
"item-four.jpg",
"item-one.jpg",
"item-three.jpg",
"item-two.jpg",
]

img.onmousemove = function (e) {
    console.log(e.offsetX);
    if (e.offsetX < 70) {
        img.src = imgs[0]
    }

    else if(e.offsetX < 140) {
        img.src = imgs[1]
    }

    else if(e.offsetX < 210) {
        img.src = imgs[2]
    }

    else if(e.offsetX < 280) {
        img.src = imgs[3]
    }

    else{
        img.src = imgs[4]
    }

}