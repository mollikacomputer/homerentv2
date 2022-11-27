import React from "react";
import { Helmet } from "react-helmet-async";
import useServices from "../Hooks/useServices";

const About = () => {
  const [services, setServices] = useServices();
  return (
    <div>
      <Helmet>
        <title>About - Home Rent</title>
      </Helmet>
      <h2 className="text-3xl"> About page</h2>
      {services.map((service) => (
        <li> {service.name} </li>
      ))}
    </div>
  );
};

export default About;
