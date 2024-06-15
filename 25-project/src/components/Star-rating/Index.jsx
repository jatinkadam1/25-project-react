import React, { useState } from 'react'
import {FaStar} from "react-icons/fa"

const Star = ({noOfStars = 5}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(currentIndex){
        setRating(currentIndex)
    }
    function mouseEnter(currentIndex){
        setHover(currentIndex)
    }
    function mouseLeave(currentIndex){
        setHover(rating)
    }
    function deleteReview(){
        setRating(0)
        setHover(0)
    }

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-green-300 gap-10'>
        <h1 className="text-2xl font-sans font-medium">Leave Your Review</h1>
        <div className='flex flex-row ml-40'>
        {
        [...Array(noOfStars)].map((_,index)=>{
            index += 1;
            return <FaStar 
                 key={index} 
                 className={index <= (hover || rating) ? "text-yellow-400 cursor-pointer":"text-gray-500"}
                 onClick={()=> handleClick(index)}
                 onMouseMove={()=> mouseEnter(index)}
                 onMouseLeave={()=> mouseLeave(index)}
                 size={40}
                 />
                 })
                 }
                <button onClick={()=>deleteReview()} className='w-32 h-10 bg-yellow-400 ml-10 rounded-md border-2 border-black'>Delete Review</button>
        </div>
    </div>
  )
}

export default Star