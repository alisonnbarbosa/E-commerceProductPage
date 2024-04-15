/*troca a imagem principal do produto*/
const imgm = document.getElementById('imgm')
document.getElementById('btprevious').addEventListener('click', ()=> button(-1))
document.getElementById('btnext').addEventListener('click', ()=> button(1))

let num = 1

function button(c){
    num = num + c

    if(num > 4){
        num = 1
    } else if(num < 1){
        num = 4
    }
    img(num)
}

function img(num){
    imgm.src = `img/image-product-${num}.jpg`
}

/*navbar responsivo*/
const navbar = document.getElementById('navbar')

document.getElementById('menu').addEventListener('click', ()=> navbar.style.transform = 'translateX(0)')
document.getElementById('close').addEventListener('click', ()=> navbar.style.transform = 'translateX(-100%)')

/*button quantidade produto*/
const outnum = document.getElementById('outnum')
document.getElementById('plus').addEventListener('click', ()=> numproduto(1))
document.getElementById('minus').addEventListener('click', ()=> numproduto(-1))

let c = 0

function numproduto(num){
    c = c + num

    if(c < 0){
        c = 0
        return
    }

    outnum.textContent = c
}
/*indicar a quantidade de produtos no cart*/
const indicador = document.getElementById('indicador')
document.getElementById('addcart').addEventListener('click', ()=> indicar())

function indicar(){
    if(c > 0){
        indicador.textContent = c
    }
}