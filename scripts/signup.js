document.querySelector("#signupform").addEventListener("submit", myForm)

var Arr=JSON.parse(localStorage.getItem("signupDetails")) || [];
  function myForm(event){

   event.preventDefault()
var form=document.querySelector("#signupform")
 var number=form.number.value
 console.log((number));
 if(number.length==10)
 {
     alert("otp sent to your mobile number")

     alert("your otp is 56789")
     window.location.href="otp.html"
 }
 else{
     alert("please check the number")
 }
   var Obj={
       number:form.number.value,
       
   }

   Arr.push(Obj)
   console.log(Arr)
   
   localStorage.setItem("signupDetails",JSON.stringify(Arr))
   
 
console.log(generateOTP)
   
  
  }