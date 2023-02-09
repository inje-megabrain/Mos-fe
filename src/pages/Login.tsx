import Styled from "styled-components";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import useLogin from "../query/useLogin";
import { Box, Button, TextField } from "@mui/material";
//import useCreateDir from "../query/useCreateDir";

const LoginStyle = Styled.div`
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

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const { mutate: login } = useLogin();

  const onChangeId = useCallback((e: any) => {
    setId(e.target.value);
  }, []);

  const onChangePw = useCallback((e: any) => {
    setPw(e.target.value);
  }, []);

  const onLoginBtn = () => {
    login({ id: id, pw: pw });
  };
  //const { mutate: createDir } = useCreateDir();

  return (
    <LoginStyle>
      <Box className="title">LOGIN</Box>
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
        <Button onClick={onLoginBtn}>LOGIN</Button>
        <Link to="/SignUp">
          <Button>SIGN UP</Button>
        </Link>
      </Box>
      {/* <div className="title">Login</div>
      <div>
        <input placeholder="id" value={id} onChange={onChangeId} />
        <input placeholder="password" value={pw} onChange={onChangePw} />
      </div>
      <div>
        <button onClick={onClickBtn}>로그인</button>
        <button
          onClick={() => {
            createDir({ dir: "afgadgadfsdfgha" });
          }}
        >
          TEST
        </button>
      </div> */}
    </LoginStyle>
  );
};

export default Login;
