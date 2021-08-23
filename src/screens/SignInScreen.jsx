import styled from "styled-components";

export default function SignInScreen() {
  return (
    <StyledSignInScreen>
      <div className="title">Signin</div>
      <form>
        <label htmlFor="">email</label>
        <input type="email" />
        <label htmlFor="">password</label>
        <input type="password" />
        <button className="signIn">Sigin</button>
      </form>
    </StyledSignInScreen>
  );
}
const StyledSignInScreen = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  .title {
    height: 10%;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    color: var(--blue-color);
  }
  form {
    gap: 25px;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 100%;
    max-width: var(--max-width-form);
  }
`;
