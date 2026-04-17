let jsonString = '{"productName": "Laptop","price": 75000,"brand": "Dell"}';

let product = JSON.parse(jsonString);
console.log(product.productName);

//Convert JavaScript object to JSON string
let newProduct = {productName: "Mouse", price: 1500,inStock:false};
newJsonString = JSON.stringify(newProduct);
console.log(newJsonString);
'{"productName":"Mouse","price":1500,"inStock":"false"}'

//for..in loop is used to iterate over the properties of an object, 
//while for..of loop is used to iterate over the values of an iterable object like an array or a string.
//not recommended to use for..in loop to iterate over arrays because it can lead to unexpected results,
let person ={
    name: "Charlie",
    age: 35,
    city: "New York"
};
let text = " ";
for (let key in person) {
    text += key + ": " + person[key] + "\\n";
    console.log(text);
}









