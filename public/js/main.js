///////////////  NAVIGATION  ////////////////////////

let navSpan = document.getElementsByClassName('nav-span');

for(let i = 0; i < navSpan.length; i++) {
    navSpan[i].addEventListener('click', (e) => {
        removeActive()
        e.target.classList.add('navigation-active')
    })
}

const removeActive = () => {
    for(let i = 0; i < navSpan.length; i++) {
        navSpan[i].classList.remove('navigation-active')
    }
}


//////////////  SECTION-SCRIPT LEVEL  //////////////////

var levelQuantity = document.getElementsByClassName('level-quantity')
var levelPointer = document.querySelector('.level-pointer')
var levelBtn = document.getElementsByClassName('level-btn')

var position
var koorX 

for(let i = 0; i < levelBtn.length; i++) {
    levelBtn[i].addEventListener('click', (e) => {
        addActive(3-i)
        position = levelBtn[i].getBoundingClientRect();
        koorX = position.x - 180
        console.log(e);
        levelPointer.style.transform = 'translateX('+ koorX + 'px)';
    })
}

const addActive = (index) => {
    for(let j = 0; j < index; j++) {
        levelQuantity[j].style.opacity = '1';
    }
    for(let j = index; j < levelQuantity.length; j++) {
        levelQuantity[j].style.opacity = '0';
    }
}