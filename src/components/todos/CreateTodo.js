import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value //The event's target is the input that was listening for the event (the text field), and the value is the current value of that text field.
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);

//Notes:
//JSX stands for JavaScript XML. JSX allows us to write HTML in React.