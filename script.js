
import { KiemTraChanLe } from "./helper/kiem_tra_chan.js";
import { KiemTraDuongAm } from "./helper/kiem_tra_duong.js";
import { TT } from "./helper/tinh_tong.js";



// TT(-32,20,(res)=>{
//     KiemTraChanLe(res);
//     KiemTraDuongAm(res);
// });

// var data = {
//     name : "huy",
//     age : 18,
//     country : "Viet Nam"
// }


// var promise = new Promise ((resole,reject)=>{
//     if (data)
//         {
//             resole(data);
//         }
//         else
//         {
//             reject("khong co du lieu");
//         }
// })

// var recieveData = (data)=>{
//     console.log(data);
//     return data["name"];
// }

// promise
// .then(recieveData)
// .then((name)=>{
//     console.log(name);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("luoon chay vao day");
// })


// var promise = new Promise((resole,reject)=>{
//     setTimeout(()=>{
//         // resole(100);
//         reject("loi");
//     },3000)
// })


// setTimeout (()=>{
//     console.log("sau 2 giay: ",promise)
// },2000);


// setTimeout (()=>{
//     console.log("sau 4 giay: ",promise)
// },4000);


fetch("https://dummyjson.com/products")
.then((respond)=>{
    return respond.json();
})
.then((data)=>{
    const products = data.products;
    console.log(products);
    const newArray = products.map((item)=>{
        return `<div class="product-item">
            <img src=${item.thumbnail} alt = "" />
            <h2>${item.title}</h2>
            <h3>${item.price}$</h3>
        </div>
        `;
    })

    
    const htmls = newArray.join("");
    let productList = document.getElementById("product-list");
    productList.innerHTML = htmls;
    
})
