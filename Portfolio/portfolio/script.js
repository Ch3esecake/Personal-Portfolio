
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const errorElement = document.getElementById('error');

        let isValid = true;

        if (nameInput.value.trim() === '') {
            setErrorFor(nameInput, 'Name cannot be blank');
            isValid = false;
        } else {
            setSuccessFor(nameInput);
        }

        if (emailInput.value.trim() === '') {
            setErrorFor(emailInput, 'Email cannot be blank');
            isValid = false;
        } else if (!isEmail(emailInput.value.trim())) {
            setErrorFor(emailInput, 'Not a valid email');
            isValid = false;
        } else {
            setSuccessFor(emailInput);
        }

        if (messageInput.value.trim() === '') {
            setErrorFor(messageInput, 'Message cannot be blank');
            isValid = false;
        } else {
            setSuccessFor(messageInput);
        }

        if (isValid) {
            form.reset();
            alert('Form submitted successfully!');
        }
    });

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const errorMessage = formControl.querySelector('.error-message');
        formControl.classList.add('error');
        errorMessage.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.classList.remove('error');
    }

    function isEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
