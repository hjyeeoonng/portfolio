import styled from "styled-components";

const MainRoot = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  align-items: center;
  justify-content: center;
`;
const MainTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content:center;
`;

const MainCenter = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #484859;
  height:65vh;
`;

const MainMenuBar = styled.div`
  width: 800px;
  height: 250px;
  margin: 40px 0px 0px 0px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  border-radius:10px;
  background-color: #EEEEEE;
`;
const MainBtnSets = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
`;

const MainBtnSet = styled.div`
  width: 150px;
  height: 100px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-around;
  border-radius:10px;
  background-color:#EEEEEE;
  &:hover {
    background: #D9D9D9;
  }
`;

const MainBtnText = styled.div`
  font-size:16px;
`;

const MainBtnIcon = styled.div`
  width:65px;
  height:65px;
  border-radius:50px;
  background-color:white;
`;

export const Main = () => {
  return(
    <MainRoot>
      <MainCenter>
        <MainTitle>HYEON JEONG JUN</MainTitle>
        <MainMenuBar>
          <MainBtnSets>
            <MainBtnSet>
              <MainBtnIcon></MainBtnIcon>
              <MainBtnText>About</MainBtnText>
            </MainBtnSet>
            <MainBtnSet>
              <MainBtnIcon></MainBtnIcon>
              <MainBtnText>About</MainBtnText>
            </MainBtnSet>
            <MainBtnSet>
              <MainBtnIcon></MainBtnIcon>
              <MainBtnText>About</MainBtnText>
            </MainBtnSet>
            <MainBtnSet>
              <MainBtnIcon></MainBtnIcon>
              <MainBtnText>About</MainBtnText>
            </MainBtnSet>
          </MainBtnSets>
          <MainBtnSets>
          <MainBtnSet>
            <MainBtnIcon></MainBtnIcon>
              <MainBtnText>About</MainBtnText>
            </MainBtnSet>
            <MainBtnSet>
              <MainBtnIcon></MainBtnIcon>
              <MainBtnText>About</MainBtnText>
            </MainBtnSet>
            <MainBtnSet>
              <MainBtnIcon></MainBtnIcon>
              <MainBtnText>About</MainBtnText>
            </MainBtnSet>
            <MainBtnSet>
              <MainBtnIcon></MainBtnIcon>
              <MainBtnText>About</MainBtnText>
            </MainBtnSet>
          </MainBtnSets>
        </MainMenuBar>
      </MainCenter>
    </MainRoot>
  );
};
export default Main