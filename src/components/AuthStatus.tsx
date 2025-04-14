import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../customHooks/useAuthContext";

export const AuthStatus = () => {
  const navigate = useNavigate();

  const { user, signout } = useAuthContext();
  const handleSignOut = () => {
    signout(() => navigate("/"));
  };
  return !user ? (
    <NavLink className="login_btn btn" to="/login">
      Sign In
    </NavLink>
  ) : (
    <>
      <button className="btn" onClick={handleSignOut}>
        Sign Out
      </button>
    </>
  );
};
