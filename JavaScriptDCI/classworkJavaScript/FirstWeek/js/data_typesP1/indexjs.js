                /* variable assigning and Boolean*/

 let occupation = ("software development and programing");
console.log(occupation);
console.log(occupation[2]);
console.log(occupation[occupation.length -1]);
console.log(occupation[5]);

let name = "Ashenafi";
console.log(name);

let age = 105;
console.log(age);

let year = 2019;
console.log(year);

let concatnate = name + " " + age + " " + year;
console.log(concatnate);

let isMarried = "True";
console.log(isMarried);

let maritalStatus = name + " " + "is married " + isMarried;
console.log(maritalStatus);

let programingLanguage = "Java-script";
console.log(programingLanguage);

let isFun = "True";
console.log(isFun);

let concatnate1 = programingLanguage + " is fun! " + isFun;
console.log(concatnate1);

let programingLanguage1 = "Java-Script";
console.log(programingLanguage1[0]);
console.log(programingLanguage1[5]);
console.log(programingLanguage1.length);  

 console.log(Boolean(0));
 console.log(Boolean(1));

 console.log(Boolean(true));
 console.log(Boolean(false));
 
 console.log(Boolean("It is a value."));
 console.log(Boolean( 120927));
 
 let shopping = ["orange", "milk", "bread", "sugar", "soap"];

 console.log(shopping[2]);


                            /* long list items */

  let shoppingItems = [
     {
         item: "flower",
         quantity: "2kilos",
         price: "5euro"
     },
     {
        item: "sugar",
        quantity: "3kilos",
        price: "6euro"
     },
     
     {
        item: "soap",
         quantity: "10litters",
         price: "12euro"
     },
     {
        item: "apple",
         quantity: "2kilos",
         price: "3euro"
     }];

 console.log(shoppingItems); 


                            /* if function */

let hisAge = 12;

if(hisAge<18) {console.log("you are minor!")} else{console.log("you are major!")}

                         /* if function with preference */

let color = "blue";
if(color =="red") {console.log("you are cool!")}
if(color =="blue") {console.log ("http://www.google.com")}
if(color =="green") {console.log("you are environmentalist.")}
if(color =="silver")  {console.log("you are very normal.")}
 

                        /* object */

let myObject = {
    key1: "value",
    key2: 1234,
    key3: {
        key31: "sub-value",
        key32: "sub1234", 
    },
};
console.log(myObject.key3.key31);
console.log(typeof myObject);
 
                        /* object exercice */

let myList = {
    item1: "accessories",
    item2: {
        item21: "paintings",
        item22: "telephone",
    },
    item3: "electronics",
        item4: {
            item41: "sub-electronics",
            item42: "sub-paintings",
            item43: "sub-electronics",
        },
            item5: {
                item51: "sub-sub-electronics",
                item52: "sub-sub-paintings",
                item53: "sub-sub-electronics",
            },
                item6: {
                    item61: "sub-sub-sub-electronics",
                    item62: "sub-sub-sub-paintings",
                    item63: "sub-sub-sub-electronics",
                }
};

console.log(myList); 

/* console.log(typeof ("Berlin" + 2)); */