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
    img.setAttribute("style", "width:100%;  height: 390px;");
    slideshow.innerHTML = null;
    slideshow.append(img)
    }, 2000);
 }


const homeDatashow=(homeData,AppendDiv)=>{

  homeData.forEach(({image_url, name, decs,  price})=>{

      
      let rowDiv=document.createElement("div");
         rowDiv.id="homeDataRowDiv";

         let img=document.createElement("img");
         img.src=image_url;

         let Title = document.createElement("b");
         Title.innerText=name;

         let descriptions= document.createElement("p");
         descriptions.innerText=decs;

         let priceTag = document.createElement("h4");

         priceTag.setAttribute("style","color:black;")
         priceTag.innerText=`Rs.${price}`
         console.log(price)

         priceTag.innerText=`Rs.${price}`;


         let but= document.createElement("button");
         but.innerText=`Add To Bag`;
         but.id="butAddToBag"

         let hrTag= document.createElement("hr");
         hrTag.id="hrTag"

         rowDiv.append(img,Title,descriptions,priceTag,but,hrTag);
         AppendDiv.append(rowDiv);
   })
}

export {slideImagfun,homeDatashow}

      
 
