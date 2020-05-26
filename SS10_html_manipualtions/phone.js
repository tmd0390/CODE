let listphones = [
    {
    img:'https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-400x460.png',
    name: 'Điện thoại iPhone 11 Pro Max 512GB',
    brand: 'Apple' ,
    price:42e6 ,
    },
    {
        img:'https://cdn.tgdd.vn/Products/Images/42/210655/iphone-11-pro-256gb-black-400x460.png',
        name: 'Điện thoại iPhone 11 Pro 256GB',
        brand: 'Apple' ,
        price:34e6 ,
    },
    {
        img:'https://cdn.tgdd.vn/Products/Images/42/190322/iphone-xs-max-256gb-white-400x460.png',
        name: 'Điện thoại iPhone Xs Max 256GB',
        brand: 'Apple' ,
        price:30e6 ,
    },
    {
        img:'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-1-400x460.png',
        name: 'Điện thoại iPhone 8 Plus 64GB',
        brand: 'Apple' ,
        price:15e6 ,
    },
    {
        img:'https://cdn.tgdd.vn/Products/Images/42/198158/samsung-galaxy-fold-black-400x460.png',
        name: 'Điện thoại Samsung Galaxy Fold',
        brand: 'Samsung ' ,
        price:50e6 ,
    },
    {
        img:'https://cdn.tgdd.vn/Products/Images/42/213022/samsung-galaxy-z-flip-chitiet-2-788x544.png',
        name: 'Điện thoại Samsung Galaxy Z Flip',
        brand: 'Samsung' ,
        price:36e6 ,
    },
    {
        img:'https://cdn.tgdd.vn/Products/Images/42/194251/samsung-galaxy-s10-lite-blue-chi-tiet-400x460.png',
        name: 'Điện thoại Samsung Galaxy S10 Lite',
        brand: 'Sumsung' ,
        price:14e6 ,
    },
    {
        img:'https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-400x460.png',
        name: 'Điện thoại Samsung Galaxy A31',
        brand: 'Samsung' ,
        price:6.5e6 ,
    },
    {
        img:'https://cdn.tgdd.vn/Products/Images/42/213590/xiaomi-mi-note-10-pro-black-400x460.png',
        name: 'Điện thoại Xiaomi Mi Note 10 Pro',
        brand: 'Xiaomi' ,
        price:14e6 ,
    },
    {
        img:'https://cdn.tgdd.vn/Products/Images/42/220851/xiaomi-mi-note-10-lite-400x460-trang-1-400x460.png',
        name: 'Điện thoại Xiaomi Mi Note 10 Lite',
        brand: 'Xiaomi' ,
        price:10e6 ,
    },
    {
        img:'https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-400x460-400x460.png',
        name: 'Điện thoại Xiaomi Redmi Note 9S',
        brand: 'AXiaomi' ,
        price:6e6 ,
    },
];
let tbody = document.getElementById('phones')
for (let i = 0; i < listphones.length; i++) {
    const phone = listphones[i];
    // let html = `<tr>
    // <td class="col-4"><img src="${phone.img}" width="250"></td>
    // <td>${phone.name}</td>
    // <td>${phone.brand}</td>
    // <td>${phone.price}</td>
    // </tr>`
    let html =`<div class="media">
    <img src="${phone.img}" class="mr-3" width="100" alt="...">
    <div class="media-body">
      <h5 class="mt-0">${phone.name}</h5>
      Price:${phone.price}
      Brand:${phone.brand}
      <br>
      <button onclick="login()">Detail</button>
    </div>
  </div>`
   tbody.innerHTML+=html;
    
}
// tbody.innerHTML=""