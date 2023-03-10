


 const addProducts = ()=>{
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');

    const product = productName.value;
    const quantity = productQuantity.value; 

    // clear inputField 
    productName.value='';
    productQuantity.value='';

    // console.log(product,quantity); 
    showDisplayProduct(product,quantity); 
    saveProductToLocalStored(product,quantity) 
 }

 const showDisplayProduct = (product,quantity)=>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText=`${product}: ${quantity}`;
    productContainer.appendChild(li);
 }

 const getStoreShoppingCart = ()=>{
    let card = {};
    const storedCard = localStorage.getItem('card');
   
    if(storedCard){
         card = JSON.parse(storedCard);
    }
    return card;

 }

 const saveProductToLocalStored = (product,quantity)=>{
    const card = getStoreShoppingCart();
    card[product]=quantity;
    console.log(card);
    const cardStringified = JSON.stringify(card);
    localStorage.setItem('card', cardStringified);

 }

 const displayProductLocalStorage = ()=>{
    const savedCard = getStoreShoppingCart();
    for(product in savedCard){
        const quantity = savedCard[product];
        console.log(savedCard,quantity);
        showDisplayProduct(product, quantity)
    }

 }
 displayProductLocalStorage();
