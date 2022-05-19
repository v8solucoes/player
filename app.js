
const canvas = document.getElementById("canvas");

const image = new Image();
image.src = 'https://picsum.photos/420/320';
image.onload = drawImage;
//teste
function drawImage() {
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);
} 


let video = document.getElementsByClassName('video')[0];


function play() {
    video.play();
    document.getElementById('play').hidden = true;
    document.getElementById('canvas').hidden = true;
    document.getElementById('pause').hidden = false;
    hover();

}
function playPosition() {
    let player = document.querySelector('.play');
    player.style.position = "absolute"
    player.style.bottom = "0";
    player.style.right = "0";
}

function pause() {
    video.pause();
    document.getElementById('play').hidden = false;
    document.getElementById('pause').hidden = true;
}



function right() {
    let canvaPositionRight = document.querySelector('.canvas');
    canvaPositionRight.style.position = "fixed";
    canvaPositionRight.style.bottom = "0";
    canvaPositionRight.style.right = "0";
    canvaPositionRight.style.left = "";
    canvaPositionRight.style.marginLeft = "";
}
function left() {
    let canvaPositionleft = document.querySelector('.canvas');
    canvaPositionleft.style.position = "fixed";
    canvaPositionleft.style.bottom = "0";
    canvaPositionleft.style.left = "0";
    canvaPositionleft.style.right = "";
    canvaPositionleft.style.marginLeft = "";
}

function middle() {
    let canva = document.querySelector('.canvas');
    canva.style.position = "fixed";
    canva.style.bottom = "0";
    canva.style.right = "";
    canva.style.marginLeft = "calc(100% - 65%)";
}



function circle() {
    document.querySelector('.play').hidden = true;
    document.querySelector('.pause').hidden = true;
    document.querySelector('.video').hidden = true;
    document.querySelector('.close').hidden = true;
    document.querySelector('.canvas1').hidden = true;


    let floatCircle = document.querySelector(".canvas");
    floatCircle.style.position = "fixed";
    floatCircle.style.width = "100px";
    floatCircle.style.height = "100px";
    floatCircle.style.bottom = "0";
    floatCircle.style.right = "0";
    floatCircle.style.left = "";

    if (document.querySelector('.voltar') && document.querySelector('.imgFloat')) {
        document.getElementById('aumentar').hidden = false;
        document.querySelector('.imgFloat').hidden = false;
    } else {
        criaBotao();
        criaImagen();
        imgFloat();
        pause();
        document.querySelector('.play').hidden = false;

    }
    const hover = document.querySelector(".canvas");
    hover.addEventListener('mouseover', function () {
        document.getElementById('close').hidden = true;
        document.getElementById('pause').hidden = true;
    });
}



function imgFloat() {
    let image = document.createElement('img');
    image.src = "https://picsum.photos/420/320";
    document.querySelector('.canvas').appendChild(image);
    image.style.borderRadius = "100%";
    image.style.width = "100px";
    image.style.height = "100px";

    let att = document.createAttribute("class");
    att.value = "imgFloat";
    image.setAttributeNode(att);
}


function criaBotao() {
    let canva = document.createElement('button');
    document.querySelector('.canvas').appendChild(canva);
    canva.style.cursor = "pointer";

    let att = document.createAttribute("class");
    att.value = "voltar";
    canva.setAttributeNode(att);

    let click = document.createAttribute("onclick");
    click.value = "ampliar()";
    canva.setAttributeNode(click);

    let resize = document.createAttribute("id");
    resize.value = "aumentar";
    canva.setAttributeNode(resize);

    let voltar = document.querySelector('.voltar');
    voltar.style.position = "absolute";
    voltar.style.top = "0%";
    voltar.style.left = "55%";
    voltar.style.zIndex = "550";
    voltar.style.width = "30px";
    voltar.style.height = "30px";
    voltar.style.borderRadius = "50%";
    voltar.style.border = "none";
    voltar.style.background = "none";
}

function criaImagen() {

    let image = document.createElement('img');
    image.src = "./resize.png";
    document.querySelector('.voltar').appendChild(image);
    image.style.marginLeft = "5%";
    image.style.marginTop = "-5px";
    image.style.width = "40px";
    image.style.height = "40px";

    let imgClass = document.createAttribute("class");
    imgClass.value = "onResize";
    image.setAttributeNode(imgClass);
}



function ampliar() {
    let canva = document.querySelector('.canvas');
    canva.style.position = "relative";
    canva.style.bottom = "0";
    canva.style.right = "0";

    document.getElementById('aumentar').hidden = true;
    document.querySelector('.play').hidden = false;
    document.querySelector('.pause').hidden = false;
    document.querySelector('.video').hidden = false;
    document.querySelector('.close').hidden = false;
    document.querySelector('.canvas1').hidden = true;
    document.querySelector('.imgFloat').hidden = true;

    let floatCircle = document.querySelector(".canvas");
    floatCircle.style.width = "";
    floatCircle.style.height = "";
    right();
}

const screenWidth1 = screen.width;
if (screenWidth1 <= 600) {
    middle();
} else { }


function hover() {

    const hover = document.querySelector(".canvas");
    hover.addEventListener('mouseover', function () {
        document.getElementById('close').hidden = false;
        document.getElementById('pause').hidden = false;

    });

    hover.addEventListener('mouseout', function () {
        document.getElementById('close').hidden = true;
        document.getElementById('pause').hidden = true;
    });
}

