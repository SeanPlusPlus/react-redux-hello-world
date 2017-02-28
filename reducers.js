import { combineReducers } from 'redux';

const greetingReducer = (state = '', action) => {
  switch (action.type) {
    case 'SAY_HELLO':
      return 'Hello ';
    case 'SAY_GOODBYE':
      return 'Bye '
  }
  return state;
}

const nameReducer = (state = 'Dude', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return 'Yo';
  }
  return state;
}

const actionLogger = ({dispatch, getState}) => (next) => (action) => {
  console.log(action);
  return next(action)
};

const reducers = combineReducers({
  greeting: greetingReducer,
  name: nameReducer,
});

export { reducers, actionLogger };
