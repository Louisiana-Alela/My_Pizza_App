// UI
var pizzaType = document.getElementById("pizzatitle");

function pepperoni() {
    pizzatitle.innerText = "Pepperoni Pizza";
}
function meat() {
    pizzatitle.innerText = "Meat Pizza";
}
function hawaiian() {
    pizzatitle.innerText = "Hawaiian Pizza"
}


// Business logic

function pizza(name, size, toppings, crust, qty, total) {
    this.name = name;
    this.size = size;
    this.toppings = toppings;
    this.crust = crust
    this.qty = qty;
    this.total = total;

}

var grandTotal = 0;
function addcart() {
    var pizzaName = pizzatitle.textContent
    var pizzaSize = parseInt($(".size:checked").val());
    var pizzaToppings = parseInt($(".toppings:checked").val());
    var pizzaCrust = parseInt($(".crust:checked").val());
    var pizzaQty = $("#quantity").val();


    if (pizzaSize == 1000) {
        var size = "large"
    }
    else if (pizzaSize == 800) {
        var size = "Medium"
    }
    else if (pizzaSize == 500) {
        var size = "Small"
    }
    else {
        console.log(" There is a problem")
    }


    if (pizzaToppings == 150) {
        var toping = "Black Olives"
    }
    else if (pizzaToppings == 100) {
        var toping = "Bacon"
    }
    else if (pizzaToppings == 50) {
        var toping = "Green peppers"
    }
    else if (pizzaToppings == 120) {
        var toping = "Pineapple"
    }
    else {
        console.log("something went wrong")
    }


    if (pizzaCrust == 200) {
        var crust = "crispy"
    }
    else if (pizzaCrust == 150) {
        var crust = "Stuffed"
    }
    else if (pizzaCrust == 100) {
        var crust = "Gluten free"
    }

    var pizzaTotal = pizzaSize + pizzaCrust + pizzaToppings;

    let theepizza = new pizza(pizzaName, size, toping, pizzaCrust, pizzaQty, pizzaTotal)
    console.log(theepizza)
    pizzatitle.innerText = "Pick another pizza from above";


    $(".table").append('<tr>' + '<td>' + theepizza.name + '</td>' +
        '<td>' + size + '</td>' + '<td>' + toping + '</td>' + '<td>' + crust + '</td>'
        + '<td>' + theepizza.total + '</td>')

    function addcart() {
        let subTotal =0;
        subTotal = subTotal + pizzaTotal;
        $(".value").html(subTotal)
    }
    // let subTotal = subTotal + pizzaTotal;
    



}

// function addcart() {
//     let subTotal = 0;
//     subTotal=subTotal + pizzaTotal;
//     return subTotal
//     // $(".value").html(subTotal)
// }
// $(".value").html(subTotal)

function deliver() {
    var answer = prompt("Where do you want your pizza delivered?")
    if (answer == "Yes") {
        subTotal
    }

}
