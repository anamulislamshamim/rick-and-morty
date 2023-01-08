import React from 'react';

const Pagination = ({ info, setPage, page }) => {

  // const { isLoading, error, data } = useSelector(state => state.rickandmorty);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchData({ page: 1, name: "", status: "" }));
  // }, [dispatch]);
  // console.log("pagination: ", isLoading, error, data.characters);
  console.log("info", info);
  return (
    <div className='d-flex justify-content-center align-items-center mb-5'>
      <div>
        <div className='mb-3'><span className='me-3'>Pages: { info.pages }</span><span>Current page: { page }</span></div>
        <div>
          <button onClick={() => setPage((prev) => prev > 0 ? prev - 1 : prev )} className='btn btn-primary me-5'>Prev</button>
          <button onClick={() => setPage((prev) => prev < info.pages ? prev + 1 : prev )} className='btn btn-primary'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Pagination