window.addEventListener('scroll', function(){
    let header = document.querySelector('.scroll')
    header.classList.toggle('anime', window.scrollY > 0);
})
function copy_email(){
    navigator.clipboard.writeText("Leonardolopessocial@gmail.com")
    alert('Copiado para Clipboard')
}