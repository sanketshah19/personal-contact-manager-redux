import React from 'react';
import Image from '../../Images/Home.png';

function Home(){
    return(
        <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
                <h2 className="mb-5">Welcome to Contact Manager App</h2>
                <img src={Image} alt="man holding sign"/>
            </div>
        </div>
    )
}

export default Home