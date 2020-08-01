//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20, "2", "45"];

const answer = array => {
    // 1st part is sorting array in order
    array.sort((a, b) => a - b);

    // 2nd part is grouping duplicate entries
    for (let i = 0; i < array.length - 1; i++){
        let tempArray = [];
        if (array[i] === array[i+1]){
            while (array[i] === array[i+1]){
                tempArray.push(array.splice(i + 1, 1)); 
            }
            tempArray.push(array.splice(i, 1));
            tempArray = tempArray.flat();
            array.splice(i, 0, tempArray);
        }
    }

}

answer(array);
console.log(array);


//Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
const answer2 = (array, number) =>{
    for (let i = 0; i < array.length - 1; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] + array[j] === number) return `The answer is [${array[i]}, ${array[j]}]`
        };
    };
    return `There were no numbers to match the answer`
}

console.log(answer2([1, 2, 3, 4, 5], 10));

//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
const answer3 = (color) => {
    const toHex = (rgb) => {
        let answer = "";
        for (let i = 0; i < 3; i++){
            let temp = Math.floor((rgb % 1000**(i+1)) / 1000**i);
            temp = temp.toString(16);
            answer = temp + answer;
        }
        return answer;
        
    }
    const toRgb = (hex) => {
        let answer = "";
        for (let i = 0; i < 3; i++){
            let temp = parseInt((hex[i*2] + hex[i*2 + 1]), 16);
            answer += temp;
        }
        return answer;
    }
    
    switch (color.length) {
        case 6: return toRgb(color);
        case 9: return toHex(color);
        default: return "Not a color"
    }

}

console.log(answer3("252"));