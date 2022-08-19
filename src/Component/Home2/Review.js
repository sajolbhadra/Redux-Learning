import React from "react";
import ReactStars from "react-stars";

const Review = ({ review }) => {
  const { name, picture, rating, comment } = review;
  const ratingStars = {
    size: 25,
    value: rating,
    edit: false,
  };
  return (
    <div className="flex flex-col min-h-[200px] w-[90%] mx-auto mb-8 p-6 rounded-xl shadow-xl reviewStyle">
      <div className="ml-4 overflow-hidden my-4">
        <p className="text-center">"{comment?.slice(0, 80)}..."</p>
      </div>
      <div className="flex flex-start items-center">
        <img src={picture} alt="" className="w-[50px] rounded-full" />
        <div>
          <h2 className="font-semibold mx-4 ">{name}</h2>
          <ReactStars className="mx-3 my-[-10px]" {...ratingStars} />
        </div>
      </div>
    </div>
  );
};

export default Review;
