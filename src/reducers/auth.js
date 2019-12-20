export default (state = {}, action) => {
    switch (action.type){
        case 'LOGIN':
            return {
                uid: action.uid,
                name: action.name,
                hasspot: action.hasspot
            }
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}