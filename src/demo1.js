/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
console.log("Hello World, i Know how to count");

[1,2,3,4].forEach(n=>console.log(n));

 //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}
var sub = function(n1,n2){
  return n1 - n2;
} ;

var mul = function(n1,n2) {
    
    return n1 * n2;
};

var cb = function(n1,n2, callback){
    try {
        return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);

} catch (e) {
  console.error("der er sket en fejl");
}
  
};
//typeof n1 === "number";
//typeof callback === "function";
console.log(cb(3,3,mul)); // What will it print (and what was the problem)

//Getting comfortable with filter, map and forEach:
//opgave 1
var persons = ["kiki", "p2", "p2", "p3", "p4"];
const result = persons.filter(word => word.length > 3);

console.log(result);


var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
const all1 = [...boys, ...girls];
var all = boys.concat("Janne", "hanne", "Sanne").map(v => v.toUpperCase());
all.push("Lone", "gitte");
all.unshift("hans", "kurt");
all.pop();
all.shift();
all.splice(2,3);
all.reverse();
all.sort();
// sorting the array with first catapiliazed letters.
all.sort(function(a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if( a == b) return 0;
    return a > b ? -1 : 1;
});
all1.map(v => v.toUpperCase());
let startsWithL = all.filter((p) => p.startsWith("L"));
var list = all.join(' - ');
console.log(list);








//all1.push("</li></ul>");
//all1.unshift("<ul><li>");
//var html1 = all1.join('</li>\n<li>');
//opgave 2
let lis = boys.map(function(name){
    return "<li>"+name+"</li>";
});
let listAsString = "<ul>" + lis.join(",") + "</ul>";

console.log(listAsString);

// opgave 3
let cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

let newer = cars.filter(function(year){
    return 1999 < year.year;
});
console.log(newer);

let make = cars.filter(function(make){
    return make.make === "Volvo";
});
console.log(make);
let price = cars.filter(function(price){
   return price.price <= 5000; 
});
console.log(price);
//kan også skrives console.log(cars.filter(car => car.price < 5000);


    //opgave 4
    let values = cars.map(function(car){
       let code = "INSERT INTO cars (id,year,make,model,price) VALUES ";
       
       let code2 =  "(" + car.id + ", " + car.year + ", " + car.make + ", " + car.model + ", " + car.price + ");";
            return code + code2;
    });
    console.log(values);
    
    
    
    
    //Asynchronous Callbacks opgave 1
    var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");//1
msgPrinter ("bbbbbbbbbb",2000);//5
console.log("dddddddddd");//2
msgPrinter ("eeeeeeeeee",1000);//4
console.log("ffffffffff");//3
