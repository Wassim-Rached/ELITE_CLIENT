import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Rules } from "../data";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
export default function RuleScreen() {
  const [language, setLanguage] = useState("EN");
  const arabic = `شسي شيشسيشسيشس شسي ثقبيلبسلا  خيحخ شخهت حخ خحتبيحخشسيتبحخشتس بشحخسخب سحخخخب خحسشب ت`;
  const TITLE = "general";
  const RulesHere = Rules.find((u) => (u.title = TITLE));
  return (
    <StyledRuleScreen>
      <div className="containerRuleScreen">
        <div className="title">{TITLE}</div>
        <div className="btns">
          <span
            onClick={() => {
              setLanguage("AR");
            }}
            className={language === "AR" ? " active" : ""}
          >
            AR
          </span>
          <span
            onClick={() => {
              setLanguage("EN");
            }}
            className={language === "EN" ? " active" : ""}
          >
            EN
          </span>
        </div>
        <p className="content">
          {language === "EN" ? RulesHere.rules : arabic}
        </p>
        <Link to="/rules" className="cancel toBottom">
          <ArrowBackIcon /> Go back to Rules
        </Link>
      </div>
    </StyledRuleScreen>
  );
}

const StyledRuleScreen = styled.main`
  padding-top: 100px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .containerRuleScreen {
    background-color: var(--transparent);
    padding: 12px 12px 60px 12px;
    height: 100%;
    max-width: var(--max-width);
    min-height: 80vh;
    width: 100%;
    position: relative;
    .btns {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      span {
        cursor: pointer;
        padding: 8px 11px;
        background-color: grey;
      }
    }
    .title {
      text-align: center;
      color: var(--blue-color);
      letter-spacing: 0.2rem;
      font-style: italic;
      text-transform: capitalize;
      font-size: 3rem;
    }
    .content {
      line-height: 1.6rem;
      text-align: center;
      margin: 15px auto;
      max-width: 1100px;
    }
  }
  .toBottom {
    color: var(--primairy-color);
    position: absolute;
    bottom: 15px;
    width: 90%;
    left: 5%;
    right: 5%;
  }
`;
