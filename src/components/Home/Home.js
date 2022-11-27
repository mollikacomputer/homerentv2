import React from "react";
import { Helmet } from "react-helmet-async";
import { Routes } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Home Rent</title>
      </Helmet>
      <h2> Home page</h2>
    </div>
  );
};

export default Home;
