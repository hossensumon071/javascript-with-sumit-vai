/* 1.  how can we swap values?
       [1,2,3,4,5] -> [5,2,3,4,1]
    

   2.  how to copy things from clipboard

   3.  destructuring  aliases
        const language = {name: "Javascript", founded: "1995", founder: "Brendon Eich"}

   4.  get value as data type
        <input id="number" value="123" type="number" />
    5. remove duplicate from array
         [1,2,2,3,4,5,5] -> [1,3,4]
    6. compare two arrays by value
            compare([1,3], [1,5]) -> false
    7. shuffling an array
            [1,2,3,4,5] --> [2,1,4,3,5]
    8. Using comma oparator
            x = (2, 3) -> what is the output of x here ?
*/



// 1.  how can we swap values?
    //    [1,2,3,4,5] -> [5,2,3,4,1]
       
       let array = [1,2,3,4,5]

      // old way

       temp variable
            let temp = array[0];
            array[0] = array[4];
            arra[4]  = temp;

            console.log(array)  // [5,2,3,4,1]

        // array destructuring
            [array[0], array[4]] = [array[4], array[0]];
            console.log(array)

            let a = 1;
            let b = 2; 
            [a,b] = [b,a]
            console.log(a,b);

        // math
            b = a + (a = b) - b
            console.log(a, b)


            

//    2.  how to copy things from clipboard
            
   function copyToClipBoard(){
       const element = document.createElement("textarea");
       element.value = str;
       document.body.appendChild(element);
       element.select();
       document.execCommand("copy");
       document.body.removeChild(element);
   }

   function handleClick() {
       let text = document.querySelector('#text');
       copyToClipBoard(text.innerHTML); 
   }


//   3.  destructuring  aliases 

        const language = {
             name: "Javascript",
             founded: "1995",
             founder: "Brendon Eich"
            }

        const { naem: languageName, founder: createrName} = language;

        console.log(languageName, createrName);




    // 4.  get value as data type


        <input id="number" value="123" type="number" />

        const element = document.querySelector('#number').valueAsNumber;

        console.log(element);


// 5. remove duplicate from array

       const array = [1,2,2,3,4,5,5] 

     console.log([...new Set(array)])  

   

//  6. compare two arrays by value


    const haseElements = (a, b) =>{
        return a.length === b.length && a.every((v,i) => v === b[i]); 
    };

    console.log(haseElements([1, 2], [2, 1]));


// 7. shuffling an array

    const numbers = [1,2,3,4,5] 

    console.log(numbers.sort(() => Math.random() - 0.5));



// 8. Using comma oparatar


  x = (2, 3)  //what is the output of x here ?