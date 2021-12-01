import follows from '../data/who.json';

const initialState = {
    who: follows
}

const whos = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch-all-whos':
            return({
                who: action.who
            })
            break;
        default:
            return(state);
    }
};

export default whos;