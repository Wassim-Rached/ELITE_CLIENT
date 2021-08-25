import styled from "styled-components";
import Rule from "../components/Rule";
import { Rules } from "../data";

export default function RulesScreen() {
  return (
    <StyledRulesScreen>
      <div className="containerRules">
        {Rules.map((rule) => {
          return <Rule key={rule._id} rule={rule} />;
        })}
      </div>
    </StyledRulesScreen>
  );
}

const StyledRulesScreen = styled.main`
  padding-top: 68px;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  .containerRules {
    margin: 0 auto;
    padding: 30px 0;
    max-width: 960px;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
  }
`;
