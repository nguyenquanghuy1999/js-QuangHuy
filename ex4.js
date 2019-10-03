const array1 = [1,2,3,4];
const array2 = [...array1,5,6,7]

const name = {
    name1: "Quang huy",
    name2: "Hoang kieu",
};

const dsLop = {
    ...name,
    name3: "cong phuong",
    name4: "van toan",
}
console.log(name);
console.log(dsLop);

console.log(array1);
console.log(array2);
