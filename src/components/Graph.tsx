import React from 'react'
import GitHubCalendar from 'react-github-calendar';


const Graph = () => {
  return (
    <div className='bg-black border border-zinc-700 border-dashed flex justify-center p-4'>
      <GitHubCalendar username="Sahillrathore" blockRadius={2}/>
    </div>
  )
}

export default Graph