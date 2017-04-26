import React from 'react';

class FlashCard extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      "currently-displayed": "side-a",
    }
    this.handleClick = this.handleClick.bind(this);
    // this.renderText = this.renderText.bind(this);
  }

  handleClick(e) {
        this.state["currently-displayed"] === "side-a" ? this.setState({"currently-displayed":"side-b"}) : this.setState({"currently-displayed":"side-a"})
  }

  renderText() {
    return <h4>{this.props.data[this.state['currently-displayed']]}</h4>
  }

  render () {
    return <div className="flash-card">
      {this.renderText()}
      <button onClick={this.handleClick}>Flip</button>
    </div>
  }
}

export default FlashCard; 