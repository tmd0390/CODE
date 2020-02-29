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
// let n = parseInt(prompt("Nhập số"))
// let f1=1,f2=1;
// let count=2
// for (let i = 1; i < n/2; i++) {
//     f1=f1+f2;
//     count++
//     f2=f1+f2
//     count++
// }
// console.log(`f${count-1}:${f1},f${count}:${f2}`);



//Bài 11+12
// let a = parseInt(prompt("Nhập chiều dài"));
// let b = parseInt(prompt("Nhập chiều rộng"));
// let s ='';
// for(let i = 0;i <= b;i++){
//     s+="*"
//     console.log(s);
    
// }//12
// let result='';
// for(let j = 0; j<= a;j++){
//   result+=s+'\n'
        
//  }console.log(result);//11
//bai 16
let n = parseInt(prompt("nhap so"))
let soLuongUocSo= 0;
for(let i = 1;i<=n;i++){
    if(n%i ===0){
        console.log(i);
        soLuongUocSo++
        if (soLuongUocSo>2) {
            break;
        }
    }
}
 if (soLuongUocSo>2) {
     console.log("hop so");
     
 }else{
     console.log("so nguyen to");
     
 }
    

