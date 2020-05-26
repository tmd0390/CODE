function submit(e){
if (e.key === 'Enter') {
    login()
}

}
function login(){

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username==="") {
        alert('Enter username')
        return;
    }
    if (password==="") {
        alert('Enter password')
        return;
    }
    
    if (username ==="admin" && password==="123456") {
        alert('Login success')
        window.location.href = 'index.html'
        return;
    }
       alert('Username or Password is incorect')
    
        
}

let s = "hello world";
let n = 10.5;
let b = true;
let arr= [1,2,3,4,5];
let o ={name:"duong",'age':20,"school":"utc",};
console.log(o);

console.log(JSON.stringify(o));

let stringify = '{"name":"duong","age":20,"school":"utc"}'
let object = JSON.parse(stringify)
console.log(object);
//products.html
//quá trình lưu vào localstorage
let person ={name:"duong",'age':20,"school":"utc",};
localStorage.setItem('person',JSON.stringify(person));
//detail.html
//quá trình parse dữ liệu sring trong localstorage
let personSelected= JSON.parse(localStorage.getItem(person));
console.log(personSelected);

