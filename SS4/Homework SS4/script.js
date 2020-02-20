//Bài 1
// let years = parseInt(prompt("Nhập năm"))
// if ((years % 4 ===0 && years % 100 !== 0)||(years%100===0&&years%400===0)) {
//      console.log(`Là năm nhuận và ${"Có 366 ngày"}`);
    
// } else {
//     console.log(`Không là năm nhuận và ${'Có 365 Ngày'}`);
    
//  }
//Bài 2
// let month = parseInt(prompt("Nhập tháng"))
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
//Bài 3
// if (month===1||month===2||month===3) {
//     console.log("Mùa xuân");
    
// } else if (month===4||month===5||month===6) {
//     console.log("Mùa hè");
    
// } else if (month===7||month===8||month===9) {
//     console.log("Mùa thu");
    
// } else if (month===10||month===11||month===12) {
//     console.log("Mùa đông");
    
// } else {
    
//     console.log("Nhập sai");
// } 
//Bài 4
//  let x = 104;
//  let y = 50;
//  let z = 99;
//  if (x > y && y > z) {
//      console.log(x ,y ,z);
    
//  } else if (x > z && y < z ) {
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
//     let a = 5
//      let b = 5
//     let c = 5
//  if ((a + b > c)&&(a +c > b) && (b + c >a)) {
//     if (a===b||a===c||b===c) {
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
// let elec = Number(prompt("Nhập số điện sử dụng"))
// if ( elec < 0) {
//      console.log("Nhập sai");
  
//  } else if (elec<=50) {
//      console.log("Giá : 1.678/kWh", "Tổng tiền", elec* 1.678,"Nghìn đồng");
    
//  } else if (elec<=100) {
//      console.log("Giá : 1.734/kWh","Tổng tiền",elec * 1.734,"Nghìn đồng");
    
//  } else if (elec<=200) {
//      console.log("Giá : 2.014/kWh","Tổng tiền",elec* 2.014,"Nghìn đồng");
    
//  } else if (elec<=300) {
//      console.log("Giá : 2.536/kWh","Tổng tiền",elec * 2.536,"Nghìn đồng");
    
//  } else if(elec<=400){
//      console.log("Giá : 2.834/kWh","Tổng tiền",elec * 2.834,"Nghìn đồng");
    
//  }else{
//      console.log("Giá : 2.927/kWh","Tổng tiền",elec * 2.927,"Nghìn đồng");
    
//  }


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
    
// }else if (z < 40) {
//      console.log("Bép phì cấp độ 2");
    
//  } else {
//      console.log("Béo phì cấp độ 3");
//  }
    

