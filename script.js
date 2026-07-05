function openHeart(){

document.getElementById("gallery").style.display="block";

const photos=[
"IMG_0039.jpeg",
"IMG_0213.jpeg",
"IMG_0257.jpeg",
"IMG_1087.jpeg",
"IMG_5364.png",
"IMG_5799.jpeg",
"IMG_6528.jpeg",
"IMG_6551.jpeg",
"IMG_6645.jpeg",
"IMG_7386.jpeg",
"IMG_7426.jpeg",
"IMG_7434.jpeg",
"IMG_8512.jpeg",
"IMG_8669.jpeg",
"IMG_8850.jpeg",
"IMG_8856.jpeg",
"IMG_9685.jpeg"
];

let i=0;

const slide=document.getElementById("slideshow");

const timer=setInterval(()=>{

i++;

if(i<photos.length){

slide.src=photos[i];

}else{

clearInterval(timer);

document.getElementById("gallery").style.display="none";

document.getElementById("letter").style.display="block";

launchFireworks();

}

},2500);

}
function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}
function launchFireworks() {

    for(let i=0;i<40;i++){

        const fire=document.createElement("div");

        fire.innerHTML="✨";

        fire.style.position="fixed";
        fire.style.left=Math.random()*100+"vw";
        fire.style.top=Math.random()*100+"vh";
        fire.style.fontSize=(20+Math.random()*30)+"px";
        fire.style.pointerEvents="none";
        fire.style.animation="explode 1.5s ease forwards";

        document.body.appendChild(fire);

        setTimeout(()=>{
            fire.remove();
        },1500);
    }

}
