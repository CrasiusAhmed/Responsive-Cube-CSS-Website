let menuClick = document.querySelector('.menu-click')
let menu = document.querySelector('.menu')


let section1 = document.getElementById('hide1')
let section2 = document.getElementById('hide2')
let section3 = document.getElementById('hide3')
let section4 = document.getElementById('hide4')
let section5 = document.getElementById('hide5')
menuClick.onclick = function(){
    menu.classList.toggle('active')
    section1.classList.toggle('none')
    section2.classList.toggle('none')
    section3.classList.toggle('none')
    section4.classList.toggle('none')
    section5.classList.toggle('none')
}








/* *************** StyleSheet For Javascript ************** */


let Cube1 = {
    width: '200px',
    height: '100px',
}
let Cube2 = {
    width: '0px',
    height: '100px', 
    transition: '2s',
}
let Cube3 = {
    transform: 'scale(0)', 
    transition: '.6s linear .3s',
}
let IconShow = {
    opacity: '1',
    transition: '.4s ease-out 1.2s',
}
let styleBoxHide = {
    transform: "translateY(20px)",
    opacity: "0",
    transition: ".2s ease-out",
    zIndex: "-1"
}

let BoxHide = {
    opacity: '0', 
    transition: '.3s ease-out', 
    zIndex: '-1',
}
let CardInsideShow = {
    opacity: '1', 
    zIndex: '1',
}

/* *************** StyleSheet For Javascript ************** */







/* _____________HOVER________________ */

let hoverMenu = document.getElementById('hover-menu')

let hoverMenu2 = document.getElementById('hover-menu2')
let hoverMenu3 = document.getElementById('hover-menu3')

let iconHover1 = document.querySelector('.icon-hover1')
let iconHover2 = document.querySelector('.icon-hover2')
let iconHover3 = document.querySelector('.icon-hover3')
let iconHover4 = document.querySelector('.icon-hover4')

let secondMenu = document.querySelector('.second-menu')

let Hover1 = document.getElementById('Hover1')
let Hover2 = document.getElementById('Hover2')
let Hover3 = document.getElementById('Hover3')
let Hover4 = document.getElementById('Hover4')


Hover1.onmouseenter = function(){
    Object.assign(hoverMenu.style, Cube1);
    Object.assign(hoverMenu2.style, Cube2);
    Object.assign(hoverMenu3.style, Cube3);
    Object.assign(iconHover1.style, IconShow);
    secondMenu.classList.add('roti')
}
Hover1.onmouseleave = function(){
    hoverMenu.style = "unset;"
    hoverMenu2.style = "unset;"
    hoverMenu3.style = "transform: scale(1); transition: .6s linear .3s;"
    iconHover1.style = "unset;"
    secondMenu.classList.remove('roti')
}


Hover2.onmouseenter = function(){
    Object.assign(hoverMenu.style, Cube1);
    Object.assign(hoverMenu2.style, Cube2);
    Object.assign(hoverMenu3.style, Cube3);
    Object.assign(iconHover2.style, IconShow);
    secondMenu.classList.add('roti')
}
Hover2.onmouseleave = function(){
    hoverMenu.style = "unset;"
    hoverMenu2.style = "unset;"
    hoverMenu3.style = "transform: scale(1); transition: .6s linear .3s;"
    iconHover2.style = "unset;"
    secondMenu.classList.remove('roti')
}

Hover3.onmouseenter = function(){
    Object.assign(hoverMenu.style, Cube1);
    Object.assign(hoverMenu2.style, Cube2);
    Object.assign(hoverMenu3.style, Cube3);
    Object.assign(iconHover3.style, IconShow);
    secondMenu.classList.add('roti')
}
Hover3.onmouseleave = function(){
    hoverMenu.style = "unset;"
    hoverMenu2.style = "unset;"
    hoverMenu3.style = "transform: scale(1); transition: .6s linear .3s;"
    iconHover3.style = "unset;"
    secondMenu.classList.remove('roti')
}

Hover4.onmouseenter = function(){
    Object.assign(hoverMenu.style, Cube1);
    Object.assign(hoverMenu2.style, Cube2);
    Object.assign(hoverMenu3.style, Cube3);
    Object.assign(iconHover4.style, IconShow);
    secondMenu.classList.add('roti')
}
Hover4.onmouseleave = function() {
    hoverMenu.style = "unset;"
    hoverMenu2.style = "unset;"
    hoverMenu3.style = "transform: scale(1); transition: .6s linear .3s;"
    iconHover4.style = "unset;"
    secondMenu.classList.remove('roti')
}






















/* ________PLAN_________ */

let f1Box = document.getElementById('f1-box')
let cardInside1 = document.querySelector('.card-inside1')


let f2Box = document.getElementById('f2-box')
let cardInside2 = document.querySelector('.card-inside2')


let f3Box = document.getElementById('f3-box')
let cardInside3 = document.querySelector('.card-inside3')
let fPs = document.querySelector('.f-ps')



let Detail1 = document.getElementById('Detail1')
let Detail2 = document.getElementById('Detail2')
let Detail3 = document.getElementById('Detail3')

let Reset1 = document.getElementById('Reset1')
let Reset2 = document.getElementById('Reset2')
let Reset3 = document.getElementById('Reset3')

