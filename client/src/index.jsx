import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProductDescription from './components/product-description/product-description.jsx';
import GeneralInfo from './components/product-general-info/general-info.jsx';
import axios from 'axios';


class Description extends Component {
  constructor(props){
    super(props)
    this.state = {
      productInfo: {},
    }
  }

  componentDidMount() {
    axios.get('/description')
    .then(response => {
       return response.data;
    })
    .then(description => {
      this.setState({
          productInfo: description,
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
        <GeneralInfo productInfo = {this.state.productInfo} />
        <ProductDescription productDescription= {this.state.productInfo.description} id={this.state.productInfo._id}/>
      </>
    )
  }
}

ReactDOM.render(<Description/>, document.getElementById('description'));





