import { combineReducers } from 'redux';
import createLogger from 'redux-logger';

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

const logger = createLogger();

const reducers = combineReducers({
  greeting: greetingReducer,
  name: nameReducer,
});

export { reducers, logger };
