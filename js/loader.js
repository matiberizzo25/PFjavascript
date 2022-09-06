let welcomeLoader = () => {
    sessionStorage.setItem('welcome', 'true');
    let loadPage = document.createElement('div');
    let loadText = document.createElement('h1')
    let loadSubText = document.createElement('h3')
    loadSubText.innerText = 'Bienvenido a '
    loadText.innerText = 'ESVIDEO GAMES';
    loadText.className = 'animate__animated animate__fadeIn animate__delay-3s animate__slow';
    loadSubText.className = 'animate__animated animate__fadeInDown animate__delay-1s animate__slow'; 
    loadPage.className = 'loader';
    document.body.appendChild(loadPage);
    loadPage.appendChild(loadSubText);
    loadPage.appendChild(loadText);
    setTimeout(() => {
        loadText.classList.add('textShadow');
    }, 4000);
    setTimeout(() => {
        loadPage.classList.add('animate__animated', 'animate__fadeOut', 'animate__medium');
    }, 6000);
    setTimeout(() => {
        loadPage.remove();
    }, 6800);
}

window.addEventListener('load', () => {
    welcomeLoader();
})

if(sessionStorage.getItem('welcome') === 'true'){
    welcomeLoader = () => {
        return;
    } 
}