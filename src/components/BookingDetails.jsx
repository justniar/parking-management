import React from "react";
import { NoBookings, ReceiptContainer, Title3, BookingCard, BookingDetails, CarIcon, Button } from "../styled";
import { useNavigate } from "react-router-dom";

const BookingDetail = ({ parkingSpots }) => {
  const bookings = parkingSpots.filter((spot) => spot.occupied);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  }
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
                <p><strong>Waktu Mulai:</strong>{new Date(spot.booking.startTime).toLocaleString()}</p>
              </BookingDetails>
            </BookingCard>
          ))}
        </div>
      )}

    <Button type={"submit"} onClick={handleHome}>Ke Halaman Awal</Button>

    </ReceiptContainer>
  );
};

export default BookingDetail;
