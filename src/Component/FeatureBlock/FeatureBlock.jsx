import React from "react";
import "./FeatureBlock.scss";
import { Link } from "react-router-dom";
import demoImg from '../../Images/stadium.jpg'

const FeatureBlock = () => {
  return (
    <div className="feature-block">
      <h3 className="text-uppercase mt-5 mb-4">
        <span className="text-primary">/ </span>featured
        <span className="text-primary"> /</span>
      </h3>
      <div className="row">
        {[1, 2, 3, 4].map((index, value) => (
          <div className="col-lg-6 col-md-6 col-sm-10 feature-box mb-3" key={index}>
            <Link to="/" className="text-decoration-none text-dark">
              <img src={demoImg} alt="" />
              <h3 className="mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, quaerat.</h3>
              <h6>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nihil fugiat ex quam veniam labore fugit est eaque harum ipsam quasi impedit!
              </h6>
            </Link>
            <p>by dummy author</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBlock;
