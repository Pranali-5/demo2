var data_div = document.getElementById("data");

var totalPrice = 0;
var totalItems = 0;

function appendLocations(el) {
  var div = document.createElement("div");
  let p_name = document.createElement("p");
  p_name.innerHTML = el.name;

  let p_price = document.createElement("p");
  totalPrice += el.price;
  p_price.innerHTML = el.price;

  let img = document.createElement("img");
  img.src = el.image;

  div.append(p_name, p_price, img);

  data_div.append(div);
}

function showCart() {
  let data = JSON.parse(localStorage.getItem("My_Cart"));

  data_div.innerHTML = null;
  data.forEach(function (el) {
    appendLocations(el);
  });
}

var Cart = JSON.parse(localStorage.getItem("My_Cart"));

totalItems = Cart.length;
var tp = 0;

for (var i = 0; i < totalItems; i++) {
  totalPrice += Number(Cart[i].price);
  tp += Number(Cart[i].price);
}
var total = document.getElementById("total");
var div1 = document.createElement("div");
var p1 = document.createElement("p");
var p2 = document.createElement("p");
p1.innerHTML = `Total Number of Items : ${totalItems}`;
p2.innerHTML = `Total Price : ${Number(totalPrice)}`;
div1.append(p1, p2);
total.append(div1);

function coupon() {
  var promo = document.getElementById("coupon").value;
  if (promo == "masai30") {
    p2.innerHTML = `Total Price : ${Math.floor(tp * 0.3)}`;
  }
}
showCart();

function checkOut() {
  window.location.href = "checkout.html";
}
