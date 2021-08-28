import React from "react";
import { Link } from "react-router-dom";



const SinglePost = (props) => {

  return (
    <div className="container">
      <h2 className="text-center mt-5">Post TItle 1</h2>
      <Link className="text-center d-block">Author</Link>
      <div className="row">
        <div className="col-md-12 py-5 border-bottom border-dark">
          <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga id excepturi ipsa quasi at quae! Sapiente incidunt aut magnam, tempora repellat esse voluptates tempore quas id asperiores, delectus nulla in vel nihil temporibus ad iure saepe accusamus. Consectetur, maiores ducimus. Dolore dignissimos neque tenetur! Voluptate quam eligendi asperiores dicta, nulla sed facere, libero ipsa saepe quod facilis, minus maiores ad error cupiditate in rem ut velit tempora sit. Quam, incidunt neque a, esse eaque cum voluptatem, dolores porro itaque nihil vero beatae quaerat laborum amet sit nisi corrupti nam odio harum ut magni deserunt doloribus pariatur sapiente! Asperiores, fugiat consectetur.</p>
        </div>
        <div className="col-md-12 p-5">
          <h4>3 more post from this author</h4>
          <ul>
            <li><Link>some dummy text</Link></li>
            <li><Link>some dummy text</Link></li>
            <li><Link>some dummy text</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );

};

export default SinglePost;