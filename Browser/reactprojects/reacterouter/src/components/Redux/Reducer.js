

const initialState = {
    x: 0,
    y: 0
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'Increment_Y': return { ...state, y: state.y + 1 };
        case 'Increment_X': return { ...state, x: state.x + 1 }
        default: return state;
    }
}


/* export default function reducer(state = initialState, action) {
    return state;
*/