document.addEventListener('DOMContentLoaded', () => {

    // Handle form submission for the Extract tab
    const form = document.getElementById('dataForm');

    if (form) {
        form.addEventListener('submit', function (event) {

            event.preventDefault();

            const jsonData = document.getElementById('data').value;

            fetch('http://localhost:3000/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonData
            })
                .then(response => response.json())
                .then(data => {
                    document.getElementById('response').textContent = `Response: ${JSON.stringify(data)}`;
                })
                .catch(error => {
                    document.getElementById('response').textContent = `Error: ${error}`;
                });
        });
    }



    // Handle tab switching
    const buttons = document.querySelectorAll('.tab-button');

    const panels = document.querySelectorAll('.tab-panel');



    buttons.forEach(button => {

        button.addEventListener('click', () => {

            const tabId = button.getAttribute('tab-name');


            // Remove active class from all buttons and panels
            buttons.forEach(btn => btn.classList.remove('active'));

            panels.forEach(panel => panel.classList.remove('active'));


            // Add active class to the clicked button and corresponding panel
            button.classList.add('active');

            document.getElementById(tabId).classList.add('active');

        });
    });

    // Optionally, set the default active tab
    if (buttons.length > 0) {
        buttons[0].click(); // Click the first tab button to show its content
    }

});
