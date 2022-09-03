import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  reviews = () => this.props.reviews.filter(r => this.props.restaurantId === r.restaurantId)

  render() {
    debugger
    return (
      <ul>
        {this.reviews().map(review => <Review review={review} del={this.props.deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;