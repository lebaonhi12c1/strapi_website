import React, { useState } from 'react';
import './quanlity.scss'
function Quanlity(props) {
    const [count, setcount] = useState(1)
    const handlesetcount = type=>{
        switch (type) {
            case 'minous':
                count > 1 && setcount(pre=>pre-1)
                break;
            case 'plush':
                setcount(pre=>pre+1)
                break;
            default:
                break;
        }
    }
    return (
        <div className='quanlity'>
            <div className='control' onClick={()=>{handlesetcount('minous')}}>-</div>
            <div className='number'>{count}</div>
            <div className='control' onClick={()=>{handlesetcount('plush')}}>+</div>
        </div>
    );
}

export default Quanlity;