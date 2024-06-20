import React, { useState } from 'react'

const Slider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyle = {
    width:"550px",
    height:"320px",
    position: "relative"
  }
  const leftArrow = {
    position: "absolute",
    fontSize: "50px",
    fontWeight: "50px",
    color: "white",
    left: "20px",
    cursor: "pointer",
    top: "35%",
    userSelect: "none",
  }
  const rightArrow = {
    position: "absolute",
    fontSize: "50px",
    fontWeight: "50px",
    color: "white",
    right: "20px",
    cursor: "pointer",
    top: "35%",
    userSelect: "none",
  }
  const sliderStyle = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex].url})`,
  }
  function handleLeftArrow(){
    const indx = currentIndex === 0;
    const prevSlide = indx ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(prevSlide);
  }
  function handleRightArrow(){
    const indxRight = currentIndex === slides.length - 1;
    const nextSlide = indxRight ? 0 : currentIndex + 1;
    setCurrentIndex(nextSlide);
  }
  return (
    <div className='w-full h-screen flex items-center justify-center bg-aqua'>
    <div style={slideStyle}>
      <div style={leftArrow} onClick={handleLeftArrow}>⟨</div>
      <div style={rightArrow} onClick={handleRightArrow}>⟩</div>
      <div style={sliderStyle}>
      <div className='flex gap-4 justify-center absolute bottom-2 text-center left-40 cursor-pointer select-none '>
      {
        slides.map((slide,index)=>(
          <div className='flex text-6xl ' style={{color: `${currentIndex === index ? "#FFD700":"#6C757D"}`}} key={index}>•</div>
        ))
      }
      </div>
      </div >
    </div>
    </div>
  )
}

export default Slider