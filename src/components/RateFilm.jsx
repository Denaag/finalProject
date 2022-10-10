import React, { useState } from "react";
import { Component } from "react";
import { Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { DeleteIcon, EditIcon } from "./icon";
import './styles.css'
import { isNullOrUndefined } from "./utill";

const colors = { //star colors
  orange: '#FFBA5A',
  gray: '#a9a9a9'
}

class RateThisFilm extends Component{
// as a class component we can easly handle states
  constructor (props) {
    super(props);
    this.state = {
      stars: Array(5).fill(0),
      currentValue: 0,
      hoverValue: undefined,
      reviews: [{   id: 0,
        starRating: 0, 
        reviewComment: '' }],
      comment: '',
      isAddScreen: true,
      isUpdateScreen: false,
      isListScreen: false,
      currentReviewId: null,
    }
  }

  render() {

  const handleClick = value => {
    this.setState({currentValue: value});
    console.log(this.state.currentValue);// shows me the value of each star level
  };

  const handleReviewChange = e => { // handles my review changes
    let textAreaData = e.target.value;// this give my variable a meaningful name - easier to read
    // setComment(textAreaData);
    this.setState({comment: textAreaData});
    console.log(this.state.comment);
  }

  const handleMouseOver = value => {
    // setHoverValue(value);
    this.setState({hoverValue: value});

  };

  const handleMouseLeave = value => {
    this.setState({hoverValue: undefined});
  };

  const handleEditReview = (idx) => {  // when click edit icon
    resetScreens();  
   let currentItem = this.state.reviews[idx];   // get edit value
    this.setState({isUpdateScreen: true,    // set as current value 
      currentReviewId: idx,  
      currentValue: currentItem.starRating,
      comment: currentItem.reviewComment});
  }

  const resetScreens = () => {  // reset all screens
    this.setState({
      isAddScreen: false,
      isListScreen: false,
      isUpdateScreen: false,
    });
  }

  const handleDeleteReview = (idx) => {
    this.state.reviews.splice(idx, 1);
    this.setState({ reviews: this.state.reviews }); /// updating again for refresh the dom
    if(this.state.reviews.length > 0) return;  
    resetScreens();  // reset the screens
    this.setState({  // reset the value and set add screen
      comment:'',
      currentValue: 0,
      isAddScreen: true
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(!(this.state.currentValue && this.state.comment)) return; //validation
    let reviewList = [];
    reviewList.push({ id: 1, starRating: this.state.currentValue, reviewComment: this.state.comment });
 
    
    console.log("review list",this.state.reviews);
    //// set the existing value with new value
    this.setState( prevState => ({
      reviews: [...prevState.reviews,  { id: 1, starRating: this.state.currentValue, reviewComment: this.state.comment }]
    }));
    /// finding empty obj
    let objId = this.state.reviews.findIndex(value => value.reviewComment === '');
    if(objId !== -1) this.state.reviews.splice(objId, 1);  // if we have any empty obj , will be remove the empty obj
 
    resetScreens();
    this.setState({isListScreen: true});
    console.log("test ",this.state.reviews);

  }

const handleUpdateReview = e => {
  e.preventDefault();
  if(!(this.state.currentValue && this.state.comment)) return; //validation
  /// if its not or undefined return with error message
  if(isNullOrUndefined(this.state.currentValue)) return console.log("error while update review");
  this.state.reviews.splice(this.state.currentReviewId, 1 ,{ id: 1, starRating: this.state.currentValue, reviewComment: this.state.comment }); 
  console.log(this.state.reviews);
  resetScreens();
  this.setState({isListScreen: true});
  // console.log("test works")

}

const handleAddReview = () => {
  resetScreens();   /// when click add review reset the values and show the add component
  this.setState({
    isAddScreen: true,
    comment:'',
    currentValue: 0
  });
}



  return ( <>    
  <div className="d-flex flex-column justify-content-center align-items-center container">
      <form onSubmit={handleSubmit} style={this.state.isAddScreen ? { display: 'block' } : { display: 'none' }}>
        <div className="d-flex">
          {this.state.stars.map((_, index) => {
            return (

              <FaStar
                key={index}
                size={24}
                //   onChange={handleStarChange}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(this.state.hoverValue || this.state.currentValue) > index ? colors.orange : colors.grey} //allows stars to highlight color once hovered over
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />

            )
          })}

        </div>


        <textarea onChange={handleReviewChange}
          placeholder="Review Film?"
           className="rounded-2 mt-5 mx-0 mb-2 p-2 w-100 reviewTextArea"
          value={this.state.comment}
        />

        <button type="submit"  className="rounded-2 w-100 p-2">Submit</button>
      </form >
      {/* edit review */}
      <div>
      <form onSubmit={handleUpdateReview} style={this.state.isUpdateScreen ? { display: 'block' } : { display: 'none' }}>
        <div className="d-flex">
          {this.state.stars.map((_, index) => {
            return (

              <FaStar
                key={index}
                size={24}
                //   onChange={handleStarChange}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(this.state.hoverValue || this.state.currentValue) > index ? colors.orange : colors.grey} //allows stars to highlight color once hovered over
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            )
          })}

        </div>
        <textarea onChange={handleReviewChange}
          placeholder="Review Film?"   className="rounded-2 mt-5 mx-0 mb-2 p-2 w-100 reviewTextArea"
          value={this.state.comment}
        />
        <button className="rounded-2 w-100 p-2" type="submit">Update Review</button>
      </form >
      </div>

      {/* list reviews */}
      <div style={!this.state.isListScreen ? { display: 'none' } : { display: 'block' ,
    overflowY: 'auto',
    height: '300px'}} className="movie-review-container" >
   <div>
      { this.state.reviews.length > 0 ? 
      this.state.reviews.map((item, i) => {
        return (<div className="m-0 p-0" key={i}>
        <div className="d-flex">
          {this.state.stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                //   onChange={handleStarChange}
                color={(item.starRating) > index ? colors.orange : colors.grey} //allows stars to highlight color once hovered over
                style={{
                  marginRight: 10,
                }}
              />
            )
          })}
          {/* edit icon */}
          <span className="text-white cursor-pointer ms-3" onClick={() => handleEditReview(i)}>
            <EditIcon  />
            </span>
       
          {/* delete icon */}
          <span className="text-white cursor-pointer ms-2" onClick={() => handleDeleteReview(i)} >
         <DeleteIcon/>
        </span>
        </div>
        <div className="mt-1 ml-1 p-2 mb-2 rounded-3 text-black list-comment">
          {item.reviewComment}
        </div>
      </div>)
      }  )  : <h4>No Reviews are there</h4>
      }
      </div>
      <Button size="sm" className="review-button ms-3" onClick={handleAddReview}>Add Review</Button>
      </div>
    </div>
    </>
  );
};



};



export default RateThisFilm;





// const [rating, setRating] = useState(null); //allows us to get rating and then set rating because of useState hook
// const [hover, setHover] = useState(null);

// return (
//     <div>
//         {[...Array(5)].map((star, i) => {
//             const ratingValue = i + 1;

//             return (
//                 <label>
//                     <input type='radio' name='rating' value={ratingValue} onClick={() => setRating(ratingValue)} />
//                     <FaStar className="star" color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} size={30}
//                     onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}  />
//                 </label>
//             );
//         })}
//     </div>
// );