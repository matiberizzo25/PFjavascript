// evento para Blur en el header cuando se hace scroll

window.addEventListener('scroll',(e)=>{
    let header = document.querySelector('.navBar');
    header.classList.toggle('abajo', window.scrollY > 100);
})

// evento para cambiar backgrounds:

const bg = document.querySelector('.bg');
const changeBtn = document.querySelectorAll('.changeBg');

changeBtn.forEach(change => {
    change.addEventListener('click',(e)=>{
        bg.classList.toggle('bg2');
    })
})

// efecto "parallax" para el banner:

const parallax = document.querySelector('.parallax');
const infoParallax = document.querySelector('.info');

window.addEventListener('scroll', (e) => {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = `${offset * 0.5}px`;
    infoParallax.style.transform = `translateY(${offset * 0.43}px)`;
})
