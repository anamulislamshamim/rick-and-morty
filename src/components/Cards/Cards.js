import React from 'react'

const Cards = () => {
    return (
        <div className="card pt-2 mb-2" style={{"width":"18rem"}}>
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
        </div>

    )
}

export default Cards