import React from 'react'
import Modal from 'react-modal'

const SpotModal = ({ open, number, onSetOwner, onSetFree, onSetTaken, owner, onClose, ownerid, uid, hasspot, free, taken, takenOwner }) => (
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
        <p className="header__title" style={pStyle}>besetzt durch</p>
        <p className="header__title" style={pStyle}>{takenOwner || 'niemand'}</p>
        {!hasspot && !ownerid && <button className="button" onClick={onSetOwner}>Meiner!</button>}
        {uid === ownerid && !free && !taken && <button className="button" onClick={onSetFree}>Geben!</button>}
        {free && !hasspot && <button className="button" onClick={onSetTaken}>Nehmen!</button>}
    </Modal>
)

const pStyle = {
    margin: 0
}

export default SpotModal