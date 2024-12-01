import React from "react";
import { Stage, Layer, Rect, Text, Image, Line } from "react-konva";
import useImage from "use-image";

const ParkingMap = ({ parkingSpots, onSpotClick }) => {
  const [carImage] = useImage(
    "https://cdn0.iconfinder.com/data/icons/isometric-city-basic-transport/480/car-front-02-256.png"
  );

  const rows = {
    topLeft: parkingSpots.slice(0, 5),
    topRight: parkingSpots.slice(5, 10),
    middleLeftTop: parkingSpots.slice(10, 15),
    middleRightTop: parkingSpots.slice(15, 20),
    middleLeftBottom: parkingSpots.slice(20, 25),
    middleRightBottom: parkingSpots.slice(25, 30),
    bottom: parkingSpots.slice(30, 35),
  };

  return (
    <Stage width={800} height={600}>
      <Layer>
        {/* Background for parking lot */}
        <Rect x={0} y={0} width={800} height={600} fill="#f0f0f0" />

        {/* Road markings */}
        <Line
          points={[0, 120, 800, 120]}
          stroke="gray"
          strokeWidth={3}
          dash={[10, 10]}
        />
        <Line
          points={[0, 240, 800, 240]}
          stroke="gray"
          strokeWidth={3}
          dash={[10, 10]}
        />
        <Line
          points={[0, 360, 800, 360]}
          stroke="gray"
          strokeWidth={3}
          dash={[10, 10]}
        />

        {/* Parking spots */}
        {rows.topLeft.map((spot, index) => (
          <React.Fragment key={spot.id}>
            <Rect
              x={10 + index * 70}
              y={20}
              width={60}
              height={90}
              fill={spot.occupied ? "#f28b82" : "#ccff90"}
              stroke="black"
              strokeWidth={2}
              onClick={() => onSpotClick(spot)}
            />
            {spot.occupied && (
              <Image
                image={carImage}
                x={20 + index * 70}
                y={30}
                width={40}
                height={40}
              />
            )}
            <Text
              text={`P${spot.id}`}
              x={25 + index * 70}
              y={80}
              fontSize={15}
              fill="black"
            />
          </React.Fragment>
        ))}

        {rows.topRight.map((spot, index) => (
          <React.Fragment key={spot.id}>
            <Rect
              x={410 + index * 70}
              y={20}
              width={60}
              height={90}
              fill={spot.occupied ? "#f28b82" : "#ccff90"}
              stroke="black"
              strokeWidth={2}
              onClick={() => onSpotClick(spot)}
            />
            {spot.occupied && (
              <Image
                image={carImage}
                x={420 + index * 70}
                y={30}
                width={40}
                height={40}
              />
            )}
            <Text
              text={`P${spot.id}`}
              x={425 + index * 70}
              y={80}
              fontSize={15}
              fill="black"
            />
          </React.Fragment>
        ))}

        {rows.middleLeftTop.map((spot, index) => (
          <React.Fragment key={spot.id}>
            <Rect
              x={10 + index * 70}
              y={140}
              width={60}
              height={90}
              fill={spot.occupied ? "#f28b82" : "#ccff90"}
              stroke="black"
              strokeWidth={2}
              onClick={() => onSpotClick(spot)}
            />
            {spot.occupied && (
              <Image
                image={carImage}
                x={20 + index * 70}
                y={150}
                width={40}
                height={40}
              />
            )}
            <Text
              text={`P${spot.id}`}
              x={25 + index * 70}
              y={200}
              fontSize={15}
              fill="black"
            />
          </React.Fragment>
        ))}

        {rows.middleRightTop.map((spot, index) => (
          <React.Fragment key={spot.id}>
            <Rect
              x={410 + index * 70}
              y={140}
              width={60}
              height={90}
              fill={spot.occupied ? "#f28b82" : "#ccff90"}
              stroke="black"
              strokeWidth={2}
              onClick={() => onSpotClick(spot)}
            />
            {spot.occupied && (
              <Image
                image={carImage}
                x={420 + index * 70}
                y={150}
                width={40}
                height={40}
              />
            )}
            <Text
              text={`P${spot.id}`}
              x={425 + index * 70}
              y={200}
              fontSize={15}
              fill="black"
            />
          </React.Fragment>
        ))}

        {rows.middleLeftBottom.map((spot, index) => (
          <React.Fragment key={spot.id}>
            <Rect
              x={10 + index * 70}
              y={-260}
              width={60}
              height={90}
              fill={spot.occupied ? "#f28b82" : "#ccff90"}
              stroke="black"
              strokeWidth={2}
              onClick={() => onSpotClick(spot)}
            />
            {spot.occupied && (
              <Image
                image={carImage}
                x={20 + index * 70}
                y={270}
                width={40}
                height={40}
              />
            )}
            <Text
              text={`P${spot.id}`}
              x={25 + index * 70}
              y={320}
              fontSize={15}
              fill="black"
            />
          </React.Fragment>
        ))}

        {rows.middleRightBottom.map((spot, index) => (
          <React.Fragment key={spot.id}>
            <Rect
              x={410 + index * 70}
              y={260}
              width={60}
              height={90}
              fill={spot.occupied ? "#f28b82" : "#ccff90"}
              stroke="black"
              strokeWidth={2}
              onClick={() => onSpotClick(spot)}
            />
            {spot.occupied && (
              <Image
                image={carImage}
                x={420 + index * 70}
                y={270}
                width={40}
                height={40}
              />
            )}
            <Text
              text={`P${spot.id}`}
              x={425 + index * 70}
              y={320}
              fontSize={15}
              fill="black"
            />
          </React.Fragment>
        ))}

        {rows.bottom.map((spot, index) => (
          <React.Fragment key={spot.id}>
            <Rect
              x={170 + index * 70}
              y={400}
              width={60}
              height={90}
              fill={spot.occupied ? "#f28b82" : "#ccff90"}
              stroke="black"
              strokeWidth={2}
              onClick={() => onSpotClick(spot)}
            />
            {spot.occupied && (
              <Image
                image={carImage}
                x={180 + index * 70}
                y={410}
                width={40}
                height={40}
              />
            )}
            <Text
              text={`P${spot.id}`}
              x={185 + index * 70}
              y={470}
              fontSize={15}
              fill="black"
            />
          </React.Fragment>
        ))}

        <Text
          text="GATE"
          x={350}
          y={510}
          fontSize={20}
          fontStyle="bold"
          fill="black"
        />
      </Layer>
    </Stage>
  );
};

export default ParkingMap;
