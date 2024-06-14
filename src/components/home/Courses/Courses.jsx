import React from "react";
import SingleCourse from "../SingleCourse/SingleCourse";

export default function Courses({ data }) {
  console.log(data);
  return (
    <div className="my-16 bg-black bg-opacity-20 pt-6 pb-14">
      <h1 className="my-8 text-2xl font-bold text-center pb-5">
        Our Courses for buying
      </h1>
      <div className="grid md:grid-cols-3 gap-6 mx-auto">
        {data?.map((course) => (
          <SingleCourse key={course?._id} course={course}></SingleCourse>
        ))}
      </div>
    </div>
  );
}
