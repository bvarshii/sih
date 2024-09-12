let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    { id: 1, name: 'BRINGRAJ PLANT', image: 'bhringraj.jpg', price: 135 },
    { id: 2, name: 'Ghanera', image: 'ghanera.jpg', price: 850 },
    { id: 3, name: 'Imli Plant', image: 'imli.jpg', price: 199 },
    { id: 4, name: 'Karakai - Medicinal Plant', image: 'karakai.jpg', price: 875 },
    { id: 5, name: 'Kuvadiya Seeds', image: 'kuvadiya_seeds.jpg', price: 350 },
    { id: 6, name: 'Lata Harde/Harad/Haritaki Seed', image: 'Lata_Harde.jpg', price: 151 },
    { id: 7, name: 'Shatavari Plant', image: 'shatavari.jpeg', price: 199 },
    { id: 8, name: 'Landrina Dry Seed', image: 'landrina_dry_seed.jpg', price: 75 },
    { id: 9, name: 'Marsh Barbel Dried Seed', image: 'marsh_barbel_dried_seed.jpg', price: 100 },
    { id: 10, name: 'Garni Seed', image: 'garni_seeds.jpg', price: 130 },
    { id: 11, name: 'Bhringraj Oil', image: 'bhringraj_oil.jpg', price: 93 },
    { id: 12, name: 'Tea Tree Essential Oil', image: 'tea_tree_oil.jpg', price: 209 },
    { id: 13, name: 'Hibiscus Oil', image: 'hibiscus_oil.jpg', price: 274 },
    { id: 17, name: 'Imli Candy Sticks', image: 'imli_candy.jpg', price: 177 },
    { id: 18, name: 'Turmeric Stick', image: 'turmeric_stick.jpg', price: 123 },
    { id: 19, name: 'Neem Oil', image: 'neem_oil.png', price: 129 },
    { id: 20, name: 'Tulsi Plant', image: 'tulsi_plant.jpg', price: 99 },  // New product 1
    { id: 21, name: 'Aloe Vera Gel', image: 'aloe_vera_gel.jpg', price: 180 }  // New product 2
];


let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
    showSnackbar(); // Show the snackbar notification
}

function showSnackbar() {
    // Get the snackbar DIV
    var snackbar = document.getElementById("snackbar");

    // Add the "show" class to DIV
    snackbar.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

function searchProducts() {
    let query = document.getElementById('searchBar').value.toLowerCase();
    list.innerHTML = '';  // Clear the current product list

    // Filter products based on the search query
    products
        .filter(product => product.name.toLowerCase().includes(query))
        .forEach((value, key) => {
            let newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML = `
                <img src="image/${value.image}">
                <div class="title">${value.name}</div>
                <div class="price">${value.price.toLocaleString()}</div>
                <button onclick="addToCard(${key})">Add To Card</button>`;
            list.appendChild(newDiv);
        });
}
