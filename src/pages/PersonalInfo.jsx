import styled from "styled-components";
import InputBox from "../components/InputBox";
import PageTitle from "../components/PageTitle";
import { colors, fontSize } from "../styles/global";
import { useState } from "react";

const PersonalInfo = ({ setStep }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onClickNextBtn = () => {
    if (name === "" || email === "" || phone === "") return;
    setStep((current) => current + 1);
  };

  return (
    <>
      <PageTitle
        title={"Personal info"}
        subTitle={"Please provide your name, email address, and phone number."}
      />
      <InputWrapper>
        <InputBox name={"Name"} setValue={setName} />
        <InputBox name={"Email Address"} setValue={setEmail} />
        <InputBox name={"Phone Number"} setValue={setPhone} />
      </InputWrapper>
      <StepButton onClick={onClickNextBtn}>Next Step</StepButton>
    </>
  );
};

export default PersonalInfo;

const InputWrapper = styled.div`
  height: 100%;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  gap: 25px 0px;
`;

const StepButton = styled.button`
  font-size: ${fontSize.small};
  background-color: ${colors.MarineBlue};
  color: ${colors.White};
  align-self: end;
  border-radius: 8px;
  padding: 14px 20px;
  width: auto;
`;
