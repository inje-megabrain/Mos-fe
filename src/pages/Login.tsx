import Styled from "styled-components";
import { useState, useCallback } from "react";
import useLogin from "../query/useLogin";
import useCreateDir from "../query/useCreateDir";

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
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const { mutate: login } = useLogin();

  const onChangeId = useCallback((e: any) => {
    setId(e.target.value);
  }, []);

  const onChangePw = useCallback((e: any) => {
    setPw(e.target.value);
  }, []);

  const onClickBtn = () => {
    login({ id: id, pw: pw });
  };
  const { mutate: createDir } = useCreateDir();

  return (
    <LoginStyle>
      <div className="title">Login</div>
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
      </div>
    </LoginStyle>
  );
};

export default Login;
