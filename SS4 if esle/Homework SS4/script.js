// Bài 1
// let years = parseInt(prompt("Nhập năm"))
// if ((years % 4 ===0 && years % 100 !== 0)||(years%100===0&&years%400===0)) {
//      console.log(`Là năm nhuận và ${"Có 366 ngày"}`);

// } else {
//     console.log(`Không là năm nhuận và ${'Có 365 Ngày'}`);

//  }
//Bài 2
//let month = parseInt(prompt("Nhập tháng"))
// if (month === 1|| month ===3 || month===5 || month===7 ||month===8||month===10||month===12) {
//     console.log(" 31 ngày");

// } else if (month===2) {
//     // console.log("28 ngày hoặc 29 ngày");
//     if ((years % 4 ===0 && years % 100 !== 0)||(years%100===0&&years%400===0)) {
//         console.log("29 ngày");

//    } else {
//        console.log("28 ngày");

// }
// }else if (month ===4||month===6||month===11||month===9) {
//     console.log("30 ngày");

// }else{
//     console.log("Nhập sai");
// }
// Bài 3
// if (month>0&&month<4) {
//     console.log("Mùa xuân");

// } else if (month>3&&month<7) {
//     console.log("Mùa hè");

// } else if (month>6&&month<10) {
//     console.log("Mùa thu");

// } else if (month>9&&month<13) {
//     console.log("Mùa đông");

// } else {

//     console.log("Nhập sai");
//}
//Bài 4
//  let x = parseInt(prompt("Nhập số a"));
//  let y = parseInt(prompt("Nhập số b"));
//  let z = parseInt(prompt("Nhập số c"));
//  if (x > y && y > z) {
//      console.log(x ,y ,z);

//  } else if (x > z && z > y ) {
//      console.log(x , z ,y);

//  } else if (y > x && x > z) {
//      console.log(y , x , z);

//  } else if (y > z && z > x) {
//      console.log(y , z , x);

//  } else if (z > x && x > y) {
//      console.log(z , x ,y);

//  } else {
//      console.log(z , y ,x);

// }
// Bài 5
// let a = parseInt(prompt("Nhập số a"));
// let b = parseInt(prompt("Nhập số b"));
// let c = parseInt(prompt("Nhập số c"));
//  if ((a + b > c)&&(a +c > b) && (b + c >a)) {
//     if (a===b&&a!=c||a===c&&a!=b||b===c&&a!=a) {
//         console.log("là tam giác cân");

//      } else if (a===b&&b===c) {
//          console.log("Là tam giác đều");

//      } else if ((a*a + b*b===c*c)||(a*a + c*c===b*b)||(b*b + c*c===a*a)) {
//          console.log("Là tam giác vuông");

//      } else {
//       console.log("Là tam giác");

//     }
// } else {
//      console.log("Không là tam giác");

// }
// //Bài 6
let elec = Number(prompt("Nhập số điện sử dụng"));
let y;

if (elec < 0) {
  console.log("Nhập sai");
} else if (elec <= 50) {
  y = elec * 1.678;
} else if (elec <= 100) {
  y = 50 * 1.678 + (elec - 50) * 1.743;
} else if (elec <= 200) {
  y = 50 * 1.678 + 50 * 1.743 + (elec - 100) * 2.014;
} else if (elec <= 300) {
  y = 50 * 1.678 + 50 * 1.743 + 100 * 2.014 + (elec - 200) * 2.536;
} else if (elec <= 400) {
  y =
    50 * 1.678 + 50 * 1.743 + 100 * 2.014 + (100 * 2.536)((elec - 300) * 2.834);
} else {
  y =
    50 * 1.678 +
    50 * 1.743 +
    100 * 2.014 +
    100 * 2.536 +
    100 * 2.834 +
    (elec - 400) * 2.927;
}

console.log("Tổng tiền", y, "Nghìn đồng");
//Bài 7
//  let kg = Number(prompt("Nhập cân nặng (kg) VD 60"));
//  let met = Number(prompt("Nhập chiều cao (mét) VD 1.7"));
//  let z = kg /(met * met)
// if (z <= 0) {
//      console.log("Nhập sai");

//  } else if (z < 18.5) {
//     console.log("Gầy");

//  } else if (z < 25) {
//      console.log("Bình thường");

//  }else if (z < 30) {
//      console.log("Hơi béo");

//  } else if(z < 35){
//      console.log("Béo phì cấp độ 1");

//  }else if (z < 40) {
//      console.log("Bép phì cấp độ 2");

//  } else {
//      console.log("Béo phì cấp độ 3");
//  }
