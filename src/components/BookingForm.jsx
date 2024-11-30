import React, { useState } from 'react';

function BookingForm({ spot, onClose, onBooking }) {
  const [name, setName] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      name,
      vehicleNumber,
      duration,
    };
    onBooking(spot.id, bookingDetails);
    setName('');
    setVehicleNumber('');
    setDuration('');
    alert('Pemesanan berhasil!');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Pemesanan Spot Parkir {spot.id}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nama:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Nomor Kendaraan:
            <input
              type="text"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              required
            />
          </label>
          <label>
            Durasi (jam):
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </label>
          <button type="submit">Pesan</button>
          <button type="button" onClick={onClose}>
            Batal
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
