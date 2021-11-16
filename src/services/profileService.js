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
    fetch(`${PROFILE_API}/${profile.firstName}/update`, {
        method: 'PUT'
    })
        .then(response =>
            dispatch({
                type: 'like-tweet',
                profile
            }));
