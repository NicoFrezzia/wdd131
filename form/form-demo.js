document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("checkoutForm");
  const paymentMethod = document.getElementById("payment");
  const creditCardContainer = document.getElementById("cardNumber").parentElement;
  const paypalContainer = document.getElementById("payPalUser").parentElement;

  // Toggle payment fields based on selection
  function togglePaymentDetails() {
    // Hide both initially
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");

    // Remove "required" attribute initially
    document.getElementById("cardNumber").removeAttribute("required");
    document.getElementById("payPalUser").removeAttribute("required");

    // Show and set required based on selected payment method
    if (paymentMethod.value === "credit") {
      creditCardContainer.classList.remove("hide");
      document.getElementById("cardNumber").setAttribute("required", "");
    } else if (paymentMethod.value === "paypal") {
      paypalContainer.classList.remove("hide");
      document.getElementById("payPalUser").setAttribute("required", "");
    }
  }

  // Validate the form on submission
  function validateForm(event) {
    const errors = [];
    let isValid = true;
    
    const fullName = document.getElementById("fullName").value.trim();
    const creditCardNumber = document.getElementById("cardNumber").value.trim();

    // Validate full name (only "Bob" is allowed)
    if (fullName !== "Bob") {
      errors.push("Only Bob can submit the form.");
      isValid = false;
    }

    // Validate credit card (only "1234123412341234" is allowed)
    if (paymentMethod.value === "credit" && creditCardNumber !== "1234123412341234") {
      errors.push("Invalid credit card number.");
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission
      showErrors(errors);
    }
  }

  // Helper function to display errors
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    errorEl.innerHTML = errors.map((error) => `<p>${error}</p>`).join("");
  }

  // Event listeners
  paymentMethod.addEventListener("change", togglePaymentDetails);
  form.addEventListener("submit", validateForm);
});