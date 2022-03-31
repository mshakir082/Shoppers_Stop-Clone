
// --------------slide images----------------------

const slideImagfun=(images,slideshow)=>{

    let img = document.createElement("img");
    img.src = images[0];
    let i = 0;
    setInterval( ()=> {
       if (i == images.length) {
              i = 0;
            }
    let imgUrl = images[i++];
    let img = document.createElement("img");
    img.src = imgUrl;
    img.setAttribute("style", "width:100%;  height: 200px;");
    slideshow.innerHTML = null;
    slideshow.append(img)
    }, 2000);
 }



const mensDatashow=(data,appendDiv)=>{
   
  document.getElementById("main").innerHTML=null

    data.forEach(({image_url, name, decs,  price, strike_price, offer})=>{

      
      let rowDiv=document.createElement("div");
         rowDiv.id="homeDataRowDiv";

         let img=document.createElement("img");
         img.src=image_url;

         let Title = document.createElement("h3");
         Title.innerText=name;
         
         let descriptions= document.createElement("p");
         descriptions.innerText=decs;
         descriptions.id="desc";


         let priceTag = document.createElement("h5");
         priceTag.innerText=`₹${price}`;
         priceTag.id="priceTag";

         let priceTag2 = document.createElement("h5");
         if(strike_price == ""){
         
         priceTag2.innerText=`${strike_price}`;
         priceTag2.id="priceTag2"
       
      }
      else{
         
         priceTag2.innerText=`₹${strike_price}`;
         priceTag2.id="priceTag2"
         }


         let priceOffer = document.createElement("h5");
         priceOffer.innerText=` ${offer}`;
         priceOffer.id="offers";


         let priceDiv=document.createElement("div");
         priceDiv.id="priceDiv";


         let but= document.createElement("button");
         but.innerText=`Add To Bag`;
         but.id="butAddToBag"

         let hrTag= document.createElement("hr");
         hrTag.id="hrTag"
         
         priceDiv.append(priceTag,priceTag2,priceOffer)
         rowDiv.append(img,Title,descriptions ,priceDiv);
         appendDiv.append(rowDiv);
   })
}
export  {slideImagfun,mensDatashow} 



   //  ------------Sort Function--------------


   document.getElementById("sorter").addEventListener("click",() =>{
      
      var sorting=document.getElementById("sorter").value
      console.log(sorting)
      if(sorting=='h2l'){
         mensClothingData.sort((a,b)=>{
              return b.price - a.price;
          })
          mensDatashow(mensClothingData)
      }
      else if(sorting=='l2h'){
         mensClothingData.sort(function (a,b){
              return a.price - b.price;
          })
          mensDatashow(mensClothingData)
      }
   
   });
  

