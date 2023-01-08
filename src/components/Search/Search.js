import React, { useState } from 'react'

const Search = ({ setName }) => {
    const [query, setQuery] = useState("");
    const searchHandeler = () => {
        if(query !== "" && query.trim().length > 0){
            setName(query);
        }else{
            return alert("Please write something in the search field...");
        }
    };
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <div className='row w-100'>
                <div className="col-3 fs-3">Filter By Status</div>
                <div className="col-9">
                    <div className="input-group mb-3" style={{"width":"82%"}}>
                        <input onBlur={(event) => setQuery(event.target.value)} type="text" className="form-control" placeholder="Type for search..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span onClick={searchHandeler} className="input-group-text" id="basic-addon2" style={{"cursor":"pointer"}}>Search</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search