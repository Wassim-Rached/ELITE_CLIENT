import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
//icons
import WarningIcon from "@material-ui/icons/Warning";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AnnouncementIcon from "@material-ui/icons/Announcement";
//data
import { User } from "../data.js";
//components
import { useState } from "react";

export default function ProfileScreen() {
  const [warning, setWarning] = useState(false);
  return (
    <StyledProfileScreen>
      {warning ? (
        <StyledAreYouSure>
          <div className="containerSure">
            <WarningIcon className="icon" />
            <p>are you sure you want to delete your account?</p>
            <div onClick={() => setWarning(false)} className="cancel">
              cancel
              <CancelIcon />
            </div>
            <Link to="/" onClick={() => setWarning(false)} className="delete">
              delete
              <DeleteIcon />
            </Link>
          </div>
        </StyledAreYouSure>
      ) : (
        ""
      )}
      <div className="topProfile">
        <img src={User.profileImage} alt="" />
      </div>
      <div className="bottomProfile">
        <div className="containerProfile">
          <Link className="update" to={`/profile/update/` + User._id}>
            Update Account
            <EditIcon />
          </Link>
          <Link className="getRole" to={`/profile/getRole/` + User._id}>
            Get Role
            <SupervisorAccountIcon />
          </Link>
          <div onClick={() => setWarning(true)} className="delete">
            Delete Account
            <DeleteIcon />
          </div>
          <NavLink to="/admin/uploadNews" className="cancel">
            add news
            <AnnouncementIcon />
          </NavLink>
        </div>
      </div>
    </StyledProfileScreen>
  );
}
const StyledProfileScreen = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 68px;
  .topProfile {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 100%;
    background-color: #00f7ff;
    img {
      width: 250px;
      height: 250px;
      border-radius: 50%;
    }
  }
  .bottomProfile {
    padding-top: 20px;
    width: 100%;
    height: 50vh;
    .containerProfile {
      flex-wrap: wrap;
      gap: 15px;
      align-items: center;
      display: flex;
      justify-content: center;
      > * {
        margin: 0 15px;
      }
    }
  }
`;
const StyledAreYouSure = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0000008d;
  display: flex;
  justify-content: center;
  align-items: center;
  .containerSure {
    text-align: center;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 320px;
    height: 320px;
    background-color: #575757;
    color: #fff;
    .icon {
      color: var(--danger);
      font-size: 7rem;
    }
  }
`;
