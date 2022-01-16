import React from "react";
import PropTypes from "prop-types";
import ButtonEl from "./button.styles";

const Button = ({ onButtonClick }) => {
  return (
    <ButtonEl type="button" onClick={onButtonClick}>
      Load more
    </ButtonEl>
  );
};
Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
export default Button;
