var data_div = document.getElementById("data");

function jewellery() {
  let form = document.getElementById("myForm");
  let name = form.name.value;
  let price = form.price.value;
  let image = form.img.value;
  let product = {
    name,
    price,
    image,
  };

  let arr;

  arr = localStorage.getItem("products");

  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("products"));
  }

  arr.push(product);

  localStorage.setItem("products", JSON.stringify(arr));

  showProducts();
}

function appendProducts(el) {
  var div = document.createElement("div");
  let p_name = document.createElement("p");
  p_name.innerHTML = el.name;

  let p_price = document.createElement("p");
  p_price.innerHTML = el.price;

  let img = document.createElement("img");
  img.src = el.image;

  let btn = document.createElement("button");
  btn.textContent = "Add to Cart";
  btn.style.margin = "50px";

  btn.addEventListener("click", function () {
    addtoCart(el);
  });

  div.append(p_name, p_price, img, btn);

  data_div.append(div);
}

function showProducts() {
  let data = JSON.parse(localStorage.getItem("products"));

  data_div.innerHTML = null;
  data.forEach(function (el) {
    appendProducts(el);
  });
}
showProducts();

function addtoCart(obj) {
  let arr;
  arr = localStorage.getItem("My_Cart");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("My_Cart"));
  }
  for (var i = 0; i < arr.length; i++) {
    var c = 0;

    if (
      arr[i].name == obj.name &&
      arr[i].price == obj.price &&
      arr[i].img == obj.img
    ) {
      alert("Already Exists in Your Cart");
      c = 1;
      break;
    }
  }
  if (c != 1) {
    arr.push(obj);
    localStorage.setItem("My_Cart", JSON.stringify(arr));
  }
}

function showCart() {
  window.location.href = "cart.html";
}

showProducts(JSON.parse(localStorage.getItem("products")));
function HtoL() {
  let products = JSON.parse(localStorage.getItem("products"));
  product = product.sort(function (a, b) {
    return a.price - b.price;
  });
  showProducts(products);
}
function LtoH() {
  let products = JSON.parse(localStorage.getItem("products"));
  products = products.sort(function (a, b) {
    return a.price - b.price;
  });
  showProducts(products);
}
