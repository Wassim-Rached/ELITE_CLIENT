import styled from "styled-components";

export default function WelcomeSection() {
  return (
    <WelcomeSectionStyled>
      <h1>
        welcome to <span>Elite</span> server website!
      </h1>
      <p>register now to unlock features and more.. </p>
      <div className="btn">Register</div>
    </WelcomeSectionStyled>
  );
}
const WelcomeSectionStyled = styled.section`
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  flex-direction: column;
  padding: 10px;
  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--strong-font-color);
    text-transform: capitalize;
    span {
      color: var(--primairy-color);
    }
  }
  .btn {
    border: 1px solid var(--strong-font-color);
    margin: 0 auto;
    cursor: pointer;
    padding: 8px;
    width: 300px;
    color: #fff;
    background-color: var(--blue-color);
  }
`;
