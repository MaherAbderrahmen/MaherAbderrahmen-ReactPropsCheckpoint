import React from 'react'
import PropTypes from "prop-types";
export default function Name(props) {
    return (
        <div>
            <h1 onClick={() => props.handelChange(props.fullName)}>{props.fullName}</h1>
            <span>{props.bio}</span>
            <br></br>
            <span>{props.profession}</span>
            <br></br>
            <div>{props.children}</div>
        </div>
    )
}
Name.propTypes = {
    handelChange: PropTypes.func,
  };
  Name.defaultProps = {
    profession: "not mentioned",
  };
  
