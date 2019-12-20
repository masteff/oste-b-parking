import React from 'react'
import Modal from 'react-modal'

const SpotModal = ({ open, number, onSetOwner, onSetFree, owner, onClose, ownerid, uid, hasspot, free }) => (
    <Modal
        isOpen={open}
        contentLabel="Selected Spot"
        onRequestClose={onClose}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <p className="header__title" style={pStyle}>{number}</p>
        <p className="header__title" style={pStyle}>gehört</p>
        <p className="header__title" style={pStyle}>{owner || 'niemand'}</p>
        {!hasspot && !ownerid && <button className="button" disabled={false} onClick={onSetOwner}>Meiner!</button>}
        {uid === ownerid && !free && <button className="button" onClick={onSetFree}>Geben!</button>}
        {free && !hasspot && <button className="button" >Nehmen!</button>}
    </Modal>
)

const pStyle = {
    margin: 0
}

export default SpotModal