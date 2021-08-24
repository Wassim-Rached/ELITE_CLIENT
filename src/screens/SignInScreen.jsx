import styled from "styled-components";

export default function SignInScreen() {
  return (
    <StyledSignInScreen>
      <div className="titlePage">Signin</div>
      <form className="form">
        <label htmlFor="">email:</label>
        <input type="email" placeholder="email..." required />
        <label htmlFor="">password:</label>
        <input type="password" placeholder="password..." required />
        <button className="signIn">Signin</button>
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
  gap: 15px;
`;
