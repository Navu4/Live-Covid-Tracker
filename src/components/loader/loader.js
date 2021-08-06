import React from 'react';
import './loader.css';

class Loader extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="loader_container">
          <img
            src="https://i.pinimg.com/originals/62/79/ce/6279ce4af4acbcbffd9a7023eeec9675.gif"
            alt="loader"
          />
        </div>
      </>
    );
  }
}

export default Loader;
