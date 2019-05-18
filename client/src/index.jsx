import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Description extends Component {
  constructor(props){
    super(props)
    this.state = {
      product_description: {},
    }
  }

  componentDidMount() {
    axios.get('/description')
    .then(response => {
       return response.data;
    })
    .then(description => {
      this.setState({
          product_description: description
      })
    console.log(description);
    
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <>
        <p>{this.state.product_description.name}</p>
      </>
    )
  }
}

ReactDOM.render(<Description/>, document.getElementById('description'));





