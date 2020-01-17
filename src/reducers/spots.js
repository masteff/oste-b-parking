import moment from 'moment'

//spotsReducer
const spotsDefaultState = []

export default (state = spotsDefaultState, action) => {
    switch (action.type) {
        case 'GET_SPOTS':
            return action.spots
        case 'OWN_SPOT':
            return state.map((spot) => {
                if (spot.id === action.id) {
                    return {

                        ...spot,
                        owner: action.owner,
                        ownerid: action.uid
                    }
                } else {
                    return spot
                }
            })
        case 'GIVE_SPOT':
            return state.map((spot) => {
                if (spot.id === action.id) {
                    return {
                        ...spot,
                        freeOn: [...spot.freeOn, action.freeOn]
                    }
                } else {
                    return spot
                }
            })
        case 'TAKE_SPOT':
            return state.map((spot) => {
                if (spot.id === action.id) {
                    const key =  Object.keys(spot.freeOn).find((key) => moment(spot.freeOn[key]).isSame(moment(action.takenOn), 'day'))
                    let {[key]: value, ...freeOn} = spot.freeOn
                    if(Object.keys(freeOn).length === 0){
                        freeOn = 0
                    }
                    return {
                        ...spot,
                        freeOn: freeOn,
                        taken: {...spot.taken, [action.takenOn]: {
                            takenOn: action.takenOn,
                            takenBy: action.takenBy
                        }}
                        // takenOn: [...spot.takenOn, action.takenOn],
                        // takenBy: action.takenBy
                    }
                } else {
                    return spot
                }
            })
        default:
            return state;
    }
}