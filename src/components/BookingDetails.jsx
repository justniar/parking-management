import React from "react";
import { NoBookings, ReceiptContainer, Title3, BookingCard, BookingDetails, CarIcon } from "../styled";

const BookingDetail = ({ parkingSpots }) => {
  const bookings = parkingSpots.filter((spot) => spot.occupied);

  return (
    <ReceiptContainer>
      <Title3>Rincian Pemesanan</Title3>
      {bookings.length === 0 ? (
        <NoBookings>Tidak ada pemesanan.</NoBookings>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {bookings.map((spot) => (
            <BookingCard key={spot.id}>
              <CarIcon src="https://img.icons8.com/fluency/48/car--v1.png" alt="Car Icon" />
              <BookingDetails>
                <h4>Spot: {spot.id}</h4>
                <p><strong>Nama:</strong> {spot.booking.name}</p>
                <p><strong>Nomor Kendaraan:</strong> {spot.booking.vehicleNumber}</p>
                <p><strong>Durasi:</strong> {spot.booking.duration} jam</p>
              </BookingDetails>
            </BookingCard>
          ))}
        </div>
      )}
    </ReceiptContainer>
  );
};

export default BookingDetail;
