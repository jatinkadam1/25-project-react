import React, { useState } from 'react'

const Color = () => {
  const [colorGenerator, setColorGenerator] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomGenerator(length){
    return Math.floor(Math.random()*length);
  }

  function generateHexColor(){
    const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let colorGen = "#";
    for(let i=0; i<6; i++){
      colorGen += hex[randomGenerator(hex.length)];
      }
    setColor(colorGen);
      }

      function generateRgbColor(){
        const r = randomGenerator(256);
        const g = randomGenerator(256);
        const b = randomGenerator(256);

        setColor(`rgb(${r},${g},${b})`)
      }
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        position:"relative",
      }}
    >
      <button
        className='bg-white w-52 h-10 border-2 border-gray-500 rounded-lg mb-2'
        onClick={() => setColorGenerator("hex")}
      >
        Generate HEX color
      </button>
      <button
        className='bg-white w-52 h-10 border-2 border-gray-500 rounded-lg mb-2'
        onClick={() => setColorGenerator("rgb")}
      >
        Generate RGB color
      </button>
      <button
        className='bg-white w-52 h-10 border-2 border-gray-500 rounded-lg mb-4'
        onClick={colorGenerator === "hex" ? generateHexColor : generateRgbColor}
      >
        Generate random color
      </button>
      <div className='flex justify-center items-center absolute top-1/2'>
        <h3 className='bg-white p-2 rounded'>{color}</h3>
      </div>
    </div>
  ) 
}

export default Color