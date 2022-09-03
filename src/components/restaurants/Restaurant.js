import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  
  render() {
    const { restaurant } = this.props;
    
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.delete(this.props.restaurant.id)}> X </button>
          {/* {<ReviewsContainer restaurant={restaurant} restaurantId={this.props.restaurant.id} />} */}
          <ReviewsContainer resId={this.props.restaurant.id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
