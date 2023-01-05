import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
function App() {
  const [page,setPage] = useState(1);
  const [ fetchData, setFetchData ] = useState([]);
  const morty_api =  `https://rickandmortyapi.com/api/character/?page=${ page }`;
  console.log(fetchData);
  useEffect(() => {
    fetch(morty_api)
    .then(res => res.json())
    .then(data => setFetchData(data.results));
  },[morty_api]);
  return (
    <div className="App">
      <h1 className='text-center'><span className='fs-1 text-primary fw-bold'>R</span>ick <span style={{ "color": "red" }}>&</span> <span className='text-primary fw-bold'>M</span>orty</h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row" gap={3}>
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;