import database from '../firebase/firebase'
import {login} from './auth'
//own spot
export const ownSpot = ({owner = '', id, uid} = {}) => ({
    type: 'OWN_SPOT',
    id,
    owner,
    uid
})

export const startOwnSpot = ({id} = {}) => {
    return (dispatch, getState) => {
        const owner = getState().auth.name
        const uid = getState().auth.uid
        dispatch(ownSpot({id,owner,uid}))
        dispatch(login(uid,owner,true))
        database.ref(`spots/${id}/owner`).set(owner)
        database.ref(`spots/${id}/ownerid`).set(uid)
    }
}
//give spot
export const giveSpot = ({id, freeOn} = {}) => ({
    type: 'GIVE_SPOT',
    id,
    freeOn
})

export const startGiveSpot = ({id, freeOn} = {}) => {
    return (dispatch) => {
        dispatch(giveSpot({id,freeOn}))
        return database.ref(`spots/${id}/freeOn`).push(freeOn).then(() => {
             database.ref('freeDates').push(freeOn).then(() => {
            })
        })
    }
}
//takeSpot
export const takeSpot = ({id, takenOn, takenBy = ''} = {}) => ({
    type: 'TAKE_SPOT',
    id,
    takenOn,
    takenBy
})

export const startTakeSpot = ({id, takenOn} = {}) => {
    return (dispatch,getState) => {
        // const takenBy = getState().auth.name 
        // dispatch(takeSpot({id, takenOn, takenBy}))

        return database.ref(`spots/${id}/freeOn`).orderByValue().equalTo(takenOn).once('value', (snapshot) => {
            if(snapshot)
            {const key = Object.keys(snapshot.val())[0]
            console.log(key)
            database.ref(`spots/${id}/freeOn/${key}`).set(null)}
            else {
                console.log('leer')
            }
        
        })

    //     return database.ref(`spots/${id}/freeOn`).set(0).then(() => {
    //         database.ref('freeDates').set(0).then(() => {
    //             // getState().spots.filter((spot) => spot.id === id).freeOn.forEach((date) => {
    //             //     console.log(id , spot.id);
    //             //     database.ref(`spots/${id}/freeOn`).push(date).then(() => {
    //             //         database.ref('freeDates').push(date)
    //             //     })
                    
    //             // })
    //        })
    //    })
    }
}

export const getSpots = (spots) => ({
    type: 'GET_SPOTS',
    spots
})

export const startGetSpots = () => {
    return (dispatch) => {
        const spotAnswer = database.ref('spots').once('value').then((snapshot) => {
        const spots = []
            snapshot.forEach((child) => {
                spots.push({
                    id: child.key,
                    owner: child.val().owner,
                    ownerid: child.val().ownerid,
                    number: child.val().number,
                    freeOn: Object.values(child.val().freeOn), 
                    takenOn: Object.values(child.val().takenOn), 
                    takenBy: child.val().takenBy
                })
            })
            dispatch(getSpots(spots))
        })
        return spotAnswer 
    }
}