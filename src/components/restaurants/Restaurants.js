import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  restaurants = () => this.props.restaurants.map(r => {
    return (
      <Restaurant
        key={r.id} 
        restaurant={r} 
        delete={this.props.deleteRestaurant} 
      />
    )
  })
  
  render() {
    return(
      <ul>
        {this.restaurants()}
      </ul>
    );
  }
};

export default Restaurants;