function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }

  // Function to show suggestions dynamically
  function showSuggestions() {
    const searchInput = document.getElementById('searchInput').value;
    const suggestionsDiv = document.getElementById('suggestions');
    if (searchInput.length > 2) {
      suggestionsDiv.innerHTML = `<p>Suggestions for "${searchInput}"</p>`;
    } else {
      suggestionsDiv.innerHTML = "";
    }
  }

  // Optional: To add event listener to search input for suggestions display
  document.getElementById('searchInput').addEventListener('keyup', showSuggestions);