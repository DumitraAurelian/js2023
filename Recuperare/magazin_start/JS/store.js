// salveaza datele in local.storage
const setStorageItem=(name,item)=>{
    localStorage.setItem(name,JSON.stringify(item))
}
// returneaza datele din local storage

const getStorageItem=(item)=>{
    let storageItem =localStorage.getItem(item);
    if (storageItem){
        storageItem=JSON.parse(localStorage.getItem(item))
    }else {
        storageItem=[]
    }
    return storageItem
}
// salveaza toate produsele din localStorage
// let store =getStorageItem('store');
// const setupStore=(products)=> {
//     store=products.map((product)=>{

//         // metoda mai compacta de a defini si atribui mai multe variabile in acelasi timp
//         const {
//             id,
//             fields; {
//                 featured,, price, company, colors, image:img
//             },
//         }=product;
//         const image=img[0].thumbnails.large.url;
//         return {ide, featured, name, price, company, colors, image};
//         });

// }

// formeaza pretul
const formatPrice=(price)=> {
    let formattedPrice= new Intl.NumberFormat ('en-US', {
        style : 'currency',
        currency: 'EUR',
    }).format((price/100).toFixed(2))
    return formattedPrice
}

const getElement =(selection)=>{
    const element =document.querySelector(selection)
    if (element) return element
    throw new Error (`Please check "${selection}" selector, no such element exist`)
}