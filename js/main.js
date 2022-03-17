

 let productNameInput=document.getElementById("productName");
 let productPriceInput=document.getElementById("productPrice");
 let productCatInput=document.getElementById("productcat");
 let productDesInput=document.getElementById("productDesc"); 
 let productContainer;
 let mainbutton=document.getElementById("demo");
 var crruntIndex;
    if(localStorage.getItem("products")==null)
        {
            productContainer =[];
        }
        else
        {
            productContainer =JSON.parse(localStorage.getItem("products"))
            display(productContainer);
        }

 function addProduct() 
 {
     

    let product=
    {
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCatInput.value,
        description:productDesInput.value
     }
    productContainer.push(product);
    localStorage.setItem("products" ,JSON.stringify(productContainer))
    display(productContainer);
    clearForm();
   

     
 }


 function display(productList) 
 {
     let cartona=``;
     for(let i =0; i<productList.length; i++)
     {
         cartona+=`<tr>
         <td>${[i]}</td>
         <td>${productList[i].name}</td>
         <td>${productList[i].price}</td>
         <td>${ productList[i].category}</td>
         <td>${ productList[i].description}</td>
         <td><button onclick=getProductInfo(${i}) class="btn btn-warning"> update </button></td>
         <td><button class="btn btn-danger " onclick=" deleteProduct(${i})"> delete</button></td>     </tr>`
     }
     document.getElementById("tableRow").innerHTML= cartona;
     
 }

 function clearForm() 
 {
    productNameInput.value="";
    productPriceInput.value="";
    productCatInput.value="";
    productDesInput.value="";
    
 }

 function deleteProduct(index) 
 {
     productContainer.splice(index,1);
     localStorage.setItem("products" ,JSON.stringify(productContainer));
     display(productContainer);
     
 }  

 function searchInput(term) 
 {
    
    let searchProduct=[];
    for(let i =0; i<productContainer.length;i++)
    {
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())==true)
     {
        searchProduct.push(productContainer[i])
     }
    }
    display(searchProduct);
 }
 function getProductInfo(index) 
 {  
      crruntIndex = index;
     productNameInput.value= productContainer[index].name;
     productPriceInput.value= productContainer[index].price;
     productCatInput.value = productContainer[index].category;
     productDesInput.value = productContainer[index].description;
     mainbutton.innerHTML="updateProduct"
  
    
     
 }


 function updateProduct()
 {  
  
    var product = 
    {
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCatInput.value,
        description:productDesInput.value
    }
     productContainer[crruntIndex].name = product.name
     productContainer[crruntIndex].price = product.price
     productContainer[crruntIndex].category = product.category
     productContainer[crruntIndex].description = product.description
    console.log(productContainer[crruntIndex].name);
 }
 
 
 function clickbtn()

 {
     if(mainbutton.innerHTML==="addProduct")
     {
        
       addProduct();
     }
     else 
     {
        updateProduct();
        display(productContainer);
        clearForm() 
        mainbutton.innerHTML="addProduct"
     }
     
 }





