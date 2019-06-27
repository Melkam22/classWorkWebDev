
function transform(input){
    let one = input.replace(/a/gi, "አ");
    let two = one.replace(/b/gi, "በ");
    let three = two.replace(/c/gi, "ሰ");
    let four = three.replace(/d/gi, "ደ");
    let five = four.replace(/e/gi, "ኢ");
    let six = five.replace(/f/gi, "ፈ");
    let seven = six.replace(/g/gi, "ጂ");
    let eight = seven.replace(/h/gi, "ኸ");
    let nine = eight.replace(/i/gi, "ኢ");
    let ten = nine.replace(/j/gi, "ጄ");
    let eleven = ten.replace(/k/gi, "ኬ");
    let twelve = eleven.replace(/l/gi, "ለ");
    let thirteen = twelve.replace(/m/gi, "መ");
    let fourteen = thirteen.replace(/n/gi, "ነ");
    let fifteen = fourteen.replace(/o/gi, "ኣ");
    let sixteen = fifteen.replace(/p/gi, "ፔ");
    let seventeen = sixteen.replace(/q/gi, "ኪ");
    let eighteen = seventeen.replace(/r/gi, "ረ");
    let nineteen = eighteen.replace(/s/gi, "ሰ");
    let twenty = nineteen.replace(/t/gi, " ተ");
    let twentyOne = twenty.replace(/u/gi, "ዩ");
    let twentyTwo = twentyOne.replace(/v/gi, "ቨ");
    let twentyThree = twentyTwo.replace(/w/gi, "ወ");
    let twentyFour = twentyThree.replace(/x/gi, "ኤክ");
    let twentyFive = twentyFour.replace(/y/gi, "ዋ");
    let twentySix = twentyFive.replace(/z/gi, "ዘ");
    let twentySeven = twentySix.replace(/sh/ig, "ሽ");
    let twentyEight = twentySeven.replace(/fi/ig, "ፊ");
    let twentyNine = twentyEight.replace(/ha/ig, "ሃ");
    console.log(twentyNine);  
}
transform("frauke");

 