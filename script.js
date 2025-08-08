document.addEventListener("DOMContentLoaded", () => {
  const cartCount = document.getElementById("cart-count");
  const buttons = document.querySelectorAll(".add-to-cart");
  let count = 0;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      count++;
      cartCount.textContent = count;
    });
  });

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
    form.reset();
  });
});
