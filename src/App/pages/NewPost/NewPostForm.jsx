import React, { useEffect, useState } from "react";
import classes from "./NewPostForm.module.css";

const NewPost = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const titleHandler = event => {
    setTitle(event.target.value);
  }

  const contentHandler = event => {
    setContent(event.target.value);
  }

  const enteredTitle = title.trim() !== "";
  const enteredContent = content.trim() !== "";

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(enteredTitle && enteredContent)
    }, 1000);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredTitle, enteredContent]);

  const formSubmit = (event) => {
    event.preventDefault();
    window.location.assign("/");
  }

  return (
    <div className="container">
      <div className={`row ${classes.formMain}`}>
        <div className="col-md-12">
          <h2 className="text-center">NEW POST</h2>
        </div>
        <div className="col-md-12">
          <form>
          <label htmlFor="post-title" className="form-label mb-1">
            Title
          </label>
          <input
            type="text"
            id="post-title"
            className=" mb-4 form-control"
            aria-describedby="passwordHelpBlock"
            onChange={titleHandler}
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
            onChange={contentHandler}
          ></textarea>
          <div className="row">
            <div className="col-xs-4 offset-xs-8 d-flex  justify-content-end">
              <button className="btn btn-danger mt-5" onClick={formSubmit}>Cancel</button>
              <button className="btn btn-success mt-5 ms-2" disabled={!formIsValid} onClick={formSubmit}>Save</button>
            </div>
          </div>
        </form>
        </div>
      </div>
      
    </div>
  );
};

export default NewPost;
