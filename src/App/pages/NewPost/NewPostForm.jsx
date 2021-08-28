import React from "react";
import classes from "./NewPostForm.module.css";

const NewPost = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-5 mt-5">NEW POST</h2>
      <form>
        <label htmlFor="post-title" className="form-label mb-1">
          Title
        </label>
        <input
          type="password"
          id="post-title"
          className=" mb-4 form-control"
          aria-describedby="passwordHelpBlock"
        />
        <label htmlFor="post-content" className="form-label mb-1">
          Content
        </label>
        <textarea
          name="content"
          id="post-content"
          cols="30"
          rows="10"
          className="form-control"
        ></textarea>
        <div className="row">
          <div className="col-xs-4 offset-xs-8 d-flex  justify-content-end">
            <button className="btn btn-danger mt-5">Cancel</button>
            <button className="btn btn-success mt-5 ms-2">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
