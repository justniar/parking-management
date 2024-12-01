import React, { useState } from "react";
import { Button, ButtonGroup, Form, Input, Label, ModalContent, ModalOverlay, Title2 } from "../styled";

const BookingForm = ({ spot, onClose, onBooking }) => {
  const [name, setName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      name,
      vehicleNumber,
      duration,
    };
    onBooking(spot.id, bookingDetails);
    setName("");
    setVehicleNumber("");
    setDuration("");
    alert("Pemesanan berhasil!");
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Title2>Pemesanan Spot Parkir {spot.id}</Title2>
        <Form onSubmit={handleSubmit}>
          <Label>
            Nama:
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Label>
          <Label>
            Nomor Kendaraan:
            <Input
              type="text"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              required
            />
          </Label>
          <Label>
            Durasi (jam):
            <Input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </Label>
          <ButtonGroup>
            <Button type="submit">Pesan</Button>
            <Button type="button" onClick={onClose}>
              Batal
            </Button>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default BookingForm;
