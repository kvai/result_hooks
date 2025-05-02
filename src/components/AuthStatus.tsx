import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../customHooks/useAuthContext";
import { Button } from "@mantine/core";

export const AuthStatus = () => {
  const navigate = useNavigate();

  const { user, signout } = useAuthContext();
  const handleSignOut = () => {
    signout(() => navigate("/"));
  };
  return !user ? (
    <Button size={"compact-md"} onClick={() => navigate("/login")}>
      Sign In
    </Button>
  ) : (
    <>
      <Button onClick={handleSignOut} variant="light" color="red">
        Sign Out
      </Button>
    </>
  );
};
