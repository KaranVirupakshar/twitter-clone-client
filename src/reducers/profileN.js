import owner from '../data/profile.json';

const initialState = {
    profile: owner
};

const profile = (state = initialState, action) =>{

    switch(action.type){
        case 'fetch-profile':
            console.log("Inside fetch pro")

            return({
                profile: action.profile
            })
            break;

        case 'save-information':

            console.log("Inside save info")

            if(action.newInput.name){
                initialState.profile['firstName'] = action.newInput['name'];
            }
            if(action.newInput.bio){
                initialState.profile['bio'] = action.newInput['bio'];
            }
            if(action.newInput.dateOfBirth){
                initialState.profile['dateOfBirth'] = action.newInput['dateOfBirth'];
            }
            if(action.newInput.location){
                initialState.profile['location'] = action.newInput['location'];
            }
            if(action.newInput.website){
                initialState.profile['website'] = action.newInput['website'];
            }

            return {
                ...state,
            };
            break;
        default:
            return (state)
    }
}

export default profile;
