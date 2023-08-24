import React from 'react';
import arrow from "../../../assets/arrow.png";

const Arrow = (props) => {
    return (
        <img src={arrow} alt="Стрелочка" className={props.className}/>
    );
};

export default Arrow;