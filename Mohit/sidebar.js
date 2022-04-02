


const accordin = document.getElementsByClassName('contentBx');
for( i=0; i<accordin.length; i++){
    accordin[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}