import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers,
         applyMiddleware, bindActionCreators } from 'redux';
import Hello from './hello';
import World from './world';

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

const middleware = applyMiddleware(actionLogger);
const store = createStore(
  reducers,
  { greeting: '(Roll over me) '},
  middleware
);

const changeName = () => { return { type: 'CHANGE_NAME' } };
const hello = () => { return { type: 'SAY_HELLO' } };
const goodbye = () => {return { type: 'SAY_GOODBYE' } };

const Hiya = (props) => (
  <div>
    <h1>Hiya</h1>
    <div
      onMouseOver={props.hello}
      onMouseOut={props.goodbye}
      onClick={props.changeName}
    >
    {props.greeting}{props.name}
    </div>
    <hr />
  </div>
)

class HelloWorld extends React.Component {
  render() {
    console.log(store.getState());
    return (
      <div>
        <Hiya
          greeting={store.getState().greeting}
          name={store.getState().name}
          {...bindActionCreators({changeName, hello, goodbye},
                                  store.dispatch)}
        />
        <Hello />
        <World />
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(<HelloWorld />, document.getElementById('helloworld'));
}

render();
store.subscribe(render);
