import React from 'react'

const Cards = ({ results }) => {
    console.log("card_array: ", results);
    return (
        <>
            {
                results.length > 0 ? results.map((result, i) => <div key={i} className="card position-relative pt-2 pb-1" style={{ "width": "16rem", "marginRight": "10px", "marginBottom": "10px" }}>
                    <span className={` badge ${result.status === "Alive" ? "bg-primary" : result.status === "Dead" ? "bg-danger" : "bg-secondary"} w-25 position-absolute`} style={{ "top": "20px", "right": "25px" }}>{result.status}</span>
                    <img src={result.image} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{result.name}</h5>
                        <div className="card-text">
                            <p className='fs-6 mb-0'>Last Location</p>
                            <p className='fs-5'>{result.location.name}</p>
                        </div>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                ) : "No matching character found!"
            }
        </>
    )
}

export default Cards