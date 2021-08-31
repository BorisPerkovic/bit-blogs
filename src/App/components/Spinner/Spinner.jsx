import React from "react";

import classes from "./Spinner.module.css";

const Spinner = () => {


  return (
    <div className={classes.spinner}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;