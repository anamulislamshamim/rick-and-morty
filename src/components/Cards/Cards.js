import React from 'react'

const Cards = ({ results }) => {
    console.log("card_array: ",results);
    return (
        <>
            {
               results.length > 0 ? results.map((result, i) => <div key={i} className="card position-relative" style={{ "width": "18rem" }}>
                    <span className='badge bg-primary w-25 position-absolute' style={{"top":"20px","right":"25px"}}>{ result.status }</span>
                    <img src={result.image} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{ result.name }</h5>
                        <p class="card-text">Last Location<br/>{result.location.name}</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                ):"No matching character found!"
            }
        </>
    )
}

export default Cards