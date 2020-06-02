let products = [
    {
        id:1,
    img:'https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-400x460.png',
    name: 'Điện thoại iPhone 11 Pro Max 512GB',
    brand: 'Apple' ,
    price:42e6 ,
    },
    {
        id:2,
        img:'https://cdn.tgdd.vn/Products/Images/42/210655/iphone-11-pro-256gb-black-400x460.png',
        name: 'Điện thoại iPhone 11 Pro 256GB',
        brand: 'Apple' ,
        price:34e6 ,
    },
    {
        id:3,
        img:'https://cdn.tgdd.vn/Products/Images/42/190322/iphone-xs-max-256gb-white-400x460.png',
        name: 'Điện thoại iPhone Xs Max 256GB',
        brand: 'Apple' ,
        price:30e6 ,
    },
    {
        id:4,
        img:'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-1-400x460.png',
        name: 'Điện thoại iPhone 8 Plus 64GB',
        brand: 'Apple' ,
        price:15e6 ,
    },
    {
        id:5,
        img:'https://cdn.tgdd.vn/Products/Images/42/198158/samsung-galaxy-fold-black-400x460.png',
        name: 'Điện thoại Samsung Galaxy Fold',
        brand: 'Samsung ' ,
        price:50e6 ,
    },
    {
        id:6,
        img:'https://cdn.tgdd.vn/Products/Images/42/213022/samsung-galaxy-z-flip-chitiet-2-788x544.png',
        name: 'Điện thoại Samsung Galaxy Z Flip',
        brand: 'Samsung' ,
        price:36e6 ,
    },
    {
        id:7,
        img:'https://cdn.tgdd.vn/Products/Images/42/194251/samsung-galaxy-s10-lite-blue-chi-tiet-400x460.png',
        name: 'Điện thoại Samsung Galaxy S10 Lite',
        brand: 'Sumsung' ,
        price:14e6 ,
    },
    {
        id:8,   
        img:'https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-400x460.png',
        name: 'Điện thoại Samsung Galaxy A31',
        brand: 'Samsung' ,
        price:6.5e6 ,
    },
    {
        id:9, 
        img:'https://cdn.tgdd.vn/Products/Images/42/213590/xiaomi-mi-note-10-pro-black-400x460.png',
        name: 'Điện thoại Xiaomi Mi Note 10 Pro',
        brand: 'Xiaomi' ,
        price:14e6 ,
    },
    {
        id:10, 
        img:'https://cdn.tgdd.vn/Products/Images/42/220851/xiaomi-mi-note-10-lite-400x460-trang-1-400x460.png',
        name: 'Điện thoại Xiaomi Mi Note 10 Lite',
        brand: 'Xiaomi' ,
        price:10e6 ,
    },
    {
        id:11,
        img:'https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-400x460-400x460.png',
        name: 'Điện thoại Xiaomi Redmi Note 9S',
        brand: 'AXiaomi' ,
        price:6e6 ,
    },
];
function showProduct( listProduct){
let tbody = document.getElementById('list-products')
tbody.innerHTML='';
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    let html = `<tr> 
    <td>${i+1}</td>
    <td><img src="${product.img}" width="100" alt=""></td>
    <td>${product.name}</td>
    <td>${product.brand}</td>
    <td>${product.price}</td> 
    <td><button class="btn btn-link" onclick="showDetail(${product.id})">"Detail"</button></td>
    </tr>`
    tbody.innerHTML +=html;

    
}
} ;
showProduct(products);
function showDetail(id){
    //save productId selected
    localStorage.setItem('selectedProductID',id);
    localStorage.setItem('products',JSON.stringify(products));
    //redirect
    window.location.href = "detail.html";
};

function search(){
    let sName = document.getElementById('search-product-name').value;
    if (sName.trim()!=='') {
        
       result = products.filter(function(value){
           return value.name.toLocaleLowerCase().includes(sName.trim().toLocaleLowerCase());
       });
        
    }showProduct(result);
    
}
