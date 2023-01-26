// const productsDom=document.querySelector('.products-container');
const  productsDom=document.getElementById ('products-container');
const fetchProducts =function (){
    productsDom.innerHTML='<div class="loading"></div>';
    try {
        
        const data=productsJsonList;
        return data;
        
    } catch (error){
        productsDom.innerHTML='<p class="error"> there was an error</p>;'
    }
}
//afisez produsele

const displayProducts = (list)=> {
    const productList=list
    .map ((product)=>{
        const id=product.id;
        const company =product.fields.company;
        const title=product.fields.name;
        const price=product.fields.price;
        const img = product.fields.image[0].url;
        // sau in forma compacta:ES6 destructing assignment
        // const {id} = product;
        // const {name: title, company, price}= product.fields;

        return `<article class="product">
        <div class="product-container">
          <img src="${img}" class="product-img img" alt="${title}">
         
          <div class="product-icons">
            <a href="product.html?id=rec43w3ipXvP28vog" class="product-icon">
              <i class="fas fa-search"></i>
            </a>
            <button class="product-cart-btn product-icon" data-id="${id}">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <footer>
          <p class="product-name">${title}</p>
          <h5>${company}</h5>
          <h4 class="product-price">${formatPrice}</h4>
        </footer>
        </article>`;
    })
    .join('');
    productsDom.innerHTML=productList;
};
const data = fetchProducts();
displayProducts(data);
