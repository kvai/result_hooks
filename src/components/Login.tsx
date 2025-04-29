import { useLocation, useNavigate } from "react-router-dom";
import { FormEvent, useEffect } from "react";
import { useAuthContext } from "../customHooks/useAuthContext";
import { Button, Grid, Input } from "@mantine/core";

export const Login = () => {
  const { signin, user } = useAuthContext();
  const historyLink = useLocation().state?.from || "";

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;

    signin(username, () => {
      navigate(!historyLink ? "/" : historyLink, {
        replace: true,
      });
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/", {
        replace: true,
      });
    }
  }, [navigate, user]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid align="end">
        <Grid.Col span={6}>
          <Input.Wrapper label="User" required>
            <Input placeholder="Enter username" name="username" required />
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span="auto">
          <Button type="submit">Sign In</Button>
        </Grid.Col>
      </Grid>
    </form>
  );
};
