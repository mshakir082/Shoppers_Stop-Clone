let cartItem= JSON.parse(localStorage.getItem("cart"))

// --------------display BAg Details -----------------

const display=(cartItem)=>{


    document.querySelector('#products').innerHTML = "";

    cartItem.map((ele,index)=>{
        
        // ---------img div---------

        let div = document.createElement('div');
        div.setAttribute('id',"cart-products")

        let imageDiv = document.createElement('div');
        imageDiv.setAttribute('id','image');
       

        let image = document.createElement("img");
        image.setAttribute("src", ele.image_url);

        image.setAttribute("style","width:100%;height:100%;")
        imageDiv.append(image);

        // ------brandDiv and Price --------------

        let brand_div =document.createElement('div');
        brand_div.setAttribute('id','brand');

        let brand = document.createElement("span");
        brand.innerHTML = ele.name;
        brand.setAttribute("id", "brand-name");

        let des = document.createElement("h5");
        des.textContent = ele.desc;

        let sizeLabel = document.createElement('label');
        sizeLabel.textContent = "size : ";
        
        let size = document.createElement('select');
       
       
        let opt1 = document.createElement('option');
        opt1.textContent = 'S';

        let opt2 = document.createElement('option');
        opt2.textContent = 'M';

        let opt3 = document.createElement('option');
        opt3.textContent = 'L';

        let opt4 = document.createElement('option');
        opt4.textContent = 'XL';

        let opt5 = document.createElement('option');
        opt5.textContent = 'XXL';

        size.append(opt1,opt2,opt3,opt4,opt5);



        // ---------------------quantity or Totals----------------


        let quantityLabel = document.createElement('label');
        quantityLabel.textContent = "quantity : ";

        let quantity = document.createElement('select');
        quantityLabel.setAttribute('id','quantityRange');
        
        let opt11 = document.createElement('option');
        opt11.textContent = 1;

        let opt12 = document.createElement('option');
        opt12.textContent = 2;

        let opt13 = document.createElement('option');
        opt13.textContent = 3;

        let opt14 = document.createElement('option');
        opt14.textContent = 4;

        let opt15 = document.createElement('option');
        opt15.textContent = 5;

        var original_price = ele.price;

        quantity.addEventListener('change',()=>{
            
            let quantityNo = +quantity.value;

            ele.price = quantityNo * (original_price);
            price.textContent = "₹" + ele.price;
            orderSummary(cartItem);

        })
       
    // ---------Remove Data-------------------------

    let del = document.createElement('button');
    del.textContent = 'Remove';

    let delDiv =document.createElement('div');
    delDiv.append(del);
    delDiv.style.marginTop = '20px';


    del.addEventListener('click',(event)=>{

        cartItem.splice(index,1);
        localStorage.setItem("cart",JSON.stringify(cartItem))
    
        display(cartItem);
        orderSummary(cartItem)
          
    })
       


    
        quantity.append(opt11,opt12,opt13,opt14,opt15);


        brand_div.append(brand,des,sizeLabel,size,quantityLabel,quantity,delDiv);

        // ------------------Price-----------------

        let price_div = document.createElement("div");
        price_div.setAttribute('id','price')

        let price = document.createElement("p");
        price.innerText = "₹" + ele.price;
        price.setAttribute("id", "price-bold");
    
        price_div.append(price)

        div.append(imageDiv,brand_div,price_div)

        document.getElementById("products").append(div)

    })
}



// -----------------------ordersummary----------------------------
var obj={}
        
function orderSummary(arr){

    var total = 0;

    arr.map((ele)=>{
        total += +ele.price ;
        
    });

    let order_subtotal = document.getElementById('subtotal');
    order_subtotal.innerText =  "₹" +total;
    obj["subtotal"]=total

   
    let payable = document.getElementById('payable');
    payable.innerText = "₹"+ Number(total);
    obj["total"]= Number(total);
   
  
    let apply = document.getElementById('apply');

    apply.addEventListener('click',()=>{

        let couponText = document.getElementById('coupon').value;
        let invalid_display = document.getElementById('invalid');

        if(couponText=="masai30"){

            invalid_display.style.display = 'block';
            invalid_display.style.color = 'green';
            invalid_display.textContent = 'Coupon Applied !'


            let couponDiscount =document.getElementById('coupon-discount');
            
            couponDiscount.innerText = total*30/100;
    
            total = total - total*30/100;

            payable.innerHTML = "₹"+ Math.ceil(total);

            obj["discount"]=  total*30/100;
            obj["total"]=Math.ceil(total);
          
        }
        else{
            

            invalid_display.style.display = 'block';
            invalid_display.style.color = 'red';
            invalid_display.textContent = 'Invalid coupon'

        }
        let arr=[];
        arr.push(obj);
        localStorage.setItem('checkout',JSON.stringify(arr))
    })
   
   
}

display(cartItem)

document.getElementById("check-btn").addEventListener("click", ()=>{

    window.location.href = "checkout.html"
})