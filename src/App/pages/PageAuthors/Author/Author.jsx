import React, { useEffect, useState } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import { BlogsCommunicator } from "../../../../Services/data-services";

import classes from "./Author.module.css";

const Author = (props) => {
  const authorId = props.match.params.id;
  console.log(authorId);

  const [author, setAuthor] = useState({
    ...{},
    address: {
      geo: {},
    },
    company: {},
  });
  const [onLoading, setOnLoading] = useState(true);

  console.log(author);

  const getAuthor = () => {
    const fetchAuthor = async () => {
      const newAuthor = await BlogsCommunicator.fetchSingleUser(authorId);
      setAuthor(
        newAuthor,
        newAuthor.address,
        newAuthor.address.geo,
        newAuthor.company
      );
      console.log(newAuthor);
      console.log(newAuthor.address);

      setOnLoading(false);
    };
    fetchAuthor();
  };

  useEffect(getAuthor, [authorId]);

  return (
    <div className="container">
      {onLoading && <Spinner />}
      <div className="row">
        <div className="col-md-12 py-3 border-bottom border-dark">
        <h2 className="text-center my-5">Single Author</h2>
          <div className={`row ${classes.authorMain}`}>
            <div className={`col-md-3 ${classes.authorImg}`}>
              <img
                src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                alt=""
                className="img-fluid border border-dark rounded"
              />
            </div>
            <div className="col-md-9 px-0">
              <h2 className="mb-4">{author.name}</h2>
              <p className="my-3">
                username: <b>{author.username}</b>
              </p>
              <p className="my-3">
                email: <b>{author.email}</b>
              </p>
              <p className="my-3">
                phone: <b>{author.phone}</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 py-3 border-bottom border-dark">
          <div className="row justify-content-between">
            <div className="col-md-5 px-2">
              <h2 className="mb-4">Address</h2>
              <p className="my-3">
                street: <b>{author.address.street}</b>
              </p>
              <p className="my-3">
                city: <b>{author.address.city}</b>
              </p>
              <p className="my-3">
                zipcode: <b>{author.address.zipcode}</b>
              </p>
            </div>
            <div className="col-md-5">
              {
                <iframe
                  className="col-md-12"
                  title="address"
                  src={`https://www.google.com/maps?q=${author.address.geo.lat},${author.address.geo.lng}&z=15&output=embed`}
                  width="200"
                  height="188.06"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              }
            </div>
          </div>
        </div>
        <div className="col-md-12 px-2 text-start mt-3">
          <h2 className="mb-4">Company</h2>
          <p className="my-3">
            name: <b>{author.company.name}</b>
          </p>
          <p className="my-3">
            slogan: <b>{author.company.bs}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Author;
