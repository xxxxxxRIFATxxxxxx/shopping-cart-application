// Define UI
let products = document.querySelector(".products");
let table = document.querySelector("table");

// Define Functions
let addProduct = (e) => {
    if (e.target.textContent === "Add to Cart") {
        let item = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        let price = e.target.parentElement.previousElementSibling.textContent;
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${item}</td>
        <td>${price}</td>
        <td><a href="#">Delete</a></td>`;
        table.appendChild(tr);
    };
    e.preventDefault()
};

let removeProduct = (e) => {
    if (e.target.hasAttribute("href")) {
        e.target.parentElement.parentElement.remove();
    };
    e.preventDefault()
};

// Define Event Listeners
products.addEventListener("click", addProduct);
table.addEventListener("click", removeProduct);


