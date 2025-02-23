const axios = require('axios');

axios.get("https://api.flightapi.io/onewaytrip/677ea910dfe82f1479ce06ff/LHE/DXB/2025-01-10/1/0/0/Business/PKR")
  .then(response => console.log(response.data.itineraries))
  .catch(error => console.error(error));