
document.addEventListener("DOMContentLoaded", () => {
    const buyNowButtons = document.querySelectorAll(".buy-now");

    buyNowButtons.forEach(button => {
        button.addEventListener("click", () => {
            const itemName = button.parentElement.querySelector(".des h5").innerText;
            alert(`${itemName} is added to cart!`);
        });
    });
});
