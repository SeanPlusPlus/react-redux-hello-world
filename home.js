import React from 'react';

const Home = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="jumbotron">
        <h1>Hiya</h1>
          <button
            className="btn btn-default"
            onMouseOver={props.hello}
            onMouseOut={props.goodbye}
            onClick={props.fetchName}
          >
            {props.greeting}{props.name}
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Home;
