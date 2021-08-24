import styled from "styled-components";

export default function UploadNewsScreen() {
  return (
    <StyledUploadNewsScreen>
      <div className="titlePage">upload news</div>
      <form className="form">
        <label htmlFor="">Title:</label>
        <input type="text" placeholder="title..." required />
        <label htmlFor="">Description:</label>
        <input type="email" placeholder="description..." required />
        <label htmlFor="">Image:</label>
        <input type="file" required />
        <button className="signIn">Post</button>
      </form>
    </StyledUploadNewsScreen>
  );
}
const StyledUploadNewsScreen = styled.main`
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
