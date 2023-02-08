import React from "react";
import Styled from "styled-components";
import { login } from "../api/login";
import { useQuery } from "react-query";

const LoginStyle = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    color: black;
    margin-top: 50px;
  }
`;

const Login = () => {
  const { data } = useQuery("login", login);

  return (
    <LoginStyle>
      <div className="title">
        Login {data?.id} {data?.password}
      </div>
    </LoginStyle>
  );
};

export default Login;
