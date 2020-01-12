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
                    const {[key]: value, ...freeOn} = spot.freeOn
                    return {
                        ...spot,
                        freeOn: freeOn,
                        takenOn: [...spot.takenOn, action.takenOn],
                        takenBy: action.takenBy
                    }
                } else {
                    return spot
                }
            })
        default:
            return state;
    }
}