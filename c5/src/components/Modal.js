
import React from 'react';

export default function Modal({ children, handleClose }) {
    return (
        <div className='model-backdrop'>
            <div className='modal'>
                {children}
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    )
}
