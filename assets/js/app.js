

let addToCart=document.querySelectorAll('.add-to-cart')
let cartCounter=document.querySelector('#cart-counter')

function updateCart(pizza){
    axios.post('cart/update',pizza).then(res=>{
        console.log(res)
        cartCounter.innerText=res.data.totalQty
        new Noty({
            text: "Notification text",
            layout:"topRight"
          }).show();
    })
}

addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e)
        let pizza=btn.dataset.pizza
        pizza=JSON.parse(pizza)
        updateCart(pizza)
    })
})




















// let addToCart=document.querySelectorAll(".add-to-cart")

// let cartCounter=document.querySelector("#cart-counter")

// function updateCart(pizza){
//    $.ajax({
//     url:"/cart/update",
//     method:'post',
//     data:pizza,
//     success:function(data){
//         // console.log(data)
//     },
//     error:function(error){
//         console.log(error.responseText)
//     }
//    })
// }

// function getRequest(){
//     $.ajax({
//         url:'/cart/update',
//         method:'get',
//         success: function(data) {
//             cartCounter.innerText=data.totalQty
//         },
//         error: function(error) {
//             console.error('Error retrieving total quantity:', error);
//         }
//     })
// }





// addToCart.forEach((btn)=>{
//     btn.addEventListener('click',function(e){
//         let pizza=JSON.parse(btn.dataset.pizza)
//         updateCart(pizza)
//         getRequest()
        
//     })
// })