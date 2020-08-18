import React from "react";
import { Link } from "react-router-dom";
import './TopSidebar.scss';

const TopSidebar = () => {
  return (
    <div className="top-sidebar">
      <h6>
        <span className="text-primary">/ </span>coronavirus
        <span className="text-primary"> /</span>
      </h6>
      {
          [1,2,3,4,5].map((index,value)=>
            <li className="list-unstyled py-3" key={index}>
              <Link to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nam culpa
              </Link>
            </li>
          )
      }
    </div>
  );
};

export default TopSidebar;
