function abrirMenu(){
   document.querySelector('nav').style.width = '200px'
   document.querySelector('main').style.marginLeft = '200px'
   document.querySelector('footer').style.marginLeft = '200px'
   document.querySelector('footer').style.padding = '25px'
}
function fecharMenu(){
    document.querySelector('nav').style.width = '0px'
    document.querySelector('h2').style.display = 'block'
    document.querySelector('footer').style.marginLeft = '0px'
    document.querySelector('main').style.marginLeft = '0px'
    document.querySelector('footer').style.padding = '10px'
}

//SEPARADOR DE MENÚ

function abrirMenuDireito(){
    document.querySelector('aside').style.width = '100%'

}
function feecharMenuDireito(){
    document.querySelector('aside').style.width = '0px'
   
}