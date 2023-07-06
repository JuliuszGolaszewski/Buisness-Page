const myButton = document.querySelector('.button');

myButton.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav--js');
    const link1 = document.querySelector('.bro1');
    link1.classList.toggle('show');
    const link2 = document.querySelector('.bro2');
    link2.classList.toggle('show');
    const link3 = document.querySelector('.bro3');
    link3.classList.toggle('show');
    const link4 = document.querySelector('.bro4');
    link4.classList.toggle('show');
    const link5 = document.querySelector('.bro5');
    link5.classList.toggle('show');
    const link6 = document.querySelector('.bro6');
    link6.classList.toggle('show');
})