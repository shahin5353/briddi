import React from "react";
import "./BottomSidebar.scss";
import demoImg from "../../Images/stadium.jpg";

const BottomSidebar = () => {
  return (
    <div className="bottom-sidebar mt-5">
      <h4 className="mb-4">
        <span className="text-primary">/ </span>what's happening
        <span className="text-primary"> /</span>
      </h4>
    {
          [1,2,3,4,5].map((index,value)=>
          <div className="row py-3" key={index}>
            <div className="col-lg-4 col-md-6">
              <img src={demoImg} alt="" />
            </div>
            <div className="col-lg-8 col-md-6">
              <h6>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure necessitatibus saepe fuga
              </h6>
            </div>
          </div>
          )
    }
    </div>
  );
};

export default BottomSidebar;
