import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startOwnSpot, startGiveSpot, startTakeSpot } from '../actions/spots'
import { setSpotOpen } from '../actions/filters'
import SpotModal from './SpotModal'
import moment from 'moment'


const Spot = (props) => {

    const [open, setOpen] = useState(false)

    const onSetOwner = () => {
        props.setOwner({ id: props.id })
        onClose()
    }
    const onSetFree = () => {
        props.setFree({ id: props.id, freeOn: props.actualDate })
        onClose()
    }

    const onSetTaken = () => {
        props.setTaken({ id: props.id, takenOn: props.actualDate })
    }

    const onOpen = () => {
        setOpen(true)
        props.setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
        props.setOpen(false)
    }

    const free = props.freeOn.some((date) => moment(date).isSame(moment(props.actualDate), 'day'))
    const taken = props.takenOn.some((date) => moment(date).isSame(moment(props.actualDate), 'day'))

    return (
        <React.Fragment>
            <div onClick={onOpen}
                className={props.layout}
                    style={free  ? {background: 'limegreen'} : (taken ? {background: 'lightblue'} : {})}
            >
                {props.number}
            </div>
            <SpotModal
                open={open}
                onSetOwner={onSetOwner}
                onSetFree={onSetFree}
                onSetTaken={onSetTaken}
                owner={props.owner}
                onClose={onClose}
                number={props.number}
                uid={props.uid}
                ownerid={props.ownerid}
                hasspot={props.hasspot}
                free={free}
            />
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOwner: (data) => dispatch(startOwnSpot(data)),
        setFree: (data) => dispatch(startGiveSpot(data)),
        setOpen: (data) => dispatch(setSpotOpen(data)),
        setTaken: (data) => dispatch(startTakeSpot(data))
    }
}

export default connect(undefined, mapDispatchToProps)(Spot)