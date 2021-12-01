const WHO_API = 'http://localhost:4005/rest/who';

export const fetchAllWhos = (dispatch) =>
    fetch(WHO_API)
        .then(response => response.json())
       .then(who =>
            dispatch({
                type: 'fetch-all-whos',
                who
            })
        );
