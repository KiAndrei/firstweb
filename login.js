document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("registerName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("registerConfirmPassword").value;
        const terms = document.getElementById("terms").checked;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        if (!terms) {
            alert("You must accept the terms and conditions");
            return;
        }

        const user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration successful");

        // Switch to login form after successful registration
        toggleForms();
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert("Login successful");
            window.location.href = "index.html"; // Redirect to the main website page after login
        } else {
            alert("Invalid email or password");
        }
    });
});

function toggleForms() {
    const registerSection = document.getElementById("registerSection");
    const loginSection = document.getElementById("loginSection");

    if (registerSection.style.display === "none") {
        registerSection.style.display = "block";
        loginSection.style.display = "none";
    } else {
        registerSection.style.display = "none";
        loginSection.style.display = "block";
    }
}