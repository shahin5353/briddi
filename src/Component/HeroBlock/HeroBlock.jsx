import React from "react";
import stadium from '../../Images/stadium.jpg';
import './HeroBlock.scss';

const HeroBlock = () => {
  return (
      <div className="hero-block">
        <h1 className="text-justify px-2 pb-2">THE BIG IDEA LIVING 'IN THE SHADOW OF POLICING</h1>
        <img className='title-img' src={stadium} alt="title pic here"/>
      </div>
  );
};

export default HeroBlock;
