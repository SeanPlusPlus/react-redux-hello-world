import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import Navigation from './navigation';
import { reducers, logger } from './reducers';

const middleware = applyMiddleware(logger);
const store = createStore(
  reducers,
  { greeting: '(Roll over me) '},
  middleware
);

const changeName = () => { return { type: 'CHANGE_NAME' } };
const hello = () => { return { type: 'SAY_HELLO' } };
const goodbye = () => {return { type: 'SAY_GOODBYE' } };

const Header = (props) => (
  <div>
    <h1>Hiya</h1>
    <button
      className="btn btn-default"
      onMouseOver={props.hello}
      onMouseOut={props.goodbye}
      onClick={props.changeName}
    >
      {props.greeting}{props.name}
    </button>
    <hr />
  </div>
)

class App extends React.Component {
  render() {
    console.log(store.getState());
    return (
      <div>
        <Navigation />
        <Header
          greeting={store.getState().greeting}
          name={store.getState().name}
          {...bindActionCreators({changeName, hello, goodbye},
                                  store.dispatch)}
        />
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('helloworld'));
}

render();
store.subscribe(render);
