// 1
let arr=[];
let slsv= parseInt(prompt("Nhập số lượng sinh viên"));
for (let i = 0; i < slsv; i++) {
    const element = arr[i];
    let name= prompt(`Nhập tên sinh viên thứ${i+1}`);
    arr.push(name)
}
console.log(arr);
//2
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(`${i+1}:${arr[i]}`);
// }
//3
// let stt =parseInt(prompt("Nhập stt"));
// while (stt<1||stt>arr.length) {
//     stt =parseInt(prompt("Nhập chính xác stt"));
// }
// arr[stt-1]=prompt("Nhập tên mới");
// console.log(arr);
//4
// let nhapten= prompt("Nhập tên muốn kiểm tra")
// let = isExist = false;
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element === nhapten) {
//         isExist = true;
//         break;
//     }
// }

// if (isExist) {
//     console.log("Có tên trong danh sách");
    
// }else{
//     console.log("không có tên trong danh sách");
// }
arr.sort()
console.log(arr);
arr.reverse()
arr.sort(function(a, b){return a - b});