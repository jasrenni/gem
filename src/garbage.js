import React from 'react'

const garbage = () => {
    return (
        <div className='box-1'>
            <div className="top">
                <div className="head">Total garbage produced</div>
                <div className="symbol"></div>
                <img src="garbage.png" alt="Garbage icon" />
            </div>
            <div className="middle">
                <input type="text" placeholder='enter garbage'></input>
            </div>
            <div className="bottom">45% last month</div>
        </div>
    )
}

export default garbage
