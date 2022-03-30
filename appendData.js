let getData= JSON.parse(localStorage.getItem("Sunglasses"));
//console.log(getData)

getData.map( (el)=>{

    let div=document.createElement("div");
    div.setAttribute("class","databoxdivs");

    let img=document.createElement("img");
    img.src=el.image;
    img.style.width="190px";
    img.style.height="220px";



    let brand=document.createElement("p");
    brand.innerText=el.brand;


    let divForName=document.createElement("div");
    divForName.setAttribute("class","divForNamedata");

    let name=document.createElement("p");
    name.innerText=el.name;

    divForName.append(name);

    let price=document.createElement("p");
    price.innerText="₹"+ el.price;

    let button=document.createElement("button");
    button.innerText="Add to bag";
    // button.style.border="none";
    button.style.marginLeft ="50px";
    button.style.marginTop ="2px";


    div.append(img,brand,divForName,price,button);



    document.getElementById("databox").append(div);


} );