import React from "react";
import "./FilterBox.scss";

const FilterBox = () => {
  return (
    <div className="filter-box p-2">
      <div className="filter-box-title py-3">
        <h4>Filter</h4>
      </div>
     <div className="check-block px-1 py-3 mt-2">
     {
         [1,2,3,4,5,6,7].map((index,value)=>
         <div className="form-check mt-2">
            <input type="checkbox" className="form-check-input" id={`checkbox_${index}`}/>
            <label className="form-check-label pl-2" for={`checkbox_${index}`}>
              Check
            </label>
          </div>
         )
     }
     </div>
    </div>
  );
};

export default FilterBox;
