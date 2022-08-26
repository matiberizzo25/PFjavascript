
// Blur en el header cuando se hace scroll

window.addEventListener('scroll',(e)=>{
    let header = document.querySelector('.navBar');
    header.classList.toggle('abajo', window.scrollY > 100);
})

// Cambiar backgrounds:

const bg = document.querySelector('.bg');
const changeBtn = document.querySelectorAll('.changeBg');

changeBtn.forEach(change => {
    change.addEventListener('click',(e)=>{
        bg.classList.toggle('bg2');
    })    
})

