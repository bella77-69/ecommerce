import React from 'react';
import Header from '../components/Header';
import ProductLists from '../components/ProductList';

class ProductContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

   url: 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner',
  
      products: [],
      displayedProducts: []
    }
    this.handleFilterSelect = this.handleFilterSelect.bind(this);
    this.handleSortSelect = this.handleSortSelect.bind(this);
  }

  componentDidMount(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", this.state.url);
    xhr.addEventListener("load", () => {
      if (xhr.status === 200){
        const apiData = JSON.parse(xhr.response);
        this.setState({ products: apiData });
        this.setState({ displayedProducts: apiData });
        console.log(apiData);
      }
    });
    xhr.send();
  }

  handleFilterSelect(filteredProducts){
    this.setState({ displayedProducts: filteredProducts });
  }

  handleSortSelect(sortedProducts){
    console.log(sortedProducts);
    this.setState({ displayedProducts: sortedProducts });
  }

  render(){
    return (
      <div>
        <Header filteredData={this.state.displayedProducts} />
        <ProductLists
          rawData={this.state.products}
          filteredData={this.state.displayedProducts}
          onFilterSelect={this.handleFilterSelect}
          onSortSelect={this.handleSortSelect} />
      </div>
    );
  }
}

export default ProductContainer;