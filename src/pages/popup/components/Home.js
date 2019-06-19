import React from "react";
import PropTypes from "prop-types";
import Greeting from "./Greeting";
import NameTaker from "./NameTaker";

const propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

function Home({ name, onSubmit }) {
  return (
    <div>
      <Greeting name={name} />
      <NameTaker name={name} onSubmit={onSubmit} />
    </div>
  );
}

Home.propTypes = propTypes;

export default Home;
