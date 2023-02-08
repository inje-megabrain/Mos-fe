import React from "react";
import Styled from "styled-components";

const SignUpStyle = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    color: black;
    margin-top: 50px;
  }
`;

const SignUp = () => {
  return (
    <SignUpStyle>
      <div className="title">SignUp</div>
    </SignUpStyle>
  );
};

export default SignUp;
