fetch('/balance')
    .then(response => response.json())
    .then(data => {
        document.getElementById('balance').textContent = data.balance;
        document.getElementById('price').textContent = data.price;
    })
    .catch(error => console.error('Error fetching data:', error));
