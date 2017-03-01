import fetch from 'isomorphic-fetch';

const requestName = () => {
  return {
    type: 'REQUEST_NAME',
  }
};

const fetchName = () => {
  return dispatch => {
    dispatch(requestName());
    const url = 'http://localhost:3000/'
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveName(json)))
  }
}

const receiveName = (json) => {
  return {
    type: 'RECEIVE_NAME',
    payload: json.name,
  }
};

const hello = () => {
  return {
    type: 'SAY_HELLO',
  }
};

const goodbye = () => {
  return {
    type: 'SAY_GOODBYE',
  }
};

export { requestName, fetchName, hello, goodbye };
