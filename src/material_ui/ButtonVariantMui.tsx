import { Button, Container, Stack } from "@mui/material";

const MuiButton = () => {
  return (
    <Container maxWidth="xl">
      <Stack
        gap={5}
        direction={"row"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button variant="contained">Contained</Button>
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Container>
  );
};

export default MuiButton;
