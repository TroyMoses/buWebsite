import React from 'react';

const Modal = ({ isVisible, onClose, children }) => {

    if ( !isVisible ) return null;

    const handleClose = (e) => {
        if( e.target.id === 'wrapper') onClose();
    }


    return (
        <div 
            className='fixed left-0 bottom-5 right-0 top-36 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' 
            id='wrapper' 
            onClick={handleClose}>
            <div className='w-full mx-2 rounded-md flex flex-col'>
                <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
                <div className='bg-white p-2'>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Modal;