Detail1.onclick = function(){
    f1Box.classList.add('scale1')
    Object.assign(f2Box.style, BoxHide);
    Object.assign(f3Box.style, BoxHide);
    Object.assign(cardInside1.style, CardInsideShow);
    fPs.style.display = 'block'
}
Reset1.onclick = function(){
    f1Box.classList.remove('scale1')
    f2Box.style = 'unset'
    f3Box.style = 'unset'
    cardInside1.style = 'opacity: 0; z-index: -1; transition: .3s ease-out;'
    fPs.style = 'unset'
}



Detail2.onclick = function(){
    Object.assign(f1Box.style, BoxHide);
    f2Box.classList.add('scale2')
    Object.assign(f3Box.style, BoxHide);
    Object.assign(cardInside2.style, CardInsideShow);
    fPs.style.display = 'block'
}
Reset2.onclick = function(){
    f1Box.style = 'unset'
    f2Box.classList.remove('scale2')
    f3Box.style = 'unset'
    cardInside2.style = 'opacity: 0; z-index: -1; transition: .3s ease-out;'
    fPs.style = 'unset'
}

Detail3.onclick = function(){
    Object.assign(f1Box.style, BoxHide);
    Object.assign(f2Box.style, BoxHide);
    f3Box.classList.add('scale3')
    Object.assign(cardInside3.style, CardInsideShow);
    fPs.style.display = 'block'
}
Reset3.onclick = function(){
    f1Box.style = 'unset'
    f2Box.style = 'unset'
    f3Box.classList.remove('scale3')
    cardInside3.style = 'opacity: 0; z-index: -1; transition: .3s ease-out;'
    fPs.style = 'unset'
}





















/* scroll function */

const TextAnimation1 = document.querySelectorAll('.scroll-text');
const BoxCard = document.querySelectorAll('.box-card');
const F1Box = document.querySelectorAll('.f1-box');
const F3Box = document.querySelectorAll('.f3-box');
const ScrollTopAnimation = document.querySelectorAll('.scroll-top');
const CubeAbout = document.querySelector('.cube-bg');
const ScrollOpacityAnimation = document.querySelectorAll('.scroll-opacity');


const F1 = document.querySelectorAll('.f1');
const F2 = document.querySelectorAll('.f2');
const F3 = document.querySelectorAll('.f3');

const Width = document.querySelectorAll('.scroll-width');




window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
   const triggerBottom = (window.innerHeight / 4) * 2.5;



    TextAnimation1.forEach((TextAnimation1) => {
        const ScrollText = TextAnimation1.getBoundingClientRect().top;
  
        if (ScrollText < triggerBottom) {
            TextAnimation1.classList.add('show');
        } else {
            TextAnimation1.classList.remove('show');
        }
    });

    BoxCard.forEach((BoxCard) => {
        const ScrollBoxs = BoxCard.getBoundingClientRect().top;
  
        if (ScrollBoxs < triggerBottom) {
            BoxCard.classList.add('show');
        } else {
            BoxCard.classList.remove('show');
        }
    });

    F1Box.forEach((F1Box) => {
        const ScrollBox1 = F1Box.getBoundingClientRect().top;
  
        if (ScrollBox1 < triggerBottom) {
            F1Box.classList.add('show');
        } else {
            F1Box.classList.remove('show');
        }
    });

    F3Box.forEach((F3Box) => {
        const ScrollBox3 = F3Box.getBoundingClientRect().top;
  
        if (ScrollBox3 < triggerBottom) {
            F3Box.classList.add('show');
        } else {
            F3Box.classList.remove('show');
        }
    });

    ScrollTopAnimation.forEach((ScrollTopAnimation) => {
        const NewScroll = ScrollTopAnimation.getBoundingClientRect().top;
  
        if (NewScroll < triggerBottom) {
            ScrollTopAnimation.classList.add('show');
        } else {
            ScrollTopAnimation.classList.remove('show');
        }
    });

    const ScrollCube = CubeAbout.getBoundingClientRect().top;
    if (ScrollCube < triggerBottom) {
        CubeAbout.classList.add('show');
    } else {
        CubeAbout.classList.remove('show');
    }

    ScrollOpacityAnimation.forEach((ScrollOpacityAnimation) => {
        const ScrollOpacity = ScrollOpacityAnimation.getBoundingClientRect().top;
  
        if (ScrollOpacity < triggerBottom) {
            ScrollOpacityAnimation.classList.add('show');
        } else {
            ScrollOpacityAnimation.classList.remove('show');
        }
    });


    F1.forEach((F1) => {
        const ScrollF1 = F1.getBoundingClientRect().top;
  
        if (ScrollF1 < triggerBottom) {
            F1.classList.add('show');
        } else {
            F1.classList.remove('show');
        }
    });

    F2.forEach((F2) => {
        const ScrollF2 = F2.getBoundingClientRect().top;
  
        if (ScrollF2 < triggerBottom) {
            F2.classList.add('show');
        } else {
            F2.classList.remove('show');
        }
    });


    F3.forEach((F3) => {
        const ScrollF3 = F3.getBoundingClientRect().top;
  
        if (ScrollF3 < triggerBottom) {
            F3.classList.add('show');
        } else {
            F3.classList.remove('show');
        }
    });

    Width.forEach((Width) => {
        const ScrollWidth = Width.getBoundingClientRect().top;
  
        if (ScrollWidth < triggerBottom) {
            Width.classList.add('show');
        } else {
            Width.classList.remove('show');
        }
    });


}




