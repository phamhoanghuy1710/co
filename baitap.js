// const consoleLog = (array)=>{
//     array.forEach(element => {
//         console.log(element);
//     });
// }



// const forEachTest   = (array , callback)=>{
//     callback(array);
// }
// var arr1 = [1, 2, 3, 4, 5];
// forEachTest(arr1,consoleLog);
// var arr2 =  ["Lê Văn A", "Nguyễn Thị B", "Đỗ Thị C"];
// forEachTest(arr2,consoleLog);


// const consoleLog = (array)=>{
//     array.forEach((element , index , arr) => {
//         console.log(element + arr[index+1]);
//     });
// }

// const forEachPair   = (array , callback)=>{
//     callback(array);
// }
// var arr1 = [1, 2, 3, 4, 5];
// forEachPair (arr1,consoleLog);
// var arr2 = [5, 20, 30, 60, 90];
// forEachPair (arr2,consoleLog);



// var getRandomNumber = ()=>{
//     return new Promise ((resole,reject)=>{
//         // const randomNumber = Math.floor(Math.random()*10) + 1;

//         const randomNumber = undefined;

//         if (randomNumber){
//             resole(randomNumber);
//         }
//         else{
//             reject("Khong the tao so ngau nhien");
//         }
//     })
// }



// var promise = getRandomNumber()
// .then((number)=>{
//     console.log("so ngau nhien la: ", number)
// })
// .catch((error)=>{
//     console.log(error);
// })




// var getEvenNumber = (arr)=>{
//     return new Promise ((resole,reject)=>{
//         const evenNumbers = arr.filter((item)=>{
//             if (item % 2 == 0){
//                 return item;
//             }
//         })

//         if (evenNumbers.length  > 0){
//             resole(evenNumbers);
//         }
//         else{
//             reject("Khong co so chan trong mang");
//         }
//     })
// }

// const numbersTest1 = [11, 13, 15, 17, 2];
// var promise = getEvenNumber (numbersTest1)
// .then((res)=>{
//     console.log(res);
// })
// .catch ((error)=>{
//     console.log(error);
// })

fetch("https://restcountries.com/v2/all")
.then((respond)=>{
    return respond.json();
})
.then ((data)=>{
    const newData = data.map((item)=>{
        return `<div class="country-item">
            <img src="${item.flag}"/>
            <h2>${item.name}-${item.capital}</h2>
         </div>`;
    })
    const htmls = newData.join("");
    const coutryList = document.getElementById("country-list");
    coutryList.innerHTML = htmls;
})
.catch(()=>{
    console.log("Loi")
})


