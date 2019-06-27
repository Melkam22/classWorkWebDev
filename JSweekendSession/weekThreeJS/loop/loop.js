
                    /* first exercise of loop*/

let fruitsList = ["Apple","Banana","Orange","Pineapples"];
let fruitsList1 = fruitsList.sort();
/* let fruitsList2 = (fruitsList1[fruitsList1.length -fruitsList]); 
console.log(fruitsList2);
  */
 for(i=0; i<fruitsList1.length; i++){
    if(fruitsList1[i]==="Banana"){

        /*instead of we found 2 in the list, how to call 2 by its name?? */

    console.log("Yes We found " + fruitsList1[i] +" in our list.");
    }
    else {
        console.log("No, we dont have " + fruitsList1[i] + " in our list.")
    }
 }
 

                        /* second exercise of loop */

let movies = ['avatar','titanic','lord of the ring','storm','the cat'];
let movies1 = movies.sort();
            for(i=0; i<movies1.length; i++) {
                console.log(movies1[i]);
                }

movies1[1]="kickmaster";//to replace 'titanic' with 'kickmaster'
console.log(movies1);
movies1.push("anything");//to add this at the end of the list
console.log(movies1);
movies1.pop();//to remove the last item from the list
console.log(movies1);
movies1.unshift("Something");//to add this element at the beginning of the list
console.log(movies1);
movies1.shift();//removing the first item from the list
console.log(movies1);
movies1.splice(3,0,"abc","cdf");//to add these elements where in the list we want
console.log(movies1);
 