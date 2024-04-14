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