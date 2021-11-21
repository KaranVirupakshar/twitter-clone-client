const PROFILE_API = 'http://localhost:4005/api/profile';

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
    fetch(PROFILE_API, {
        method: 'PUT'
    })
        .then(response => response.json())
        .then(profiles =>
            dispatch({
                type: 'save-information',
                profile
            })
        );
