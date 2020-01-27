import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startOwnSpot, startGiveSpot, startTakeSpot } from '../actions/spots'
import { setSpotOpen } from '../actions/filters'
import SpotModal from './SpotModal'
import moment from 'moment'
import Tilt from 'react-tilt'


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
        onClose()
    }

    const onOpen = () => {
        setOpen(true)
        props.setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
        props.setOpen(false)
    }

  

    const freeSpots = Object.values(props.freeOn)
    const free = freeSpots.some((date) => moment(date).isSame(moment(props.actualDate), 'day'))

    const takenSpots = Object.values(props.taken).map((obj) => obj.takenOn)
    const takenOwners = Object.values(props.taken).map((obj) => obj.takenBy)

    let ind; 
    let  takenOwner;

    const takenSpot = takenSpots.filter((date, index) => {
        ind = index;
        return moment(date).isSame(moment(props.actualDate), 'day')
    })

    if(takenSpot.length){
        takenOwner = takenOwners[ind]
    }
    else{
        takenOwner = undefined
    }
    
    const taken = takenSpot.length

    return (
        <React.Fragment>
            <Tilt className={props.layout} options={{ max : 35 }}
            style={free  ? {background: 'limegreen'} : (taken ? {background: 'lightblue'} : {})}
            
             >
            <div onClick={onOpen} >
                {props.number}
            </div>
            </Tilt>
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
                taken={taken}
                takenOwner={takenOwner}
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