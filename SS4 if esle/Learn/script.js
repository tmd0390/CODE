// let number = Number(prompt("Nhap 1 so"));
// if (number > 8) {
//     console.log("lon hon 8");
    
// }
// if (number < 8) {
//    console.log("nho hon 8");
    
// }
// if (number === 8) {
//    console.log("bang 8");  
    
//}
// nhap so xem so do la chan hay le
// let a = number % 2;
// if (a===0) {
//     console.log("la so chan");
    
// } else {
//     console.log("la so le");
    
// }
// xem nam nhuan
//  let years = parseInt(prompt("nhap nam"))
// if ((years % 4 ===0 && years % 100 !== 0)||(years%100===0&&years%400===0)) {
//      console.log("la nam nhuan");
    
// } else {
//     console.log("ko la nam nhuan");
    
//  }
//nhap thang in ra so ngay
 let month = parseInt(prompt("nhap thang"))
// if (month === 1|| month ===3 || month===5 || month===7 ||month===8||month===10||month===12) {
//     console.log(" 31 ngay");
    
// } else if (month===2) {
//     console.log("28 hoac 29");
    
// } else if (month ===4||month===6||month===11||month===9){
//     console.log("30 ngay");
    
// }else{
//     console.log("nhap sai");
    
// }
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
    
        console.log("31 ngay");
        
        break;
    case 2:
        console.log("28 hoac 29");
     
        break;    
    case 4:
    case 6:
    case 11:
        console.log("30 ngay");
        break;
        
    default:
        console.log("nhập sai");
        
        break;
}


