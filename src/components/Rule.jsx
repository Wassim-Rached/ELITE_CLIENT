import { Link } from "react-router-dom";
import styled from "styled-components";
import AnnouncementIcon from "@material-ui/icons/Announcement";

export default function Rule({ rule }) {
  return (
    <StyledRule>
      <div className="topRule">
        <AnnouncementIcon className="iconRule" />
      </div>
      <div className="midRule">
        <h2>{rule.title}</h2>
        <p>{rule.desc}</p>
      </div>
      <div className="bottomRule">
        <Link to={"/rules/" + rule.title} className="cancel">
          read more...
        </Link>
      </div>
    </StyledRule>
  );
}
const StyledRule = styled.div`
  height: 350px;
  width: 300px;
  background-color: var(--transparent);
  padding: 20px 0;
  .topRule {
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    .iconRule {
      font-size: 7rem;
      color: var(--strong-font-color);
    }
  }
  .midRule {
    height: 50%;
    h2 {
      font-style: italic;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
      color: var(--primairy-color);
      text-align: center;
      font-size: 1.8rem;
    }
    p {
      padding: 15px;
      text-align: center;
    }
  }
  .bottomRule {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15%;
    a {
      :hover {
        color: var(--blue-color);
      }
    }
  }
`;
