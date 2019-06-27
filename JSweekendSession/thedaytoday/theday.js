
function fullDate() {
     
  let myDate = new Date();
  /* console.log */alert(myDate);

  let getDate = myDate.getDate();//day in number
/*   console.log(getDate); */

  let days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let getDaysName = days[myDate.getDay()];//day's name in letter
  /* console.log(getDaysName); */
   
  let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  let getMonthName = months[myDate.getMonth()];//month in letter
  /* console.log(getMonthName); */

  let getYear = myDate.getFullYear();//year in number
  /* console.log(getYear); */

  /* console.log */alert(`Today is : ${getDaysName} ${getDate}th of ${getMonthName} ${getYear} `);
};

fullDate();//we ll get sth like today is : 12 May 2019

//countDown
let myDay = new Date();
myDay.setDate(22);
myDay.setMonth(06);
let remaining = myDay- new Date();
let result = remaining/(1000*60*60*24);
console.log(result);
 




 