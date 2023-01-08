import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './feature/rick&morty/rickandmortySlice';
import Search from './components/Search/Search';
function App() {
  const { isLoading, error, data } = useSelector(state => state.rickandmorty);
  const { info, results } = data.characters || {info:{}, results:[]};
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData({page, name, status}));
  }, [dispatch, page, name, status]);
  // if(isLoading) return <h1>Loading...</h1>
  return (
    <div className="App">
      <h1 className='text-center my-5'><span className='fs-1 text-primary fw-bold'>R</span>ick <span style={{ "color": "red" }}>&</span> <span className='text-primary fw-bold'>M</span>orty</h1>
      <Search setName={ setName } />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters setStatus={setStatus} />
          </div>
          <div className="col-8">
            <div className="row">
              {
                isLoading && <h1>Loading...</h1>
              }
              {
                results && <Cards results={ results } />
              }
              {
                error && <h1 style={{"color":"red"}}>{ error.message }</h1>
              }
            </div>
          </div>
        </div>
      </div>
      <Pagination info={ info } page={ page } setPage={ setPage } />
    </div>
  );
}

export default App;