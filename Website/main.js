document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const formData = new FormData(this);

    // Send data using fetch
    try {
        const response = await fetch('https://example.com/submit', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
            alert('Form submitted successfully!');
        } else {
            console.error('Error:', response.statusText);
            alert('Failed to submit the form.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    }
});
