import React from 'react';

function BookingDetail({ parkingSpots }) {
  const bookings = parkingSpots.filter((spot) => spot.occupied);

  return (
    <div>
      <h3>Rincian Pemesanan</h3>
      {bookings.length === 0 ? (
        <p>Tidak ada pemesanan.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Spot</th>
              <th>Nama</th>
              <th>Nomor Kendaraan</th>
              <th>Durasi</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((spot) => (
              <tr key={spot.id}>
                <td>{spot.id}</td>
                <td>{spot.booking.name}</td>
                <td>{spot.booking.vehicleNumber}</td>
                <td>{spot.booking.duration} jam</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookingDetail;
