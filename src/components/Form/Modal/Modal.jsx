import React from 'react';
import styles from './modal.css'

const Modal = ({registerData}) => {

    const formData = JSON.stringify(registerData,null,2)

    return (
        <div className='modal'>
                    <div className='modalContainer'>
                        <pre className='pre'>{formData}</pre>
                    </div> 
        </div>
    );
};

export default Modal;