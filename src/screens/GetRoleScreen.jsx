import styled from "styled-components";

export default function GetRoleScreen() {
  return (
    <StyledGetRoleScreen>
      <div className="titlePage">Get Role</div>
      <form className="form">
        <p>if you have a getRole code you can use it here and get your role!</p>
        <label htmlFor="">GetRoleCode:</label>
        <input type="text" placeholder="getRole Code..." required />
        <button className="getRole">Sumbit</button>
      </form>
    </StyledGetRoleScreen>
  );
}

const StyledGetRoleScreen = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 68px;
  form {
    gap: 25px;
    justify-content: flex-start;
    align-items: center;
    label {
      text-align: center;
    }
    p {
      max-width: 80%;
      text-align: center;
      margin-bottom: 15px;
      color: var(--light-font-color);
    }
  }
`;
