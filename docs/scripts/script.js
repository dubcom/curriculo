window.addEventListener('scroll', function(){
    let header = document.querySelector('.scroll')
    header.classList.toggle('anime', window.scrollY > 0);
})
