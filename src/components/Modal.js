import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Modal = () => {

    const { isShowModal, openModal } = useGlobalContext()
    return (
        <div className={`modal-overlay ${isShowModal && "show-modal"}`}>
            <div className="modal-container">
                <h2>modal content</h2>
                <button className="close-modal-btn" onClick={() => openModal()}>
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}

export default Modal
