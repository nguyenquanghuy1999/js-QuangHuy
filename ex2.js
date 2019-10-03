// ham 
// cach viet thong thuong
function hello(name){
    console.log(name);

}
// cach viet khac
const hello1 = function(name){
    console.log(name + " den tu hello1 ");
}
// cach viet ham trong js Es6
const hello2 = name =>{
    console.log(name + " den tu hello hien dai");
}
//neu co 1 tham so , va 1 gia tri return
const tinhBinhPhuong = so => so * so ;
console.log(tinhBinhPhuong(2));

hello("quang huy");
hello1("kha nhu");
hello2("hong ngoc");