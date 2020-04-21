import React from "react";
import ButtonBlock from "../styles/ButtonBlock";
import Loader from "./Loader";

const Button = props => {
  const { loading, url } = props;
  if (url) {
    return (
      <ButtonBlock.Link to={url} {...props}>
        {loading ? <Loader color="#fff" size={15} /> : props.children}
      </ButtonBlock.Link>
    );
  }
  return (
    <ButtonBlock {...props}>
      {loading ? <Loader color="#fff" size={15} /> : props.children}
    </ButtonBlock>
  );
};

export default Button;
