import styled from "styled-components";
import { colors, fontSize } from "../styles/global";

const InputBox = ({ isRequired, value, onChange, label }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input
        onChange={onChange}
        value={value}
        placeholder="Vanessa Mint"
      ></Input>
    </div>
  );
};

export default InputBox;

const Label = styled.label`
  color: ${colors.MarineBlue};
  font-size: ${fontSize.mid};
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  font-size: ${fontSize.mid};
  color: ${colors.MarineBlue};
  border: 2px solid ${colors.LightGray};
  border-radius: 8px;
`;
