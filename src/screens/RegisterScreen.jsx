import styled from "styled-components";

export default function RegisterScreen() {
  return (
    <StyledRegisterScreen>
      <div className="titlePage">Register</div>
      <form className="form">
        <label htmlFor="">name:</label>
        <input type="text" placeholder="name..." required />
        <label htmlFor="">email:</label>
        <input type="email" placeholder="email..." required />
        <label htmlFor="">password:</label>
        <input type="password" placeholder="password..." required />
        <label htmlFor="">confirm password:</label>
        <input type="password" placeholder="confirm password..." required />
        <button className="signIn">Register</button>
      </form>
    </StyledRegisterScreen>
  );
}
const StyledRegisterScreen = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  button {
    margin-top: 20px;
  }
`;
