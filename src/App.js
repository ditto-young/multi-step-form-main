import styled from "styled-components";
import { MEDIA_SIZE, colors } from "./styles/global";
import SideBarImg from "./assets/images/bg-sidebar-desktop.svg";
import PersonalInfo from "./pages/PersonalInfo";

const App = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <SideBar>
          <SidebarBackground src={SideBarImg} />
        </SideBar>

        <Content>
          <PersonalInfo />
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  background-color: ${colors.PastelBlue};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${MEDIA_SIZE.mobile}) {
    background-color: ${colors.MarineBlue};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.White};
  margin: auto;
  border-radius: 20px;
  max-width: 1200px;
  width: 80vw;
  height: 70vh;
  padding: 20px;

  @media (max-width: ${MEDIA_SIZE.mobile}) {
    background-color: ${colors.MarineBlue};
    width: 90vw;
  }
`;

const SideBar = styled.div`
  flex: 45%;
`;

const SidebarBackground = styled.img`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  display: flex;
  flex: 60%;
  flex-direction: column;
  height: 100%;
`;
