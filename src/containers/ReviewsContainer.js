import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';


class ReviewsContainer extends Component {

  render() {
    // debugger
    return (
      <div>
        <ReviewInput 
          addReview={this.props.addReview}
          restaurantId={this.props.resId} 
        />
        <Reviews 
          reviews={this.props.reviews}
          deleteReview={this.props.deleteReview} 
          restaurantId={this.props.resId}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    addReview: (formData) => dispatch({ type: "ADD_REVIEW", review: formData}),
    deleteReview: (id) => dispatch({ type: "DELETE_REVIEW", id: id })
  }
}

const mapStateToProps = (state) => {
  return { reviews: state.reviews }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);