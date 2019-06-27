                    
                    /*  loop practice */

let list = ['movies','shopping','learn','studies','music','books','life'];
let orderedList = list.sort();

for(i=0; i<orderedList.length; i++) {
    if(orderedList[i]==="books"){
        console.log("yes "+  i + " is in our list");
}
    else {
        console.log("sorry " + i + " is not in our list");
}
} 
            /* filter function is not working for words */
            
/* let filtered = orderedList.filter(function (value) {
    return value ==="l";
})
console.log(filtered); */