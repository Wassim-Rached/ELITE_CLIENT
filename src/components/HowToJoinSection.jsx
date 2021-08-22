import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HowToJoinSection() {
  return (
    <HowToJoinSectionStyled id="HowToJoin">
      <div className="text">
        <h1>How To Join ?</h1>
        <h3>first install</h3>
        <div className="btnDownoload">
          <Link to="/download">Lua.ete</Link>
        </div>
        <h3>then install</h3>
        <div className="btnDownoload">
          <Link to="/download">server boost</Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          impedit. Exercitationem?
        </p>
      </div>
      <div className="img">
        <img src="./images/fixed/img.png" alt="" />
      </div>
    </HowToJoinSectionStyled>
  );
}
const HowToJoinSectionStyled = styled.section`
  max-width: var(--max-width);
  min-width: var(--min-width);
  margin: 0 auto;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .text {
    max-width: 498px;
    h1 {
      text-transform: capitalize;
      color: var(--strong-font-color);
      font-size: 2rem;
      margin-bottom: 20px;
    }
    h3 {
      font-weight: 300;
      font-size: 1.2rem;
    }
    .btnDownoload {
      margin: 10px 0;
      text-align: center;
      padding: 5px 15px;
      width: 240px;
      background-color: var(--secondary-color);
      color: #333;
      font-weight: 400;
    }
    p {
      color: var(--light-font-color);
      font-size: 0.8rem;
    }
  }
  .img {
    img {
      width: 550px;
      max-width: 90vw;
    }
  }
`;
