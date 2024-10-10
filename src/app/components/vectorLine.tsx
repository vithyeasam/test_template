// components/AdjustableVerticalVector.js
import React from 'react';
import PropTypes from 'prop-types';

const AdjustableVerticalVector = ({ lineLength }: {lineLength: number}) => {
  const topSquareCenterY = 7; // Position for the top square
  const bottomSquareCenterY = lineLength + 10; // Dynamic position for the bottom square

  return (
    <svg height={lineLength + 20} width="20" style={{ display: 'block' }}>
      {/* Vertical Line */}
      <line
        x1="10"
        y1="10"
        x2="10"
        y2={10 + lineLength} // Dynamic length of the line
        stroke="white"
        strokeWidth="1"
      />

      {/* Rotated Square at the top of the line */}
      <rect
        x="7"        // Position of the top square horizontally
        y="4"        // Position of the top square vertically
        width="6"    // Width of the square
        height="6"   // Height of the square
        fill="white" // Color of the square
        transform={`rotate(45, 10, ${topSquareCenterY})`} // Rotate the square 45 degrees around its center
      />

      {/* Rotated Square at the end (bottom) of the line */}
      <rect
        x="7"        // Position of the bottom square horizontally
        y={lineLength + 7} // Dynamic position of the bottom square vertically
        width="6"    // Width of the square
        height="6"   // Height of the square
        fill="white" // Color of the square
        transform={`rotate(45, 10, ${bottomSquareCenterY})`} // Rotate the square 45 degrees around its center
      />
    </svg>
  );
};

// PropTypes for type checking
AdjustableVerticalVector.propTypes = {
  lineLength: PropTypes.number.isRequired,
};

export default AdjustableVerticalVector;
