document.addEventListener("DOMContentLoaded", function() {
    const premiumButton = document.getElementById("premium-button");
    
    premiumButton.addEventListener("click", function() {
        alert("Welcome to Our site"); // Display a welcome message as an alert
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-button");
    
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the form from submitting
        
        // Display a message box with the success message
        alert("Message sent successfully!");
        
        // Clear the form fields
        const nameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="email"]');
        const messageInput = document.querySelector('textarea[name="message"]');
        
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    });
});
