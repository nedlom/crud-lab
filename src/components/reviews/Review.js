import React, { Component } from 'react';

class Review extends Component {

  render() {
    
    const { review, del } = this.props;
    return (
  
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => del(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
