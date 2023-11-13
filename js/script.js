// querySelector = seletor de elementos
const botaoTema = document.querySelector("#botaoTema") 
// addEventListener = adiciona um evento
botaoTema.addEventListener('click', mudaTema)

function mudaTema(){
    let body = document.querySelector("body")
    let temaAtual = document.querySelector("#temaAtual")
    let imgLogo = document.querySelector("#imgLogo")

    if(botaoTema.checked){
        body.setAttribute('data-bs-theme','dark')
        temaAtual.innerHTML = "Dark"
        imgLogo.setAttribute('src','image/logo/logoWhite.svg' )
    }
    else{
        body.setAttribute('data-bs-theme','light')
        temaAtual.innerHTML = "light"
        imgLogo.setAttribute('src','image/logo/logoWithName.svg')
    }
}