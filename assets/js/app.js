import axios from "axios"


let addToCart=document.querySelectorAll(".add-to-cart")

function updateCart(pizza){

}


addToCart.forEach((btn)=>{
    btn.addEventListener('click',function(e){
        let pizza=JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
        console.log(pizza)
    })
})