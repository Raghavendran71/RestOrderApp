import { menuArray } from './data.js'

const orderList = document.getElementById('order-list')
const totalPrice = document.getElementById('total-price')
const orderBtn = document.getElementById('order-btn') 
const modal = document.getElementById('modal')
const orderComplete = document.getElementById('order-complete')

let cart = []



function renderMenu() {

    const menuItems = menuArray.map((menu) => { 
       return ` 
    <div class="menu-items">
      <div class="flex-container">
        <div>
          <p class="emoji">${menu.emoji}</p>
          </div>
        <div class="items">
          <p class="item-name">${menu.name}</p>
          <p class="ingredients">${menu.ingredients}</p>
          <p class="price">$${menu.price}</p>
          </div>
      </div>
        <div>
          <i class="fa-solid fa-plus" data-add="${menu.id}"></i>
          </div>
        
    </div>`
   

    }).join('')

    return menuItems   
    
}

document.getElementById('menu-items-container').innerHTML = renderMenu()



document.addEventListener('click', function(e){

    if(e.target.dataset.add){

    const itemObj = menuArray.filter(menu => {
      return menu.id === Number(e.target.dataset.add)
    })[0]

    document.querySelector('.order-total').hidden = false

      orderList.innerHTML += `
      <div class="order-list-block">
      <div class="sub-items">
        <p class="item-name">${itemObj.name}</p>
        <button class="remove" id="remove" data-remove="${itemObj.id}"> Remove </button>
      </div>
      <p class="item-price">$${itemObj.price}</p>
      </div>
    `

     cart.push(itemObj)

    const totalP = cart.reduce(function(total, itemPrice){
      return total + itemPrice.price
    }, 0)

    

    totalPrice.innerHTML = ` <p class="item-name" class="total">Total price: </p>
                  <p class="item-price"> $${totalP} </p> `
    }

    if(e.target.dataset.remove){

      cart = cart.filter(rmv => {
        return rmv.id !== Number(e.target.dataset.remove)
      })

       const totalP = cart.reduce(function(total, itemPrice){
      return total + itemPrice.price
    }, 0)
     

       totalPrice.innerHTML = ` <p class="item-name" class="total">Total price: </p>
                  <p class="item-price"> $${totalP} </p> `
      
       e.target.closest('.order-list-block').style.display = 'none' 

    }

    

})

orderBtn.addEventListener('click', function(){

modal.style.display = 'inline'


})

form.addEventListener('submit', function(e) {

    e.preventDefault()
  
  
  modal.style.display = 'none'

  orderList.style.display = 'none'

  document.querySelector('.order-total').hidden = true

  orderComplete.style.display = 'inline'
})






