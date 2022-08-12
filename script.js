function pickDish(parameter) {
    const selected = document.querySelector(".dish .box-selected");
    if (selected === parameter) {
        selected.classList.remove("box-selected");
        return //não lê o resto do código
    }

    if (selected !== null) {
        selected.classList.remove("box-selected");
    } 
    parameter.classList.add("box-selected");

}

function pickDrink(parameter) {
    const selected = document.querySelector(".drink .box-selected");
    if (selected === parameter) {
        selected.classList.remove("box-selected");
        return //não lê o resto do código
    }

    if (selected !== null) {
        selected.classList.remove("box-selected");
    } 
    parameter.classList.add("box-selected");

}

function pickDesert(parameter) {
    const selected = document.querySelector(".desert .box-selected");
    if (selected === parameter) {
        selected.classList.remove("box-selected");
        return
    }

    if (selected !== null) {
        selected.classList.remove("box-selected")
    }
    parameter.classList.add("box-selected");
}