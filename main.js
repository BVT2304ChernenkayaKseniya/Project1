const menuBtn = document.querySelector(".menu_btn");
const menuList = document.querySelector(".menu_list");
const portfolioBtn = document.querySelector(".portfolio_btn");
const portfolioItem = document.querySelector(".portfolio_item");

function toggleMenuVisibility() {
menuList.classList.toggle("hide");
}

function toggleItemVisibility() {
portfolioItem.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);
portfolioBtn.addEventListener("click", toggleItemVisibility);