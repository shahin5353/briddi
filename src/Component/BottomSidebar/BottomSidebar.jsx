import React from "react";
import "./BottomSidebar.scss";
import demoImg from "../../Images/stadium.jpg";
import { Link } from "react-router-dom";

const BottomSidebar = () => {
  return (
    <div className="bottom-sidebar mt-5">
      <h4 className="mb-4">
        <span className="text-primary">/ </span>what's happening
        <span className="text-primary"> /</span>
      </h4>
    {
          [1,2,3,4,5].map((index,value)=>
          <Link to="/blog" className="text-dark text-decoration-none">
          <div className="row py-3" key={index}>
           
            <div className="col-4">
              <img src={demoImg} alt="" />
            </div>
            <div className="col-8">
              <h6>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure necessitatibus saepe fuga
              </h6>
            </div>
            
          </div>
          </Link>
          )
    }
    </div>
  );
};

export default BottomSidebar;
