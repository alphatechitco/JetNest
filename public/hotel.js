function showSuggestions(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form inputs
    const destination = document.getElementById('destination').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guests = document.getElementById('guests').value;

    // Sample hotel suggestions based on user input (mock data)
    const hotels = [
      { name: "Grand Hotel", location: "Paris", price: "$120 per night" },
      { name: "Beach Resort", location: "Miami", price: "$150 per night" },
      { name: "City Inn", location: "New York", price: "$200 per night" },
      { name: "Mountain Lodge", location: "Denver", price: "$180 per night" }
    ];

    // Filter suggestions based on the destination (if it's part of the hotel name)
    const filteredHotels = hotels.filter(hotel => hotel.location.toLowerCase().includes(destination.toLowerCase()));

    // Get the hotel-list container and clear any previous suggestions
    const hotelList = document.getElementById('hotel-list');
    hotelList.innerHTML = '';

    // Add filtered hotel suggestions to the list
    filteredHotels.forEach(hotel => {
      const li = document.createElement('li');
      li.textContent = `${hotel.name} in ${hotel.location} - ${hotel.price}`;
      hotelList.appendChild(li);
    });

    // Show the suggestions section
    document.getElementById('suggestions').style.display = 'block';
  }