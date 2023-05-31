
import React from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import FormCreateEvent from './FormCreateEvent';
import { customStyles } from '../../helpers/custom-styles-modal';

Modal.setAppElement('#root');

const CalendarModal = () => {

    const { modalOpen } = useSelector( state => state.ui );    

    return (
        <Modal
            isOpen={ modalOpen }
            // onAfterOpen={ afterOpenModal }
            // onRequestClose={ closeModal }
            closeTimeoutMS={ 200 }
            style={ customStyles }
            className="modal"
            overlayClassName="modal-fondo"
        >
            
            <FormCreateEvent />
           
        </Modal>    
    );
}

export default CalendarModal;