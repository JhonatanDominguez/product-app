// let persona ={
//     nombre: "Jesus",
//     apeliddo: "Saucedo",
//     cabello: "Rubio",
//     altura: "Alto"
// }
//Ejemplo de lo que hace log, metodo es log, objeto es console
// const console ={
//     log: function()
// }    console.log();
class Product {
    constructor(name,price,quantity,date){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.date = date;
    }
}

class UI {
    showMessage(message, cssClass){
        const element = document.createElement("div");
        element.className = `alert alert-${cssClass} mt-2`; 
        element.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector("#app");
        container.insertBefore(element, app);
        //callbacks
        setTimeout(function(){
            document.querySelector(".alert").remove();
        },3000)
    }
}
document.getElementById("product-form").addEventListener("submit",function(e){
    const ui = new UI();
    ui.showMessage( "Product added Successfully","success");
})
