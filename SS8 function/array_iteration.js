let arr =[2,3,5,7,9,3,2,6,1]

let r1 =arr.findIndex(function(v,i,a){
    // console.log(`v=${v}`);
    // console.log(`i=${i}`);
    // console.log(a);
    return v >4;
});
console.log(`r1=${r1}`);


let r2 =arr.find(function(v,i,a){
    // console.log(`v=${v}`);
    // console.log(`i=${i}`);
    // console.log(a);
    return v >4;
});
console.log(`r2=${r2}`);

let r3 =arr.filter(function(v,i,a){
    // console.log(`v=${v}`);
    // console.log(`i=${i}`);
    // console.log(a);
    return v >4;
});
console.log(`r3=${r3}`);
console.log(r3);

let r4 = arr.every(function(v){
return v% 2 ===0;
})
console.log(`r4 = ${r4}`);

let r5 = arr.some(function(v){
    return v% 2 ===0;
    })
    console.log(`r5 = ${r5}`);

