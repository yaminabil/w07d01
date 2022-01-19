

// console.log ("i am connected") ;


// function  sameFrequency (arr1,arr2) {

//     if (arr1.length !== arr2.length) {
//         return false ;
//     }
   
//     const counter1 = {}; //frequency counter for arr 1
//     const counter2 = {} ; //frequency counter for arr 2  


//     for (let num of arr1) {
//         if (counter1[num]) {
//             counter1[num]++
//         } else {
//             counter1[num]=1;
//         }
//     }
//     console.log (counter1);

//     for (let num of arr2) {
//         if (counter2[num]) {
//             counter2[num]++
//         } else {
//             counter2[num]=1;
//         }
//     }
//     console.log (counter2);

//     for (let key in counter1) {
//         if (counter1[key] !== counter2 [key ** 2]) {
//             return false
//         }  
//     } 

//     return true;
    
// }

// console.log (sameFrequency ([1,1,1,7,7,1,2,3,0,0,0] , [49,49,1,1,2,1,4,9,0,0,0]));


// // max of character 


// const maxChar = (str) =>{
//     const frequencyCounter = {};
//     let max = 0;
//     let maxChar= "";

//     for (let char of str) {
//         if (frequencyCounter [char]) {
//             frequencyCounter [char] ++;
//         } else {
//             frequencyCounter [char] =1;
//         }
//     }
//     console.log (frequencyCounter);

//     for (let key in frequencyCounter) {
//         if (frequencyCounter [key] > max) {
//             max =frequencyCounter [key]  ;
//             maxChar = key ;
//         }
//     }
//     return maxChar ;

// }

// console.log (maxChar ("abbbbbb                bbcccccd") );




function validAnagram(str1, str2){
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let char of str1) {
        if (frequencyCounter1[char]) {
            frequencyCounter1[char]++;
        } else {
            frequencyCounter1[char] = 1;
        }
    }

  

    for (let char of str2) {
        if (frequencyCounter2[char]) {
            frequencyCounter2[char]++;
        } else {
            frequencyCounter2[char] = 1;
        }
    }

    console.log (frequencyCounter1);
    console.log (frequencyCounter2);
    

    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2 [key]) {
            return console.log (false) ; 
        }  
    }

    return console.log (true) ; 

}





validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true