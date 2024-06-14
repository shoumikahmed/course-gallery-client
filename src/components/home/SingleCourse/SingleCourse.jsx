import React from "react";
import { Link } from "react-router-dom";
import "./SingleCourse.css";

export default function SingleCourse({ course }) {
  const { name, description, difficulty, image, price } = course;

  return (
    <div className="wrapper pb-5 mx-auto">
      <div className="card-box">
        <img className="" src={image} alt="" />
        <div className="info">
          <h5 className=" text-white">{name}</h5>
          <p className="text-purple-900">
            <strong>Price: ${price}</strong>
          </p>
          <p className=" text-warning">
            <strong>{difficulty}</strong>
          </p>
          <p className="m-0 mb-2">
            <small>{description}</small>
          </p>
          <Link to="/">
            <button className="button">Buy this Course</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
