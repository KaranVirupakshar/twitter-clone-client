const PROFILE_API = 'http://localhost:4005/rest/profile';

export const fetchProfile = () =>
    fetch(PROFILE_API)
        .then(response => response.json())


export const updateProfile = (dispatch, profile) =>
    fetch(`${PROFILE_API}/${profile._id}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'fetch-profile',
                profile
            })
        );