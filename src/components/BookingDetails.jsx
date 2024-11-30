import React from 'react';

function BookingDetails({ bookings }) {
  return (
    <div>
      <h3>Rincian Pemesanan</h3>
      {bookings.length === 0 ? (
        <p>Tidak ada pemesanan.</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              <p>Nama: {booking.name}</p>
              <p>Nomor Kendaraan: {booking.vehicleNumber}</p>
              <p>Durasi: {booking.duration} jam</p>
              <p>Spot Parkir: {booking.parkingSpot.id}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookingDetails;
