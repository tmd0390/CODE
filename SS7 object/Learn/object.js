// let myInfo = {
//     "name":"Dương",
//     'age': 21,
//     'country': 'Vietnam',
// };
// // console.log(myInfo);
// myInfo.phone="0975813750";
// myInfo['school']="UTC";

// for (const key in myInfo) {
//     if (myInfo.hasOwnProperty(key)) {
//         const element = myInfo[key];
//         console.log(key+':'+element);
//     }
// };

//Khai báo 1 object,chứa thông tin 1 điện thoại:
//Chứa têm, giá, hãng sản xuất

//1 in Thông tin điện thoại ra màn hình
//2 cho người dùng nhập thêm value của điện thoại này
//3 Cho người dùng sửa value của ddt này
//4 nhập 1 key,xóa thông tin này trong đt

//khai báo mảng chứ thông tin 3 đt, mỗi điện thoại ngồm tên, giá, hãng sx
//1 in ds ddt ra màn hình
//2 cho người dùng thêm 1 điện thoại mới vào mảng,bằng cách cho người dùng nhập tên giá hãng
//3 người dùng nhập stt và key muốn sửa cho người dùng sửa thông tin của thông tin đt
//4 nhap stt xoa dien thoai có số tt đó
//5 nhập tên đt tìm đt có tên đó(ko phan viet hoa thuong)
// 6Nhập 2 số, tìm các đt có giá nằm giữa 2 số đó
// 7. Nhập 1 hãng SX, tìm các đt thuộc hãng sx đó
// 8. sắp xếp DS đt theo tên, theo giá, (tăng, giảm dần)
//Bài 1
// let phone={
//     'name':'Realmi5',
//     "price":6e6,
//     "producer":"China"

// };

// for (const key in phone) {
//     if (phone.hasOwnProperty(key)) {
//         const element = phone[key];
//         console.log(key+":"+ element);

//     }
// };
// let them=prompt("Bạn muốn nhập gì ")
// phone[them]=prompt("Nhập giá trị của thông tin")
// console.log(phone);

// let fix =prompt("Bạn muốn sửa gì")

// while(!phone.hasOwnProperty(fix)) {
//     prompt("Nhập thông tin cần sửa")
// };phone[fix]=prompt("Nhập giá trị mới ")
// console.log(phone);
// let dele=prompt("Nhập thông tin cần xóa")
// while(!phone.hasOwnProperty(dele)) {
//     dele=prompt("Nhập thông tin cần xóa")

//  }delete phone[dele];
//  ;console.log(phone);

//Bài 2
let listphone = [
  {
    name: "iphone 10",
    price: 20e6,
    brand: "Apple"
  },
  {
    name: "realmi note5 pro",
    price: 6e6,
    brand: "realmi"
  },
  {
    name: "samsung a 50",
    price: 7e6,
    brand: "samsung"
  }
];
for (let i = 0; i < listphone.length; i++) {
  const phone = listphone[i];
  console.log(i + 1);
  for (const key in phone) {
    const value = phone[key];
   console.log("\t"+key+":"+value);

  }console.log("\t---\t---");

}

let newPhoneName=prompt("Ten dt moi");
let newPhonePrice=parseInt(prompt("gia dt moi"));
let newPhoneBrand=prompt("hang sx dt moi");
let newphone={
    name:newPhoneName,
    price:newPhonePrice,
    brand:newPhoneBrand
 };
listphone.push(newphone)
for (let i = 0; i < listphone.length; i++) {
    const phone = listphone[i];
    console.log(i + 1);
    for (const key in phone) {
      const value = phone[key];
     console.log("\t"+key+":"+value);
  
    }console.log("\t---\t---");
  
  }