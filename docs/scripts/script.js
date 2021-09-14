window.addEventListener('scroll', function(){
    let header = document.querySelector('.scroll')
    header.classList.toggle('anime', window.scrollY > 0);
})
function copy_email(){
    navigator.clipboard.writeText("Leonardolopessocial@gmail.com")
    alert('Email copiado para Clipboard')
}
function inicial_width(){
    let sobre_img = document.querySelector('div#sobre_container')
    sobre_img.classList.toggle('pequeno', window.innerWidth < 760)
}
window.addEventListener('resize', function(){ 
    let sobre_img = document.querySelector('div#sobre_container')
    sobre_img.classList.toggle('pequeno', window.innerWidth < 760)
})
window.addEventListener('resize', function(){ 
    let header = document.querySelector('header')
    header.classList.toggle('pequeno', window.innerWidth < 760)
})