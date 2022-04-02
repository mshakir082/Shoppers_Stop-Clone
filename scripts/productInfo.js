let data=JSON.parse(localStorage.getItem("cartItems"))

   const mensDatashow=(data)=>{

  
    data.forEach(({image_url,image_url1,image_url2, name, decs,  price})=>{
    
      
       let nametag=document.getElementById("nameTag");
       nametag.innerText=name;
    
    
       let descript=document.getElementById("descTag");
       descript.innerText=decs;
    
       let img=document.getElementById("smallImg");
       img.src=image_url;
    
        img=document.getElementById("smallImgg");
        img.src=image_url1;
    
       img=document.getElementById("bigImg");
       img.src=image_url2;
    
        nametag=document.getElementById("nameDiv");
       nametag.innerText=name;
    
       descript=document.getElementById("descDiv");
       descript.innerText=decs;
       document.querySelector(".addBtn").addEventListener("click",()=>{
      
        showItem(image_url,image_url1,image_url2, name, decs,  price)
    })
    
    document.querySelector(".addBtn1").addEventListener("click",()=>{
      
      showItem(image_url,image_url1,image_url2, name, decs,  price)
      
    })
    
       let pricediv=document.getElementById("priceDiv");
       pricediv.innerText=`₹${price}`;
    
        
    });
       }
       
      
      mensDatashow(data)
      let cartItem= JSON.parse(localStorage.getItem("cart")) ||[]
      function showItem(image_url,image_url1,image_url2, name, decs,  price){
        let item=document.getElementById("cartItem")
        let cartItem= JSON.parse(localStorage.getItem("cart")) ||[]
        let obj={
            image_url,image_url1,image_url2, name, decs,  price
        }
        cartItem.push(obj)
        localStorage.setItem("cart",JSON.stringify(cartItem))
         item.innerText=cartItem.length;
       console.log(cartItem.length)
        // console.log("tab")
       
      }
       
         
     
    