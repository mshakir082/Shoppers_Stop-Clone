
let checkout = JSON.parse(localStorage.getItem('checkout'))

checkout.forEach(({subtotal,total,discount})=>{
    

    let order_subtotal = document.getElementById('subtotal');
    order_subtotal.innerText =  "₹" +subtotal;

    let payable = document.getElementById('payable');
    payable.innerText = "₹"+ total;
    let couponDiscount =document.getElementById('coupon-discount');
            
    couponDiscount.innerText = discount;
})

document.getElementById("PROCHECK").addEventListener("click",()=>{

    alert("Address Save Succesfully!");
    window.location.href="payment.html"
})