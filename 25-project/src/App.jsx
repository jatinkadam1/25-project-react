import React from 'react'
import Index from './components/Index'
import Color from './components/color-generator/Color'
import Star from './components/Star-rating/Index'
import Slider from './components/Image-slider/Index'

const App = () => {
  const slides = [
    {url: "https://images.unsplash.com/photo-1577900232412-7923cc681ca9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title:"1"},
    {url: "https://images.unsplash.com/photo-1577899617204-9c4b493c6e9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title:"2"},
    {url: "https://images.unsplash.com/photo-1577900289221-a432e08f3af5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title:"3"},
    {url: "https://images.unsplash.com/photo-1552196527-bffef41ef674?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title:"4"},
    {url: "https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title:"5"},
  ]
  // const containerStyle = {
  //   width:"500px",
  //   height:"320px",
  //   margin:"0 auto",
  // }
  return (
    <div>
      <Index />
      <Color/>
      <Star/>
      <div>
        <Slider slides={slides}/>
      </div>
    </div>
  )
}

export default App