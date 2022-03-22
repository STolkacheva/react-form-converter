import React from "react";
import "./Converter.css";
import { useState } from "react";

const COLOR = {
  hex: '#',
  rgb: '',
  backgroundColor: '#dddddd',
};

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export default function Converter() {
  const [color, setColor] = useState(COLOR);

  const hexChange = (event) => {
    const { value } = event.target;

    if (value.length < 7) {
      setColor((prev) => ({...prev, hex: value }));
      return;
    }

    const rgbValue = hexToRgb(value);
    
    setColor((prev) => ({
      ...prev,
      hex: value,
      rgb: rgbValue === null ? 'Ошибка!' : `rgb(${rgbValue.r},${rgbValue.g},${rgbValue.b})`,
      backgroundColor: rgbValue === null ? "#ff0000" : value
    }));
  };

  return (
    <div className="Converter" style={{ backgroundColor: color.backgroundColor }}>
      <input className="Converter-hex" value={color.hex} onChange={hexChange}/>
      <div className="Converter-rgb">{color.rgb}</div>
    </div>
  );
}