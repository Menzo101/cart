let cartContainer = document.getElementById("cart-container");
let addButton = document.getElementById("addButton");
let removeButton = document.getElementById("removeButton");
let totalPrice = document.getElementById("total-price");

let cartItem = []
let totalPackage = 0;
addButton.addEventListener("click" , addItem);

removeButton.addEventListener("click",removeItem)

function addItem(){
    const item ={
        name : "product",
        price: 10
    };
    cartItem.push(item);
    totalPackage += item.price;
    updateCartDisplay()
}
function removeItem(){
   if(cartItem.length > 0){
    const removeItem = cartItem.pop();
    totalPrice -= removeItem.price;
    updateCartDisplay()
   }  
}
function updateCartDisplay(){
 cartContainer.innerHTML = " ";

 if(cartItem.length === 0){
    cartContainer.innerHTML = " <p>your cart is empty</p>";   
 }else{
    cartItem.forEach(item =>{
        const itemElement = document.createElement("div")

        itemElement.classList.add("cart-item");
itemElement.innerHTML = `<p>${item.name} </p> <p>${item.price} </p>
        `;

        cartContainer.appendChild(itemElement)
    })
 }
 totalPrice.textContent = `$${totalPackage}`
 
    
 }
