// Function to handle flight search form submission
document.getElementById('flight-search-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Sample data - this can be replaced with dynamic search results from a server
    const suggestions = [
      { flight: 'Flight 101', from: 'Lahore', to: 'London', departure: '2024-02-01', return: '2024-02-10', price: '$500' },
      { flight: 'Flight 202', from: 'Karachi', to: 'Tokyo', departure: '2024-03-01', return: '2024-03-15', price: '$750' },
      { flight: 'Flight 303', from: 'Islamabad', to: 'Sydney', departure: '2024-04-05', return: '2024-04-20', price: '$900' },
    ];
  
    // Populate the table with the suggestions
    const tableBody = document.querySelector('#suggestions-table tbody');
    tableBody.innerHTML = ''; // Clear existing data
  
    suggestions.forEach(suggestion => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${suggestion.flight}</td>
        <td>${suggestion.from}</td>
        <td>${suggestion.to}</td>
        <td>${suggestion.departure}</td>
        <td>${suggestion.return}</td>
        <td>${suggestion.price}</td>
      `;
      tableBody.appendChild(row);
    });
  });
  