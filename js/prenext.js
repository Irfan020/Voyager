
var photos = ["images/05.jpg","images/06.jpg","images/03.jpg","images/04.jpg","images/07.jpg","images/08.jpg"];
var imgTag = document.querySelector("img");

var count=0;

function next(){
    count++;
    if(count>=photos.length){
        count = 0;
        imgTag.src = photos[count];
    } else{
        imgTag.src = photos[count];
    }

}

function prev(){
    count--;
    if(count<0){
        count = photos.length-1;
        imgTag.src = photos[count];
    } else{
        imgTag.src = photos[count];
    }

}