/*troca da imagem principal do produto*/
const imgm = document.getElementById('imgm')
const btprevious = document.getElementById('btprevious')
const btnext = document.getElementById('btnext')

btprevious.addEventListener('click', ()=> button(-1))
btnext.addEventListener('click', ()=> button(1))

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