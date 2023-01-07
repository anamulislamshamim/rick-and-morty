import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
function App() {
  const [page,setPage] = useState(1);
  const [ fetchData, setFetchData ] = useState({info:{}, results:[]});
  let {info, results} = fetchData;
  console.log("results", results);
  const morty_api =  `https://rickandmortyapi.com/api/character/?page=${ page }`;
  console.log(fetchData);
  useEffect(() => {
    fetch(morty_api)
    .then(res => res.json())
    .then(data => {
      setFetchData(data);
      console.log("data: ",data);
    });
  },[morty_api]);
  return (
    <div className="App">
      <h1 className='text-center my-5'><span className='fs-1 text-primary fw-bold'>R</span>ick <span style={{ "color": "red" }}>&</span> <span className='text-primary fw-bold'>M</span>orty</h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={ results } />
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export default App;