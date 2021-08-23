import styled from "styled-components";

export default function News({ image, title, desc, posterImg, posterName }) {
  return (
    <StyledNews>
      <div className="top">
        <img src={posterImg} alt="" />
        <p>
          by: <span>{posterName}</span>
        </p>
      </div>
      <div className="middle">
        <img src={image} alt="" />
      </div>
      <div className="bottom">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </StyledNews>
  );
}
const StyledNews = styled.div`
  transition: all ease-out 0.2s;
  overflow: hidden;
  height: 500px;
  background-color: #333;
  width: 100%;
  max-width: 280px;
  @media screen and (min-width: 700px) {
    max-width: 300px;
  }
  padding: 10px;
  border-radius: 7px;
  .top {
    gap: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10%;
    img {
      border-radius: 20px;
      width: 40px;
      height: 40px;
      cursor: Pointer;
    }
    p {
      color: var(--strong-font-color);
      width: 240px;
      span {
        cursor: Pointer;
        color: #be2b2b;
      }
    }
  }
  .middle {
    height: 40%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 280px;
    }
  }
  .bottom {
    height: 50%;
    h3 {
      cursor: pointer;
      font-weight: 400;
      color: var(--primairy-color);
    }
    p {
      color: #959595;
      padding-left: 15px;
    }
  }
  :hover {
    transform: translatey(-15px);
    .bottom {
      p {
        color: #fff;
      }
    }
  }
`;
