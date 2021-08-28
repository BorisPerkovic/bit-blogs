import React from "react";

const Author = (props) => {
  return (
    <div className="container">
      <h2>Signle Author</h2>
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
              <h2 className="m-1">Name Surname</h2>
              <p className="m-1">
                username: <b>my_cool_username</b>
              </p>
              <p className="m-1">
                email: <b>my_cool@email.com</b>
              </p>
              <p className="m-1">
                phone: <b>1-770-736-8031</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 py-3 border-bottom border-dark">
          <div className="row justify-content-between">
            <div className="col-md-5 px-2">
              <h2 className="m-1">Address</h2>
              <p className="m-1">
                street: <b>Bla Bla St</b>
              </p>
              <p className="m-1">
                city: <b>Gwenborough</b>
              </p>
              <p className="m-1">
                zipcode: <b>77068</b>
              </p>
            </div>
            <div className="col-md-5">
              <iframe
                className="col-md-12"
                title="address"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11324.014610534496!2d20.453783!3d44.8011142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x74d75ca708001307!2sBelgrade%20Institue%20of%20Technology!5e0!3m2!1ssr!2srs!4v1630160073552!5m2!1ssr!2srs"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowfullscreen=""
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
