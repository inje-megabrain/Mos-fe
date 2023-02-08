import { useState } from "react";
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
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChangeId = (text: string) => {
    setId(text);
  };
  const onChangePw = (text: string) => {
    setPw(text);
  };

  const onClickBtn = () => {};

  return (
    <SignUpStyle>
      <div className="title">SignUp</div>
      <div>
        <input placeholder="id" />
        <input placeholder="password" />
      </div>
      <div>
        <button onClick={onClickBtn}>회원가입</button>
      </div>
    </SignUpStyle>
  );
};

export default SignUp;
