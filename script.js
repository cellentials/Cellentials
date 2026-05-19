const form = document.getElementById("order-form");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const quantity = document.getElementById("quantity").value;

    if (name === "" || email === "" || address === "" || quantity === "") {
        message.textContent = "Please fill in all fields.";
        return;
    }

    const phoneNumber = "971507528911";

    const orderMessage =
        `Hello, I want to place an order.%0A%0A` +
        `Product: NO.1%0A` +
        `Price: AED 179%0A` +
        `Quantity: ${quantity}%0A%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Address: ${address}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${orderMessage}`;

    message.textContent = "Redirecting you to WhatsApp...";
    window.open(whatsappURL, "_blank");

    form.reset();
});
