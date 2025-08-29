import React from 'react'
import { BrowserRouter, Route, Routes }
  from 'react-router-dom'
import ComingSoon from './pages/ComingSoon'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <div className='bg-[#0F0F10]'>

      {/* <div className='relative overflow-hidden'>
        <ComingSoon/>
      </div> */}
      <Homepage/>
    </div>
  )
}

export default App