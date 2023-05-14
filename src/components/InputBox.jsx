import styled from "styled-components";
import { colors, fontSize } from "../styles/global";

const InputBox = ({ setValue, name }) => {
  return (
    <div>
      <Label>{name}</Label>
      <Input
        name={name}
        onChange={(e) => setValue(e.target.value)}
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
