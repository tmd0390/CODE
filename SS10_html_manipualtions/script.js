 let idTitle = document.getElementById("title");
console.dir(document.getElementById("title").innerHTML);
idTitle.innerHTML="Welcome C4EJS 71";

let classContent = document.getElementsByClassName("content");
console.dir(classContent)

for (let i = 0; i < classContent.length; i++) {
    const dom = classContent[i];
    dom.innerHTML="Menu Đồ Ăn"
    
    
}
idTitle.style.color="green"
idTitle.style.backgroundColor="blue"
idTitle.innerHTML = "Welcome Quý khách <h1>Quán Ăn Đêm</h1>"
// let listFoods=[
//     "Phở bò",
//     "Bún cá",
//     "Thịt lợn",
//     "Thịt gà",
// ];
// let listImgs=[
//     "https://photo-3-baomoi.zadn.vn/w1000_r1/2020_01_07_541_33571586/de4060bfbaff53a10aee.jpg",
//     "https://i.ytimg.com/vi/SeLR0noGFKs/maxresdefault.jpg",
//     "https://cdn.tgdd.vn/Files/2018/08/24/1112040/thoi-gian-luoc-cac-loai-thit-ban-can-biet-de-giu-nguyen-chat-dinh-duong--2.jpg",
//     "https://st.galaxypub.vn/staticFile/Subject/2016/01/01/73942/cach-luoc-thit-ga-ngon-vua-chin-toi_1940420.jpg",
// ];
let listFoodAndImgs = [
    {
        food: 'Phở bò',
        img: "https://photo-3-baomoi.zadn.vn/w1000_r1/2020_01_07_541_33571586/de4060bfbaff53a10aee.jpg",
        Description:"Ngon vl",
        linkDetail: "https://photo-3-baomoi.zadn.vn/w1000_r1/2020_01_07_541_33571586/de4060bfbaff53a10aee.jpg",

    },
    {
        food: 'Bún cá',
        img: "https://i.ytimg.com/vi/SeLR0noGFKs/maxresdefault.jpg",
        Description:"Ngon vl",
        linkDetail: "https://i.ytimg.com/vi/SeLR0noGFKs/maxresdefault.jpg",

    },
    {
        food: 'Thịt lợn',
        img: "https://cdn.tgdd.vn/Files/2018/08/24/1112040/thoi-gian-luoc-cac-loai-thit-ban-can-biet-de-giu-nguyen-chat-dinh-duong--2.jpg",
        Description:"Ngon vl", 
        linkDetail: "https://cdn.tgdd.vn/Files/2018/08/24/1112040/thoi-gian-luoc-cac-loai-thit-ban-can-biet-de-giu-nguyen-chat-dinh-duong--2.jpg",

    },
    {
        food: 'Thịt gà',
        img: "https://st.galaxypub.vn/staticFile/Subject/2016/01/01/73942/cach-luoc-thit-ga-ngon-vua-chin-toi_1940420.jpg",
        Description:"Ngon vl",
        linkDetail: "https://st.galaxypub.vn/staticFile/Subject/2016/01/01/73942/cach-luoc-thit-ga-ngon-vua-chin-toi_1940420.jpg"

    },
]
let ulFoods = document.getElementById("foods");
//  ulFoods.innerHTML= "<li>Com rang <img width='100' src='https://image-us.eva.vn/upload/1-2019/images/2019-01-12/khi-lam-com-rang-trung-chien-trung-hay-com-truoc-dam-bao-90-van-lam-sai-cach-4ebbbc7e51db4ecfac32ddcf9bda4a0a-1547258436-664-width1024height682.jpeg' /></li>"
// for (let i = 0; i < listFoodAndImgs.length; i++) {
//     const foodAndImg = listFoodAndImgs[i];
    
//     let htmlFood = `<li>${foodAndImg.food} <img width='200' src='${foodAndImg.img}'/> </li>`
//     ulFoods.innerHTML += htmlFood;

// }
let tbody = document.getElementById('foods')
for (let i = 0; i < listFoodAndImgs.length; i++) {
    const element = listFoodAndImgs[i];
    let html = `<tr>
    <td>${i+1}</td>
    <td><img src="${element.img}" width="100"></td>
    <td>${element.food}</td>
    <td>${element.Description}</td>
    <td><a href="${element.linkDetail}" target="_blank" >Chi tiết</a></td>
    </tr>`
   tbody.innerHTML+=html;
    
}
tbody.innerHTML=""
/*lấy dữ liệu từ trang thế giới di động chon khoảng 5đt lấy thông tin gồm :Tên-Hãng-Giá-Ảnh-Đường link.Hiện thị bảng danh sách điện thoại này theo mẫu:
1. Mặc định
2.Danh sách được filter theo 1 hãng
3.Danh sách được filter theo khoảng giá
4.Danh sách được sắp xếp theo tên,hãng ,giá*/