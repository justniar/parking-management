import styled from 'styled-components';

export const ParkingGate = styled.div`
  position: relative;  
  width: 100vw;  
  height: 100vh;  
  overflow: hidden;
`;

export const ParkImage = styled.img`
  width: 400px;  
  object-fit: cover; 
`;

export const ParkButton = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;  
  top: 50%;
  left: 50%;  
  transform: translateX(-50%); 
  z-index: 1;
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Gate = styled.div`
  margin: 30px 0;
  font-weight: bold;
  font-size: 18px;
`;

export const Details = styled.div`
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
  color: #333;
`;


export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  width: 400px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Title2 = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #555;
`;

export const Input = styled.input`
  margin-top: 5px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${({ type }) =>
    type === "submit"
      ? `
      background: #007bff;
      color: white;
      &:hover {
        background: #0056b3;
      }
    `
      : `
      background: #ccc;
      color: black;
      &:hover {
        background: #999;
      }
    `}
`;

export const ReceiptContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  font-family: 'Courier New', Courier, monospace;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title3 = styled.h3`
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
`;

export const NoBookings = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #777;
`;

export const BookingCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: flex-start;
  gap: 15px;
`;

export const CarIcon = styled.img`
  width: 48px;
  height: 48px;
`;

export const BookingDetails = styled.div`
  flex-grow: 1;
  h4 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }
  p {
    font-size: 0.9rem;
    margin: 2px 0;
    color: #555;
  }
`;
