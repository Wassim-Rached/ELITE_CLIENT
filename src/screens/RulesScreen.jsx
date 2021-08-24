import styled from "styled-components";

export default function RulesScreen() {
  return (
    <StyledRulesScreen>
      <div className="containerRules">
        <div>
          <div className="top">
            <div className="bottom">
              <div className="cancel">read more...</div>
            </div>
          </div>
        </div>
      </div>
    </StyledRulesScreen>
  );
}

const StyledRulesScreen = styled.main`
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  overflow: hidden;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-width: 1820px;
    right: 0;
    height: 500px;
  }
`;
