import React from "react";

export default function Banner() {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage:
          "url(https://preview.redd.it/create-beautiful-images-of-code-and-screenshots-v0-f5wm6u7d7lz91.png?auto=webp&s=60df2ce8b2a5cd230cce13e7915361285eaec1cf)",
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="bg-opacity-30 bg-black px-20 py-20">
          <h1 className="mb-5 text-5xl font-bold">
            Unlock Expert-Led Online Courses
          </h1>
          <p className="mb-5">
            Join thousands of learners and start your journey towards mastery
            today.
          </p>
          <button className="btn bg-yellow-500 hover:bg-purple-500 text-white  mt-3 border-0 border-b-4">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
