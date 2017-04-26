import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import FlashCard from './Components/FlashCards';
// import InputBox from './Components/InputBox';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      form: {
        "side-a": "",
        "side-b": ""
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    var self = this;
    axios.get("http://localhost:4000/api").then(function(res){
      return res.data
    }).then(function(data){
      self.setState({
        data: data
      });
    });
  }

  isDataPopulated() {
    if (this.state.data.length === 0) {
      return "";
    } else {
      return this.renderFlashCards();
    }
  }

  renderFlashCards(){
    return this.state.data.map(function(el, i){
      return <FlashCard key={i} data={el} />
    });
  } 

  handleChange(e) {
    // console.log(e.target.value);
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })

    // console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = { 
      "side-a" : this.state["side-a"], 
      "side-b": this.state["side-b"]
    }

    axios.post('http://localhost:4000/api', data).then(function(response){
      return response.data;
    }).then(function(res){
      console.log(res);
    }).catch(function(err){
      console.log(err);
    });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div className="input-box-container">
            <div>
              <h4>Add Flash Card</h4>
              <form className="input-box" onSubmit={this.handleSubmit}>
                <label>Side A</label>
                <input name="side-a" type="text" onChange={this.handleChange}/>
                <br />
                <label > Side B </label>
                <input name="side-b" type="text" onChange={this.handleChange}/>
                <br />
                <button type="submit" >Save</button>
              </form>
            </div>
          </div>
          <div className="flash-cards-container">
            {this.isDataPopulated()}
          </div>
      </div>
    );
  }
}

export default App;
