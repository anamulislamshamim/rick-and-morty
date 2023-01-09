import React from 'react';

const Pagination = ({ info, setPage, page }) => {

  const prevHandeler = () => {
    setPage((prev) => prev > 0 ? prev - 1 : prev);
  };
  const nextHandeler = () => {
    setPage((prev) => prev < info.pages ? prev + 1 : prev);
  }
  console.log("info", info);
  return (
    <div className='d-flex justify-content-center align-items-center mb-5'>
      <div>
        <div className='mb-3'><span className='me-3'>Pages: {info.pages}</span><span>Current page: {page}</span></div>
        <div>
          <button data-testid="prev" onClick={prevHandeler} className='btn btn-primary me-5'>Prev</button>
          <button data-testid="next" onClick={nextHandeler} className='btn btn-primary'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Pagination