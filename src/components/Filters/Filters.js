import React from 'react'

const Filters = ({ setStatus }) => {
  return (
    <div>
      <div><button onClick={() => setStatus("alive")} className='btn btn-primary text-white w-100'>Alive</button></div><br/>
      <div><button onClick={() => setStatus("dead")} className='btn btn-danger text-white w-100'>Dead</button></div><br/>
      <div><button onClick={() => setStatus("unknown")} className='btn btn-secondary text-white w-100'>Unknown</button></div>
    </div>
  )
}

export default Filters