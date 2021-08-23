import styled from "styled-components";
import News from "./News";
import { Posts } from "../data.js";

export default function LastNewsSection() {
  return (
    <LastNewsSectionStyled id="LastNews">
      <div className="containerSectionSmall">
        <h1 className="title">Last News!</h1>
        <div className="NewsContainer">
          {Posts.map((post) => {
            return (
              <News
                key={post.id}
                image={post.image}
                title={post.title}
                desc={post.desc}
                posterImg={post.posterImg}
                posterName={post.posterName}
              />
            );
          })}
        </div>
        <div className="seeMore">See More...</div>
      </div>
    </LastNewsSectionStyled>
  );
}
const LastNewsSectionStyled = styled.section`
  margin: 0 auto;
  min-width: var(--min-width);
  background-color: var(--secondary-bg);
  .title {
    font-size: 2rem;
    color: var(--blue-color);
    text-align: center;
    margin-bottom: 40px;
  }
  .NewsContainer {
    gap: 30px;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .seeMore {
    text-align: center;
    text-decoration: underline;
    padding: 30px 0;
    cursor: pointer;
    :hover {
      color: var(--primairy-color);
    }
  }
`;
