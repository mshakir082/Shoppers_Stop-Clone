var Ugers=JSON.parse(localStorage.getItem("signupDetails"))

console.log(Ugers)
document.querySelector("#loginform").addEventListener("submit",formSubmit)
function formSubmit(event){
event.preventDefault()
var form=document.querySelector("#loginform")

  var  number=form.number.value;
  
console.log(number)

var flag=0;
for(var i=0;i<Ugers.length;i++){
    if(Ugers[i].number==number ){
    flag=1
    }
}
if(flag==1){
    alert("login successfull")
    window.location.href="index.html"
}
else{
    alert("login Failed")
}
}