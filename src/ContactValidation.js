document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents default form submission

        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var message = document.getElementById("message").value.trim();

        if (name === "") {
            alert("Please fill out your name.");
            return false;
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (message === "") {
            alert("Please write your message.");
            return false;
        }

        alert("Thank you for your message! We will contact you soon.");
        this.submit();
    });
});
