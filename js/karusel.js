let count = 0;
document.querySelector('#addToCart').addEventListener('click', function(){
   document.getElementById('cart-count').innerHTML = count++;
})