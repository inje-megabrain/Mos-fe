import { useState, useCallback } from "react";
import Styled from "styled-components";
import useSignUp from "../query/useSignUp";

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
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const { mutate: signup } = useSignUp();

  const onChangeId = useCallback((e: any) => {
    setId(e.target.value);
  }, []);

  const onChangePw = useCallback((e: any) => {
    setPw(e.target.value);
  }, []);

  const onClickBtn = () => {
    signup({ id: id, pw: pw });
  };

  return (
    <SignUpStyle>
      <div className="title">SignUp</div>
      <div>
        <input placeholder="id" value={id} onChange={onChangeId} />
        <input placeholder="password" value={pw} onChange={onChangePw} />
      </div>
      <div>
        <button onClick={onClickBtn}>회원가입</button>
      </div>
    </SignUpStyle>
  );
};

export default SignUp;
