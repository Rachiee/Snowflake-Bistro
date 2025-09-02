import { menuArray } from '/data.js'


const menuList = document.getElementById('menu-list')
const orderSectionInner = document.getElementById('order-section-inner')
const modalBackground = document.getElementById('modal-background')
const message = document.getElementById('message')
const cardName = document.getElementById('card-name')
const paymentForm = document.getElementById('payment-form')
const orderArray = []



paymentForm.addEventListener('submit', function(e) {
    e.preventDefault()
})



document.addEventListener('click', function(e){
    if (e.target.dataset.addbtn){
        handleAddBtnClick(e.target.dataset.addbtn)
    } else if (e.target.dataset.removebtn){
        handleRemoveBtnClick(e.target.dataset.removebtn)
    } else if(e.target.dataset.orderbtn){
        handleOrderBtnClick()
    } else if (e.target.dataset.submitbtn){
        handleSubmitBtnClick()
    }
})



function handleAddBtnClick(itemId){
    const targetItemObj = menuArray.find(function(item){
        return parseInt(itemId) === item.id    
    })

    if (targetItemObj){
        orderArray.push(targetItemObj)
    }
    render()
}



function handleRemoveBtnClick(itemId){
    const targetItemIndex = orderArray.findIndex(function(item){
        return parseInt(itemId) === item.id
    })
    
    if (targetItemIndex > -1){
        orderArray.splice(targetItemIndex, 1)
    }
    render()
}



function handleOrderBtnClick(){
    modalBackground.classList.remove('hidden')
}



function handleSubmitBtnClick(){
    modalBackground.classList.add('hidden')
    orderSectionInner.classList.add('hidden')
    message.innerHTML = `
        <h3>Thanks, ${cardName.value}! Your order is on its way!</h3>
    `
    message.classList.remove('hidden')
}



const menuListHtml = menuArray.map(item => {
    const {name, ingredients, id, price, emoji, image} = item
    return ` <div class="menu-item">
                <div class="menuimgplusing">
                    <img src="${image}">
                    <div>
                        <h3>${name}</h3>
                        <p class="ing">${ingredients}</p>
                        <p>$${price}</p>
                    </div>
                </div>
                <button id="add-btn" data-addbtn="${id}">+</button>
            </div>
            <hr>
    `
}).join('')

menuList.innerHTML = menuListHtml




function render(){
    let orderHtml = `<h3>Your order</h3>`
    let totalPrice = 0
    
    orderArray.forEach(function(order){
        totalPrice += order.price
        orderHtml += ` 
            <div class="itemplusamount">
                <div class="itemplusremove">                        
                    <h4>${order.name}</h4>
                    <button data-removebtn="${order.id}">REMOVE</button>
                </div>
                <p>${order.price}</p>
            </div>
        `
    })
    
    orderHtml += `  
            <hr>
            <div class="total-price">
                <h4>Total price:</h4>
                <p>${totalPrice}</p>
            </div>
            <button class="order-btn" data-orderbtn="true">Complete Order</button>
    `
    orderSectionInner.innerHTML = orderHtml
    orderSectionInner.classList.remove('hidden')
}