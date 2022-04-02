
let count=0;

let getData= JSON.parse(localStorage.getItem("Sunglasses"));


getData.map( (el)=>{

    count++;
    let c=document.getElementById("pcount");
    c.innerText=count;

    let div=document.createElement("div");
    div.setAttribute("class","databoxdivs");

    let img=document.createElement("img");
    img.src=el.image;
    img.style.width="190px";
    img.style.height="220px";



    let brand=document.createElement("p");
    brand.innerText=el.brand;
    brand.style.fontWeight ="bold";


    let divForName=document.createElement("div");
    divForName.setAttribute("class","divForNamedata");

    let name=document.createElement("p");
    name.innerText=el.name;

    divForName.append(name);

    let price=document.createElement("p");
    price.innerText="₹"+ el.price;
    price.style.fontWeight ="bold";

    let strike=document.createElement("s");
    strike.innerText=el.strike;
    strike.style.marginTop="16px";
    strike.style.color="#464444fd"

    let percent=document.createElement("p");
    percent.innerText=el.percent;
    percent.style.color="red";

    let pricesDiv=document.createElement("div");
    pricesDiv.setAttribute("id","PricesDiv");

    pricesDiv.append(price,strike,percent)


    let u=document.createElement("u");
    u.innerText="Add to bag";

    let button=document.createElement("button");
    button.style.marginLeft ="50px";
    button.style.color="black";
    button.style.backgroundColor="white";
    button.style.border="none";
    button.style.fontWeight ="bold";
    button.style.cursor="pointer";
    button.append(u);
    

    


    div.append(img,brand,divForName, pricesDiv ,button,);



    document.getElementById("databox").append(div);


} );








