const PROFILE_API = 'https://web-dev-node-fa21.herokuapp.com/api/profile';

export const fetchProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'fetch-profile',
                profile
            })
        );

export const updateProfile = (dispatch, profile) =>
    fetch('http://localhost:4005/api/profile/update', {
        method: 'POST',
        body: JSON.stringify(profile.new),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(profiles =>
            dispatch({
                type: 'save-information',
                profiles
            })
        );
