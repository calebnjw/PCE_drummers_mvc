const showReservations = async (drummerID) => {
  const reservations = await axios.get(`/reservations/${drummerID}/ajax`);

  const reservationsContainer = document.getElementById('reservations');
  console.log(reservations.data);

  if (reservations.data.length > 0) {
    reservations.data.forEach((reservation) => {
      const reservationPara = document.createElement('p');
      reservationPara.innerText = `${reservation.reservationDate}: ${reservation.name}`
      reservationsContainer.appendChild(reservationPara);
    });
  } else {
    const reservationPara = document.createElement('p');
    reservationPara.innerText = 'No reservations yet!'
    reservationsContainer.appendChild(reservationPara);
  };
};