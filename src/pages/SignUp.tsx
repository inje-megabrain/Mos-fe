import { Box, Button, TextField } from "@mui/material";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import useSignUp from "../query/useSignUp";

const SignUpStyle = Styled.div`
  transform: translate(75%, 20%);
  display: flex;
  flex-direction:column;
  align-items:center;
  border: 3px solid black;
  border-radius: 20px;
  background-color:white;
  width:40%;

  .title {
    color: #010A6F;
    margin-top: 50px;
    font-size: 24px;
    text-align:center;
  }

  .inputContainer {
    width: 90%;
    margin-top:20px;
    margin-bottom: 40px;
  }

  .input {
    width: 100%;
    display: flex;
    align-items:center;
    margin-top:10px;
  }

  .BtnContainer {
    width: 90%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
  `;

const SignUp = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const { mutate: signup, data } = useSignUp();

  const onChangeId = useCallback((e: any) => {
    setId(e.target.value);
  }, []);

  const onChangePw = useCallback((e: any) => {
    setPw(e.target.value);
  }, []);

  const onSignUpBtn = () => {
    signup({ id: id, pw: pw });
  };

  return (
    <SignUpStyle>
      <Box className="title">SIGN UP</Box>
      <Box className="inputContainer">
        <TextField
          className="input"
          placeholder="ID"
          value={id}
          type="id"
          onChange={onChangeId}
        />
        <TextField
          className="input"
          placeholder="PW"
          value={pw}
          type="password"
          onChange={onChangePw}
        />
      </Box>
      <Box className="BtnContainer">
        <Button onClick={onSignUpBtn}>SIGN UP</Button>
        <Link to="/login">
          <Button>LOGIN</Button>
        </Link>
      </Box>
    </SignUpStyle>
  );
};

export default SignUp;
