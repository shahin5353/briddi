import React from "react";
import demoImg from "../../Images/stadium.jpg";
import "./NewsBlock.scss";
import { Link } from "react-router-dom";

const NewsBlock = () => {
  return (
    <div className="news-block">
      <h3 className="mb-4">
        <span className="text-primary">/ </span>LATEST NEWS
        <span className="text-primary"> /</span>
      </h3>
      <div className="row">
        {[1, 2, 3, 4, 5, 6].map((index, value) => (
          <div className="col-lg-4 col-md-4 col-sm-4 news-box pb-4" key={index}>
            <Link to="/blog" className="text-decoration-none text-dark">
              <img src={demoImg} alt="" />
              <h6 className="mt-2">POLITICS</h6>
              <h5>
                The name of our country is Bangladesh. It is a very beautiful
                country. It is an agricultural country.
              </h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBlock;
