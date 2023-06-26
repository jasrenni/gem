import React from 'react';
const energy = () => {
    return (
        <div className='box-1'>
            <div className="top">
                <div className="head">Total Energy saved</div>
                <div className="symbol"></div>
                <img src="energy.png" alt="Energy icon" />
            </div>
            <div className="middle">
                <input type="text" placeholder="10,245" />
            </div>
            <div className="bottom">24% last month</div>
        </div>
    )
}
export default energy
