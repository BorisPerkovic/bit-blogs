import React, { useEffect, useState } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import { BlogsCommunicator } from "../../../../Services/data-services";

const Author = (props) => {
  const authorId = props.match.params.id;
  const [author, setAuthor] = useState({});
  const [onLoading, setOnLoading] = useState(true);
  console.log(author);
  const getAuthor = () => {
    const fetchAuthor = async () => {
      const newAuthor = await BlogsCommunicator.fetchSingleUser(authorId);
      setAuthor(newAuthor);
      setOnLoading(false);
    };
    fetchAuthor();
  };

  useEffect(getAuthor, [authorId]);
  const authorLan = author.address.geo.lat;
  const authorLng = author.address.geo.lng;

  return (
    <div className="container">
      <h2>Signle Author</h2>
      {onLoading && <Spinner />}
      <div className="row">
        <div className="col-md-12 py-3 border-bottom border-dark">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                alt=""
                className="img-fluid border border-dark rounded"
              />
            </div>
            <div className="col-md-8 px-2">
              <h2 className="m-1">{author.name}</h2>
              <p className="m-1">
                username: <b>{author.username}</b>
              </p>
              <p className="m-1">
                email: <b>{author.email}</b>
              </p>
              <p className="m-1">
                phone: <b>{author.phone}</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 py-3 border-bottom border-dark">
          <div className="row justify-content-between">
            <div className="col-md-5 px-2">
              <h2 className="m-1">Address</h2>
              <p className="m-1">
                street: <b>{author.address.street}</b>
              </p>
              <p className="m-1">
                city: <b>{author.address.city}</b>
              </p>
              <p className="m-1">
                zipcode: <b>{author.address.zipcode}</b>
              </p>
            </div>
            <div className="col-md-5">
              <iframe
                className="col-md-12"
                title="address"
                src={`https://www.google.com/maps?q=${authorLan},${authorLng}&z=15&output=embed`}
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-12 px-2 text-start mt-3">
          <h2 className="m-1">Company</h2>
          <p className="m-1">
            name: <b>Gwenborough</b>
          </p>
          <p className="m-1">
            slogan: <b>77068</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Author;
