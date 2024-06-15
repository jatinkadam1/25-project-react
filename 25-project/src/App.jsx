import React from 'react'
import Index from './components/Index'
import Color from './components/color-generator/Color'
import Star from './components/Star-rating/Index'

const App = () => {
  return (
    <div>
      <Index />
      <Color/>
      <Star/>
    </div>
  )
}

export default App