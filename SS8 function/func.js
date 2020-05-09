function helloWorld() {
    console.log("hello from func");
    
}
//Gọi function
// helloWorld();
// helloWorld();
// helloWorld();


//Khai báo function sử dụng tham số
// function xinChao(userName) {
//     console.log(`Xin chào ${userName}`);
    
// }
// xinChao("Dương");
// xinChao("Nga");
// xinChao("Dứa");

// Tính tổng 2 số

// function sum(a,b) {
//     console.log("a="+a);
//     console.log("b="+b);
    
    
//     let s = a + b;
//     console.log(s);
    
// }

// sum(1,2,3);

// function tinhTong3(a1,a2) {
//     let s = a1 + a2;
//     return s;
// }
// let n = tinhTong3(5,6)
// console.log(n);

// function đầu vào là một mảng

// function sum(arr) {
//      let s = 0;
//     for (let i = 0; i < arr.length; i++) {
//     s+=arr[i]}
// return s;
// }
// let s = sum([1,2,3,4,5]);
// console.log(s);

function xinChao(){
    console.log("Xin Chào");
    return;
}
let n1 = xinChao();
console.log(n1);


function tinhgiathua(n){
    if(n===0){
        return 1;
    };
    return n * tinhgiathua(n-1);
}
let gT=tinhgiathua(9);
console.log(gT);
function fibonacci(f){
    if(f===1 || f===2){
        return 1;
    }
     return fibonacci(f-1)*fibonacci(f-2);
}
console.log(fibonacci(6));
