import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsivenessMui() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item lg={3} md={6} sm={9} xs={12}>
          <Item>
            <Typography fontWeight={"bold"}>lg=3 md=6 sm=9 xs=12</Typography>
          </Item>
        </Grid>
        <Grid item lg={9} md={6} sm={3} xs={12}>
          <Item>
            <Typography fontWeight={"bold"}>lg=9 md=6 sm=3 xs=12</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
