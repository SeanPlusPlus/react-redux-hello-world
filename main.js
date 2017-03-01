import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import { reducers, logger } from './reducers';
import Navigation from './navigation';
import Header from './header';

const middleware = applyMiddleware(logger);
const store = createStore(
  reducers,
  { greeting: '(Roll over me) '},
  middleware
);

const changeName = () => {
  return { type: 'CHANGE_NAME' }
};

const hello = () => {
  return { type: 'SAY_HELLO' }
};

const goodbye = () => {
  return { type: 'SAY_GOODBYE' }
};

class App extends React.Component {
  render() {
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
  ReactDOM.render(<App />, document.getElementById('app'));
}

render();
store.subscribe(render);
