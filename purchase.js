
// cart
 let cartIcon = document.querySelector("#cart-icon") ;
 let cart = document.querySelector(".cart") ;
 let closeCart = document.querySelector("#close-cart") ; 
 

// Openning the  Cart
 cartIcon.onclick = () =>
 {
     cart.classList.add("active");
     
 }

// Closing the Cart
 closeCart.onclick = () =>
 {
     cart.classList.remove("active");

 }
 
 //Cart working JavaScript
 if (document.readyState == 'loading')
 {
     document.addEventListener("DOMContentLoaded",ready);
 }
 else 
 {
     ready() ;
 }

 // ------------- CREATING THE FUNCTIONS ---------------

 function ready()
 {
     //Removing items from the cart
     var removeCartButtons = document.getElementsByClassName("cart-remove");
     //console.log(removeCartButtons) ;
     for ( var x = 0 ; x < removeCartButtons.length ; x++)
     {
        var button = removeCartButtons[x] ;
        button.addEventListener("click"  , removeCartItem) ;
     }
     //Changing the quantity
     var quantityInputs = document.getElementsByClassName("cart-quantity");
     for ( var x = 0 ; x < quantityInputs.length ; x++)
     {
        var input = quantityInputs[x] ;
        input.addEventListener("change" , quantityChanged ) ;
     }
     // Add to cart
     var addCart = document.getElementsByClassName("add-cart");
     for ( var x = 0 ; x < addCart.length ; x++)
     {
        var button = addCart[x] ;
        button.addEventListener("click" , addCartClicked ) ;
     }

     //buy button
     document
        .getElementsByClassName("btn-buy")[0]
        .addEventListener("click" , buyButtonClicked );
 }


function buyButtonClicked()
{
	if (!document.getElementsByClassName('cart-content')[0].hasChildNodes()) {
		alert (" Sorry ! Your Cart is Empty! ");
		return ;
	}
    alert (" Thank You ! Your Ticket Order is placed ! ") ;
    var cartContent = document.getElementsByClassName ("cart-content")[0] ;  
    while ( cartContent.hasChildNodes())
    {
        cartContent.removeChild(cartContent.firstChild) ;  
    }
    updateTotal () ; 
    
    var tObj = document.getElementsByClassName('donation');
    for(var x = 0; x < tObj.length; x++)
    {
        tObj[x].value='';
    }
}



 //Removing items from the cart
 function removeCartItem (event)
 {
     var confirmAction = confirm(" Are you sure to remove this item ? ");
        if (confirmAction) 
        {
          var buttonClicked = event.target ;
          buttonClicked.parentElement.remove() ;
          updateTotal () ; 
        } 
     
 }


 //Quantity changes
 function quantityChanged(event)
 {
     var input = event.target ;
     if ( isNaN (input.value) || input.value <= 0)
     {
         input.value = 1 ;
     }
     updateTotal () ;
 }


 //Add to cart
 function addCartClicked(event)
 {
    var button = event.target ;
    var shopProducts = button.parentElement.parentElement.parentElement ;   
    let title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    let price = shopProducts.getElementsByClassName("price")[0].innerText;
    let addon = shopProducts.getElementsByClassName('donation')[0].value;
    
    if (!addon) 
    {
        alert('Please select the duration of your visit for passes / the catagory for annual passes');
        return ;
    }
    addProductToCart ( title , `LKR. ${(+price.replace('LKR.', ''))+(+addon)}`) ;
    updateTotal () ;
 }


 function addProductToCart (title, price) 
 {
    var cartShopBox = document.createElement("div") ;
    cartShopBox.classList.add ("cart-box") ;
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for ( var x = 0 ; x < cartItemsNames.length ; x++)
    {
        if (cartItemsNames[x].innerHTML == title) {
            alert (" You have already added this item to the cart ! ") ;
            return ;
        }
    }


    var cartBoxContent = `
                        <div class = "detail-box">
                        <div class = "cart-product-title">${title}</div>
                        <div class = "cart-price">${price}</div>
                        <input type ="number" value = "1" class = "cart-quantity">
                        </div>
                        <i class="fa-solid fa-trash-can cart-remove"></i>` ;

    cartShopBox.innerHTML = cartBoxContent ;
    cartItems.append(cartShopBox) ;
    cartShopBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click" , removeCartItem);
    cartShopBox
        .getElementsByClassName("cart-quantity")[0]
        .addEventListener("change" , quantityChanged);
}





 // ------Updating the total-------

  function updateTotal ()
 {
     var cartContent = document.getElementsByClassName("cart-content")[0];
     var cartBoxes = cartContent.getElementsByClassName("cart-box");
     var total = 0 ;
     for ( var x = 0 ; x < cartBoxes.length ; x++)
     {
        var cartBox = cartBoxes[x] ;
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace( "LKR.","")) ;
        var quantity = quantityElement.value ;
        total = total + ( price * quantity ) ;
     }
        //If the price contain some cents values  
        total = Math.round(total * 100) / 100 ;

         document.getElementsByClassName("total-price")[0].innerText = "LKR." + total ;
        
     
 }