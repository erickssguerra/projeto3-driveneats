let dishName;
let drinkName;
let dessertName;

let dishPrice = 0;
let drinkPrice = 0;
let dessertPrice = 0;


function pickDish(parameter, preco) {
    const selectedDish = document.querySelector(".dish .box-selected");
    


    if (selectedDish !== null) {
        selectedDish.classList.remove("box-selected");
    } 
    parameter.classList.add("box-selected");
    dishName = document.querySelector(".dish .box-selected h3").innerHTML
    dishPrice = preco
    
    allowButton();
   
}

function pickDrink(parameter, preco) {
    const selectedDrink = document.querySelector(".drink .box-selected");


    if (selectedDrink !== null) {
        selectedDrink.classList.remove("box-selected");
    } 
    parameter.classList.add("box-selected");
    
    drinkName = document.querySelector(".drink .box-selected h3").innerHTML;
    drinkPrice = preco;


    allowButton();

}

function pickDessert(parameter, preco) {
    const selectedDessert = document.querySelector(".dessert .box-selected");


    if (selectedDessert !== null) {
        selectedDessert.classList.remove("box-selected");
    }
    parameter.classList.add("box-selected");

    dessertName = document.querySelector(".dessert .box-selected h3").innerHTML;
    dessertPrice = preco;
    
    allowButton();
}

function allowButton(){

 
    if (dishName !== undefined && drinkName !== undefined && dessertName !== undefined) {
        let buttonVar = document.querySelector("button");
        buttonVar.classList.add("button-available");
        buttonVar.innerHTML = `Fechar o pedido`;
        
    }

}

function whatsapp () {
    
    if (dishName !== undefined && drinkName !== undefined && dessertName !== undefined) {
        let total = dishPrice + drinkPrice + dessertPrice
        
        let whatsappMessage = 
            
            `Olá, gostaria de fazer o pedido:
            - Prato: ${dishName}
            - Bebida: ${drinkName}
            - Sobremesa: ${dessertName}
            Total: R$ ${total.toFixed(2)}`
       
        let url = "https://wa.me/5584999578788?text=" + encodeURIComponent(whatsappMessage);
        window.open(url)

    }
}