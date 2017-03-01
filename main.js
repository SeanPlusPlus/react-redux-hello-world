import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import { reducers, logger } from './reducers';
import { changeName, hello, goodbye } from './actions';
import Navigation from './navigation';
import Header from './header';

const middleware = applyMiddleware(logger);
const store = createStore(
  reducers,
  { greeting: '(Roll over me) '},
  middleware
);

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
