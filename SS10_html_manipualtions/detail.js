let productID= parseInt(localStorage.getItem('selectedProductID'));
let products = JSON.parse(localStorage.getItem('products'));
let product = products.find(function(value) {
    return value.id === productID
});
console.log(product);
