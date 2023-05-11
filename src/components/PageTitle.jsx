import styled from "styled-components";
import { SubTitleStyle, TitleStyle, colors, fontSize } from "../styles/global";

const PageTitle = ({ title, subTitle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Wrapper>
  );
};

export default PageTitle;

const Wrapper = styled.div`
  padding: 35px 0px;
`;

const Title = styled.h2`
  ${TitleStyle}
  font-size: ${fontSize.big};
  color: ${colors.MarineBlue};
`;

const SubTitle = styled.p`
  padding-top: 10px;
  ${SubTitleStyle}
  color: ${colors.CoolGray};
`;
