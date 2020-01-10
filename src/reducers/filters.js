import moment from 'moment'

//filtersReducer
const filtersDefaultState = {
    actualDate: moment().startOf('day').add(12, 'hours').valueOf(),
    freeDates: [],
    spotOpen: false
}

export default (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'SET_SPOT_OPEN':
            return {
                ...state,
                spotOpen: action.spotOpen
            }
        case 'SET_ACTUAL_DATE':
            return {
                ...state,
                actualDate: action.actualDate
            }
        case 'GIVE_SPOT':
            return {
                ...state,
                freeDates: [...state.freeDates, action.freeOn]
            }
        case 'TAKE_SPOT':
            let key =  Object.keys(state.freeDates).find((key) => moment(state.freeDates[key]).isSame(moment(action.takenOn), 'day'))
            delete state.freeDates[key]
            return {
                ...state,
                freeDates: state.freeDates
            }
        case 'GET_FREE_DATES':
            return {
                ...state,
                freeDates: action.freeDates
            }
        default:
            return state;
    }
}