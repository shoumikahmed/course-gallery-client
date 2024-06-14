import React from "react";
import Banner from "../components/home/Banner/Banner";
import Courses from "../components/home/Courses/Courses";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="max-w-screen-xl mx-auto ">
      <Banner></Banner>
      <Courses data={data}></Courses>
    </div>
  );
}
