import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewItem = ({ review: { reviewerName, description, reviewStar } }) => {
  return (
    <div>
      <div className="my-10 mb-20 grid grid-rows-2">
        <div className="mx-auto block">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                src="https://api.lorem.space/image/face?hash=92310"
                alt="no"
              />
            </div>
          </div>
          <h1 className="text-xl text-gray-600 text-center my-4">
            {reviewerName}
          </h1>
        </div>
        <div className="text-center">
          <div className="text-gray-600 block mx-auto font-sans text-center">
            <div className="flex justify-center items-center">
              <ReactStars
                count={5}
                value={reviewStar}
                size={50}
                isHalf={true}
                activeColor="#ffd700"
                edit={false}
              />
            </div>
          </div>
          <p className="w-1/2  text-gray-600 mx-auto font-sans text-center">
            "
            {description.length > 140
              ? description.slice(0, 140) + "..."
              : description}
            "
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
