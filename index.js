const stay = document.querySelector('#home');
window.addEventListener('scroll', () => {
    if(window.scrollY > 10){
        stay.classList.add('fixed')
    } else{
        stay.remove('fixed')
    }
})



