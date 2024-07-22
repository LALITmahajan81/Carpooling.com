document.addEventListener('DOMContentLoaded', () => {
  const carpooler = document.querySelector('#Carpoolers');
  let carpoolers = JSON.parse(localStorage.getItem('carpoolers')) || [];

  carpoolers.forEach(data => {
      carpooler.innerHTML += `
          <div id="NameofCar">${data.name}</div>
          <table>
              <tr>
                  <td>Starting Location</td>
                  <td>Destination</td>
                  <td>Travel Date</td>
                  <td>Contact Number</td>
              </tr>
              <tr>
                  <td>${data.start}</td>
                  <td>${data.destination}</td>
                  <td>${data.date}</td>
                  <td>${data.number}</td>
              </tr>
          </table>
      `;
  });

});
