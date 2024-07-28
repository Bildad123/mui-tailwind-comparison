import { Stack, Button, Container } from "@mui/material";

const ButtonColorMui = () => {
  return (
    <Container>
      {" "}
      <Stack
        gap={5}
        direction={"row"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>

        <Button variant="contained" color="error">
          Error
        </Button>

        <Button variant="contained" color="info">
          Info
        </Button>

        <Button variant="contained" color="warning">
          Warning
        </Button>
      </Stack>
    </Container>
  );
};

export default ButtonColorMui;
