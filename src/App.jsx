import React from 'react'
import { BrowserRouter, Route, Routes }
  from 'react-router-dom'
import ComingSoon from './pages/ComingSoon'

const App = () => {
  return (
    <>
      <div className='relative overflow-hidden'>
        <ComingSoon/>
      </div>
    </>
  )
}

export default App