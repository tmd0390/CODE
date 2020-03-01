// for (let index = 0; index <11; index++) {
//     // console.log("Hi honey");
//     console.log(index);
    
// }


// for (let x = 0; x <=10; x+=2) {
//     console.log(x);
    
    
// }
// for(let y = 1; y<=10;y+=2){
//     console.log(y);
    
// }
// for (let z = 10; z >= 0; z--){
//     console.log(z);
      
// }
// let m = parseInt(prompt("Nhập số thứ nhất"));
// let n = parseInt(prompt("Nhập số thứ hai"));
// if (m<=n) {
//     for (let x=m;x<=n;x++){
//         console.log(x);
        
//     }
// } else {
//     for (let x=n;x<=m;x++){
//         console.log(x);
        
//     }
// }
// let a;
// let b;
// if (m<=n) {
//     a=m;
//     b=n;
// } else {
//     a=n;
//     b=m;
// }
// for (let x = a; x <= b; x++) {
    
//     console.log(x);
    
// }

// for (let x = Math.min(m,n); x <= Math.max(m,n); x++) {
   
//     console.log(x);
    
// }

//max min 
//a = ( m <= n ? m:n );
//Tính tổng
// let m = 3
// let s = 1
//s=1+2+3+....m
// for (let i = 0; i <=m; i++) {
//     s=s+i;
    
// }
// console.log(s);

//s=0+2+4+....m
// for (let i = 0; i <=m; i+=2) {
//     s=s+i;
    
// }
// console.log(s);
 //s=1+3+5+...m
// for (let i = 1; i <=m; i+=2) {
//     s=s+i;
    
// }
// console.log(s);
//s=1/1+1/2+1/3+....1/m
// for (let i = 1; i <=m; i++) {
//     s=s+1/i;
    
// }
// console.log(s);
//s=1/1+2 + 1/2+3 + 1/3+4 + ....1/m*(m+1)
// for (let i = 1; i <=m; i++) {
//     s=s+1/(i*(i+1))
    
// }
// console.log(s);
//s=1/2+2/3+3/4+....m/m+1
// for (let i = 1; i <=m; i++) {
//     s=s+i/i+1;
    
// }
// console.log(s);
//s=m!
// for (let i = 1; i <=m; i++) {
//     s=s*i;
    
// }
// console.log(s);
//s=1!+2!+3!=....m!
// for (let i = 1; i <=m; i++) {
// let giathua=1;
//   for (let x = 1; x <=i ; x++) {//tinh giai thua
//      giathua=giathua*x
      
//   }
//  s=s+giathua
// }
// console.log(s);


//s=1^1+2^2+3^3+...m^m
// for (let i = 1; i <=m; i++) {
//     s=s+(i*i);
    
// }
// console.log(s);

// let giaithua=1;
// for (let i = 2; i < m; i++) {
  
//    giaithua=giaithua*i;
//    s=s+giaithua;
    
// }console.log(s);


// let n = Number(prompt("Nhập n"))
// while (n<8) {
//     n = Number(prompt("Nhập lại n >=8"))
// }console.log(n);

// let pass = prompt("Nhập pass")
// while (pass.length<8) {
//     pass = prompt("Nhập lại pass")
// }console.log(pass);
//nhap so lon hon 10 và la so chan
// let m=Number(prompt("Nhập số"))
// while (m<=10||m%2!==0) { // !( m > 10 && m % 2 === 0)
    
//        m=Number(prompt("Nhập lại số"))
// }console.log(m);
// let pass=prompt("Nhập pass")
// while (!(pass.length>=8 && pass.indexOf("@")>=0 ) ) {
//     pass=prompt("Nhập lại pass")
// }console.log(pass);



let n = 10;
for (let i = 0; i <=n ;i++) {
    if (i%2===1) {
        continue;
    }
    console.log(i);
}


