let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  userItem.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
  userItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  userItem.classList.remove("active");
};

let userItem = document.querySelector(".user-content");

document.querySelector("#user-btn").onclick = () => {
  userItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
  userItem.classList.remove("active");
};

function increaseQuantity() {
  var inputElement = document.getElementById("quantityInput");
  var currentValue = parseInt(inputElement.value);
  inputElement.value = currentValue + 1;
}

function decreaseQuantity() {
  var inputElement = document.getElementById("quantityInput");
  var currentValue = parseInt(inputElement.value);

  // Giảm giá trị nếu giá trị hiện tại lớn hơn 1
  if (currentValue > 1) {
    inputElement.value = currentValue - 1;
  }
}
