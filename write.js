document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login validation
    if(username === 'user' && password === 'password') {
        alert('Login successful');
        localStorage.setItem('loggedIn', 'true');
        setTimeout(() => {
            window.location.href = 'writing.html';
        }, 1000); // Redirect after 1 second to allow user to see the alert
    } else {
        alert('Invalid login credentials');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if(localStorage.getItem('loggedIn') !== 'true') {
        if(window.location.pathname.endsWith('writing.html')) {
            window.location.href = 'login.html';
        }
    }
});

document.getElementById('saveButton').addEventListener('click', function() {
    const content = document.getElementById('writingArea').value;
    localStorage.setItem('writingContent', content);
    alert('Content saved!');
});


