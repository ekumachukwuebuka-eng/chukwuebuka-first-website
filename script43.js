function generatePassword() {
    const length = document.getElementById("passwordLength").value;

    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("generatedPassword").value = password;
}

function copyPassword() {
    const password = document.getElementById("generatedPassword");

    if (password.value === "") {
        alert("Please generate a password first.");
        return;
    }

    navigator.clipboard.writeText(password.value);

    alert("Password copied to clipboard!");
}