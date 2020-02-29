// let arr = [1, 2, 3, 4,5]

// let listNumbers = [1, 2, 3, 4, 5];
// let listName = ["Dương", "Nga", `Nguyên`];
// console.log(arr);
// console.log(listNumbers);
// console.log(listName.length);

// arr.push(10);
// console.dir(arr);
// arr.push(11,12,13,14);
// console.table(arr);
// arr.unshift(20);
// console.dir(arr);
// arr.unshift(21,22,23);
// console.table(arr);

// console.log(arr[1]);
// console.log(arr[14]);
// console.log(arr[-1]);
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);

// }
// console.log(arr[1]);

// arr[1]=400
// console.log(arr[1]);
// arr[arr.length] = 200;
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);
// let a = arr.pop();
// let b = arr.shift();
// console.log(`a = ${a},b = ${b}`);
// console.log(arr);

let arr=[];
let length=5;
let s = 0;


for (let i = 0; i < length; i++) {
    
    let a = parseInt(prompt("Nhap so "));
    arr.push(a);
 

}
console.log(arr);




for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
    console.log(`${i+1}:${arr[i]}`);
    s+=arr[i]
}
console.log(`tong:${s}`);
console.log(`trung binh:${s/arr.length}`);
let n = parseInt(prompt("nhap n"));
let = isExist = false;//kiem tra co ton tai hay ko
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === n) {
        isExist = true;
        break;
    }
}

if (isExist) {
    console.log("n thuoc mang");
    
}else{
    console.log("n ko thuoc bang");
    
}
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element <n) {
//         console.log(element);
        
        
//     }
// }
// let stt =parseInt(prompt("nhap vi tri muon sua"));
// while (stt<1||stt>arr.length) {
//     stt =parseInt(prompt("nhap lai vi tri"));
// }
// arr[stt-1]=parseInt(prompt("nhap gia tri moi"));
// sắp xếp rồi in
//hàm sort
//Thuận toán sắp xêps