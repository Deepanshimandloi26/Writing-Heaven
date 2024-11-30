document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace 'yourpassword' with the actual password
    if (password === 'yourpassword') {
        window.location.href = 'writing.html'; // Redirect to the next page
    } else {
        document.getElementById('alertBox').classList.remove('hidden');
    }
});

document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('loginForm').reset();
});

document.getElementById('okButton').addEventListener('click', function() {
    document.getElementById('alertBox').classList.add('hidden');
});