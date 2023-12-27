const clouds = document.querySelectorAll('.cloud'),
fantasy = document.querySelector('.fantasy'),
boat = document.querySelector('.boat');

window.addEventListener('scroll', () => {
    let y = window.scrollY;
    let boatSpeed = boat.getAttribute('data-speed');
    boat.style.transform = `translateX(${ y * boatSpeed}px)`;
    clouds.forEach(function(el){
        let speed = el.getAttribute('data-speed')
        let x = window.scrollY
        el.style.transform = `translateX(${ x * speed}px)`
    })
})


const title = document.querySelector('.header__title');
const text = title.innerHTML
title.innerHTML = ''
function type(i=0) {
    title.innerHTML += text[i]
    i++
    if (i < text.length) {
        setTimeout(() => {
            type(i)
        }, 100);
    }
}
type()

const paralaxBox = document.querySelector('.paralax__box'),
layer = document.querySelectorAll('.layer');
paralaxBox.addEventListener('mousemove', function (e) {
    let x = (e.pageX + window.innerWidth) / 50,
     y = (e.pageX + window.innerHeight) / 50
     layer.forEach(function (el) {
        let speed = el.getAttribute('data-speed')
        el.style.transform = `translate(${x * speed}px,${y * speed}px)`
     })
})


const timerNum = document.querySelector('.timer__num'),
timerNum2 = document.querySelector('.timer__num2'),
timerNum3 = document.querySelector('.timer__num3'),
timerNum4= document.querySelector('.timer__num4');
let i=0

    function update() {
      document.querySelector('.timer__num').innerText = i;
      i++;
      if (i <= 32) {
        setTimeout(update, 100);
      }
    }
    update();
    

    function updates() {
        document.querySelector('.timer__num2').innerText = i;
        i++;
        if (i <= 196) {
          setTimeout(updates, 100);
        }
      }
      updates();

      function updatess() {
        document.querySelector('.timer__num3').innerText = i;
        i++;
        if (i <= 245) {
          setTimeout(updatess, 100);
        }
      }
      updatess();

      function updatesss() {
        document.querySelector('.timer__num4').innerText = i;
        i++;
        if (i <= 95 ) {
          setTimeout(updatesss, 100);
        }
      }
      updatesss();
      
//setTimeout(() => {
//    if (i.innerHTML == 'window') {
//        timerNum.innerHTML = i++
//    }
//}, 1000);