document.getElementById('saveButton').addEventListener('click', function() {
    if (confirm('Are you sure you want to save it?')) {
        alert('Your thoughts are safely saved');
        window.location.href = 'index.html'; // Redirect to index.html after saving
    } else {
        window.location.href = 'writing.html'; 
        // Do nothing and remain on the same page
    }
});
