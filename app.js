const canvas = document.getElementById("canvas");
const image = new Image();
image.src = './foto.png';
image.onload = drawImage;

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


}

function pause() {
    video.pause();
    document.getElementById('play').hidden = false;
    document.getElementById('pause').hidden = true;
}

function right() {
    let canva = document.querySelector('.canvas');
    canva.style.position = "fixed";
    canva.style.top = "60%";
    canva.style.left = "71%";

}

function left() {
    let canva = document.querySelector('.canvas');
    canva.style.position = "fixed";
    canva.style.top = "60%";
    canva.style.left = "10px";
}

function middle() {
    let canva = document.querySelector('.canvas');
    canva.style.position = "fixed";
    canva.style.top = "60%";
    canva.style.left = "36.2%";
}

function circle() {
    document.querySelector('.play').hidden = true;
    document.querySelector('.pause').hidden = true;
    document.querySelector('.video').hidden = true;
    document.querySelector('.close').hidden = true;

    let canva = document.querySelector('.canvas');
    canva.hidden = false;
    canva.style.position = "fixed";
    canva.style.top = "85%";
    canva.style.left = "91%";
    canva.style.borderRadius = "50%";
    canva.style.width = "100px";
    canva.style.height = "100px";

    if (document.querySelector('.voltar') && document.querySelector('.imgFloat')) {
        document.getElementById('aumentar').hidden = false;
        document.querySelector('.imgFloat').hidden = false;
    } else {
        back();
        criaImagen();
        imgFloat();
        pause();
        document.querySelector('.play').hidden = true;
    }

}

function imgFloat() {
    let image = document.createElement('img');
    image.src = "./foto.png";
    document.querySelector('.canvas').appendChild(image);
    image.style.borderRadius = "100%";
    image.style.width = "100px";
    image.style.height = "100px";

    let att = document.createAttribute("class");
    att.value = "imgFloat";
    image.setAttributeNode(att);
}


function back() {
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
    document.getElementById('aumentar').hidden = true;
    document.querySelector('.play').hidden = false;
    document.querySelector('.pause').hidden = true;
    document.querySelector('.video').hidden = false;
    document.getElementById('close').hidden = false;
    document.querySelector('.canvas1').hidden = true;
    document.querySelector('.imgFloat').hidden = true;
    let player = document.querySelector('.play');
    player.style.top = "115px";
    player.style.left = "170px";
    right();
}

let videoArea = document.querySelector('.canvas');
videoArea.style.cursor = "move";


dragElement(document.querySelector('.canvas'));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}