/*troca img principal via imgs*/
const imgm1 = document.getElementById('imgm1')
const imgm2 = document.getElementById('imgm2')
const imgm3 = document.getElementById('imgm3')
const imgm4 = document.getElementById('imgm4')

imgm1.addEventListener('click', ()=>img(1))
imgm2.addEventListener('click', ()=>img(2))
imgm3.addEventListener('click', ()=>img(3))
imgm4.addEventListener('click', ()=>img(4))

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
/*exibi lightbox*/
const lightbox = document.getElementById('lightbox')

imgm.addEventListener('click', ()=> {
    if(window.innerWidth > 768){
        lightbox.style.display = 'flex'
    }
})
document.getElementById('btclosel').addEventListener('click', ()=> lightbox.style.display = 'none')

/*navbar responsivo*/
const navbar = document.getElementById('navbar')

document.getElementById('menu').addEventListener('click', ()=> navbar.style.transform = 'translateX(0)')
document.getElementById('close').addEventListener('click', ()=> navbar.style.transform = 'translateX(-100%)')

/*button quantidade produto*/
const outnum = document.getElementById('outnum')
document.getElementById('btplus').addEventListener('click', ()=> numproduto(1))
document.getElementById('btminus').addEventListener('click', ()=> numproduto(-1))

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
document.getElementById('addcart').addEventListener('click', ()=> {
    indicar()
    c=0
    numproduto(0)
})

function indicar(){
    if(c > 0){
        indicador.textContent = c
    } else{
        indicador.textContent = ''
    }
}

/*exibi o cart*/
const cartcontainer = document.getElementById('cartcontainer')

document.getElementById('btcart').addEventListener('click', ()=> exibircart())

let cc = 0

function exibircart(){
    criarcart()
    cc++
    if(cc % 2 != 0){
        cartcontainer.style.display = 'flex'
    } else{
        cartcontainer.style.display = 'none'
    }
}

/*cria o cart*/
function criarcart(){
    if(indicador.textContent > 0){
        cartcontainer.innerHTML = `<h1 class="font-bold">Cart</h1>
        <hr>
        <div class="flex items-center justify-between">
        <img src="img/image-product-1-thumbnail.jpg" alt="" class="w-12">
        <div class="flex flex-col">
            <p class="">Fall Limited Edition Sneakers</p>
            <p class="">
                $125.00 x
                <span class="" id="x"></span>
                <span class="font-bold" id="total"></span>
            </p>
        </div>
        <button id="btdelete" class="p-2">
            <img src="img/icon-delete.svg" alt="delete">
        </button>
    </div>
    <button class="font-bold text-white bg-orange-600 py-2 rounded-xl hover:bg-orange-400 duration-150">
        Checkout
    </button>`

    document.getElementById('btdelete').addEventListener('click', ()=> removercart())

    document.getElementById('x').textContent = `${indicador.textContent}`
    document.getElementById('total').textContent = `$${indicador.textContent * 125}.00`
    } else{
        removercart()
    }
}

function removercart(){
    indicar()
    cartcontainer.innerHTML = `<h1 class="font-bold">Cart</h1>
        <hr>
        <div class="flex items-center justify-center h-full">
        <p class="text-stone-500">Your cart is empty.</p>
    </div>`
}