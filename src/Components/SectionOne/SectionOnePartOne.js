import React from 'react';
import './SectionOnePartOne.css'
const SectionOnePartOne = (props) => {
    const {Img} =props.AllData
    return (
        <div>
          <img style={{width:'100%'}} src={Img} alt="" />
        </div>
    );
};

export default SectionOnePartOne;