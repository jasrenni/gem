import React from 'react'

const water = () => {
    return (
        <div className='box-1'>
            <div className="top">
                <div className="head">Total Water saved</div>
                <div className="symbol"> </div>
                <img src="water.png" alt="Water icon" />
            </div>
            <div className="middle">
                <input type="text" placeholder='enter water' />
            </div>
            <div className="bottom">14% last month</div>
        </div>
    )
}

export default water