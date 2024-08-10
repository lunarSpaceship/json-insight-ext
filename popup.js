document.getElementById('dataForm').addEventListener('submit', function(event) {
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
  