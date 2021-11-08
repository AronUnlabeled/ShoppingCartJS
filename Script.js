var inventory=
{
    name: ["soda" , "candy" , "chips"],
    price:[1.7 , 1.99 , 2.5]

}
var cart={
    name: [],
    price: []
}
var output="";

function Add(x){
    cart.name.push(inventory.name[x])
    cart.price.push(inventory.price[x])
    console.log(`added ${inventory.name[x]}   ${inventory.price[x]}` );
}


function Total(){
    let output="";
    let total=0;
    for(let i = 0; i<cart.name.length;i++){
        total+=cart.price[i];
        output+=`${cart.name[i]}: ${cart.price[i]} \n`;
    }
    output+=`Total: ${total}`
    console.log(output);
}




