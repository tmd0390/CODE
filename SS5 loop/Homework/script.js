//Bài1
// let i = 0;
// for (let i = 0; i <=100;i++){
//    document.write(i+'-');
//     console.log(i);
    
// }
//Bài 2
// let a = 100;
// for(a=100;a>=0;a--){
//     document.write(a+'-');
//     console.log(a);
    
// }
//Bài 3
//số chẵn
// let x = 0;
// for(x=0;x<=100;x+=2){
//     document.write(x+' ');
//     console.log(x);
    
// }
// số lẻ
// let y = 1;
// for(y=1;y<=100;y+=2){
//     document.write(y+' ');
//     console.log(y);
    
// }
//Bài4
// let x = 100;
// for(x=100;x>=0;x-=2){
//     document.write(x+' ');
//     console.log(x);
    
// }
// let y = 99;
// for(y=99;y>=1;y-=2){
//     document.write(y+' ');
//     console.log(y);
    
// }
//Bài 5
// let n = parseInt(prompt("Nhập số"));
// let s = 0;
// let i = 0;
// for(i=0;i<=n;i++){
//     s=s+i
    
// }
// console.log(`Tổng của ${n}=${s}`);

//Bài 6
// let n = parseInt(prompt("Nhập số"));
// let s = 0;
// let i = 0;
// for(i=1;i<=2*n;i+=2){
//     s=s+i
    
// }
// console.log(`Tổng của ${n}=${s}`);
//Bài 7
// let n = parseInt(prompt("Nhập số"));
// let s = 0;
// let i = 0;
// for(i=0;i<=2*n;i+=2){
//     s=s+i
    
// }
// console.log(`Tổng của ${n}=${s}`);
//Bài 8
// let n = parseInt(prompt("Nhập số"));
// let s = 0;
// let i = 0;
// for(i=0;i<=n;i++){
//     s=s+1/i
    
// }
// console.log(`Tổng của ${n}=${s}`);

//Bài 9
// let n = parseInt(prompt("Nhập số"));
// let s = 0;
// let i = 0;
// for(i=0;i<=n;i++){
//     s=s+1/i*(i++)
    
// }
// console.log(`Tổng của ${n}=${s}`);
//Bài 10





//Bài 11
let a = Number(prompt("Nhập số a"));
let b = Number(prompt("Nhập số b")); 
for(let i = 0;i<=a;i++){
    for(let j = 0; j<=b;j++){
        document.write("*")
       
        
          
    }
}
//Bài 14
// let pass = prompt("Nhập pass");
// while (pass.length<8) {
//     pass = prompt("Nhập lại pass");
// }console.log(pass);
//Bài 15
// let pass=prompt("Nhập pass");
// while (!(pass.length>=8 && pass.indexOf("$")>=0&& pass.indexOf("%")>=0&& pass.indexOf("_")>=0 ) ) {
//     pass=prompt("Nhập lại pass");
// }console.log(pass);