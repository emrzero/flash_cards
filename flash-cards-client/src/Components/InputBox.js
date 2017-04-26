import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div>
          <h4>Add Flash Card</h4>
          <div className="input-box">
            <label>Side A</label>
            <input type="text" />
            <br />
            <label> Side B </label>
            <input type="text" />
            <br />
            <button>Save</button>
          </div>
        </div>
      )
  }
}

export default InputBox;