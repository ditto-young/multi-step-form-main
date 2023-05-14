import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import { colors } from "../styles/global";
import { SubTitleStyle } from "../styles/global";
import { fontSize } from "../styles/global";

import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";

const SelectPlan = () => {
  return (
    <>
      <PageTitle
        title={"Select your plan"}
        subTitle={"You have the option of monthly or yearly billing."}
      />

      <InputWrapper>
        <PlanBtn>
          <PlanImg src={ArcadeIcon} />
          <PlanInfo>Arcade</PlanInfo>
          <Price>$9/mo</Price>
        </PlanBtn>
        <PlanBtn>
          <PlanImg src={AdvancedIcon} />
          <PlanInfo>Arcade</PlanInfo>
          <Price>$9/mo</Price>
        </PlanBtn>
        <PlanBtn>
          <PlanImg src={ProIcon} />
          <PlanInfo>Arcade</PlanInfo>
          <Price>$9/mo</Price>
        </PlanBtn>
      </InputWrapper>
    </>
  );
};

export default SelectPlan;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PlanBtn = styled.button`
  width: 30%;
  height: 300px;
  border-radius: 7px;
  border: 2px solid ${colors.PurplishBlue};
  :hover {
    border: 2px solid ${colors.MarineBlue};
  }
`;

const PlanImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const PlanInfo = styled.p`
  ${SubTitleStyle}
`;

const Price = styled.span`
  font-size: ${fontSize.small};
`;
