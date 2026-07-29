// =========================
// Car Sales System
// =========================

const cars = [

{
brand:"Tata",
model:"Nexon",
fuel:"Petrol",
transmission:"Manual",
mileage:"17.4 km/l",
year:"2024",
price:"₹13,50,000",

image:"images/nexon.avif"
},

{
brand:"Tata",
model:"Harrier",
fuel:"Diesel",
transmission:"Automatic",
mileage:"16.8 km/l",
year:"2024",
price:"₹24,99,000",

image:"images/harrier.avif"
},

{
brand:"Hyundai",
model:"Creta",
fuel:"Petrol",
transmission:"Automatic",
mileage:"17.7 km/l",
year:"2024",
price:"₹18,20,000",

image:"images/creta.avif"
},

{
brand:"Hyundai",
model:"Venue",
fuel:"Petrol",
transmission:"Manual",
mileage:"18.3 km/l",
year:"2024",
price:"₹11,50,000",

image:"images/venue.avif"
},

{
brand:"Mahindra",
model:"Scorpio",
fuel:"Diesel",
transmission:"Manual",
mileage:"15.4 km/l",
year:"2024",
price:"₹21,90,000",
image:"images/scorpio.avif"
},

{
brand:"Mahindra",
model:"XUV700",
fuel:"Diesel",
transmission:"Automatic",
mileage:"17 km/l",
year:"2024",
price:"₹26,50,000",

image:"images/xuv700.avif"
},

{
brand:"Toyota",
model:"Fortuner",
fuel:"Diesel",
transmission:"Automatic",
mileage:"14.2 km/l",
year:"2024",
price:"₹42,00,000",

image:"images/fortuner.avif"
},

{
brand:"Toyota",
model:"Innova Hycross",
fuel:"Hybrid",
transmission:"Automatic",
mileage:"23.2 km/l",
year:"2024",
price:"₹30,50,000",

image:"images/hycross.avif"
},

{
brand:"Honda",
model:"City",
fuel:"Petrol",
transmission:"CVT",
mileage:"18.4 km/l",
year:"2024",
price:"₹15,80,000",

image:"images/city.avif"
},

{
brand:"Honda",
model:"Elevate",
fuel:"Petrol",
transmission:"Manual",
mileage:"16.9 km/l",
year:"2024",
price:"₹16,90,000",

image:"images/elevate.avif"
}

];

const container = document.getElementById("carContainer");

function displayCars(carList){

container.innerHTML="";

carList.forEach(car=>{

container.innerHTML += `

<div class="col-lg-4 col-md-6 mb-4">

<div class="card h-100">

<img src="${car.image}" class="card-img-top">

<div class="card-body">

<h4 class="card-title">${car.model}</h4>

<p class="brand">${car.brand}</p>



<div class="details">

<p><strong>Fuel :</strong> ${car.fuel}</p>

<p><strong>Transmission :</strong> ${car.transmission}</p>

<p><strong>Mileage :</strong> ${car.mileage}</p>

<p><strong>Year :</strong> ${car.year}</p>

</div>

<div class="price">

${car.price}

</div>

<a href="details.html?car=${encodeURIComponent(car.model)}" class="btn btn-primary w-100">
    View Details
</a>
</div>

</div>

</div>

`;

});

}

displayCars(cars);

// =========================
// Search
// =========================

const search=document.getElementById("searchBox");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=cars.filter(car=>

car.model.toLowerCase().includes(value)

||

car.brand.toLowerCase().includes(value)

);

displayCars(filtered);

});

// =========================
// Brand Filter
// =========================

const brand=document.getElementById("brandFilter");

brand.addEventListener("change",()=>{

if(brand.value=="All"){

displayCars(cars);

return;

}

const filtered=cars.filter(car=>

car.brand==brand.value

);

displayCars(filtered);

});
// Show / Hide Password

function togglePassword(id){

const password=document.getElementById(id);

if(password.type==="password"){

password.type="text";

}
else{

password.type="password";

}

}