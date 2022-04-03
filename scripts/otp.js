var otp=JSON.parse(localStorage.getItem("signupDetails"))
console.log(otp);
otp.map(function(el){
    // var bag=""
    // for(let i=6;i<el.number.length;i++)
    // {
    //     bag=bag+el.number[i]
        
    // }
    
    // var arr=JSON.parse(localStorage.getItem("num")) || []
    // console.log(arr);
    // var obj={
    //     num:bag,
    // }
    // arr.push(obj)
    // localStorage.setItem("num",JSON.stringify(arr))
    
    
    // console.log(bag)
             document.querySelector("#otpsent").innerHTML="Enter the 6-digit OTP sent to" + "    +****"+el.number

 })

document.querySelector("#otpform").addEventListener("submit",(event)=>{
    event.preventDefault()
   

var form=document.querySelector("#otpform")
var otp1=form.first.value
var otp2=form.sec.value
var otp3=form.third.value
var otp4=form.four.value
var otp5=form.five.value

console.log(otp1,otp2,otp3,otp4,otp5);

if(otp1.length==1 && otp2.length==1 && otp3.length==1 && otp4.length==1 && otp5.length==1 ){
alert("otp verified")
window.location.href="login.html"
}
else{
   alert("wrong otp")
}

})

function clickEvent(first,last){
      if(first.value.length)
      {
          document.getElementById(last).focus()
      }
      
  
  }

  function otpform(event){
    event.preventDefault()
    


}