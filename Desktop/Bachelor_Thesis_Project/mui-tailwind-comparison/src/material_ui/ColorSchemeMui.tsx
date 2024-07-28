import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
  useTheme,
  Button,
  ButtonGroup,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import * as colors from "@mui/material/colors";

const colorShades: Array<number | string> = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  "A100",
  "A200",
  "A400",
  "A700",
];

// Filter out 'common' color
const colorNames: string[] = Object.keys(colors).filter(
  (name) =>
    typeof colors[name as keyof typeof colors] === "object" && name !== "common"
);

const getColorValue = (
  color: string,
  shade: number | string
): string | undefined => {
  return colors[color as keyof typeof colors][
    shade as keyof (typeof colors)[string & keyof typeof colors]
  ];
};

const getTextColor = (bgColor: string): string => {
  const hex = bgColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000" : "#fff";
};

const ColorTableCell = styled(TableCell)(
  ({ bgcolor }: { bgcolor: string }) => ({
    backgroundColor: bgcolor,
    color: getTextColor(bgcolor),
    padding: "8px", // Adjust padding for better spacing
  })
);

const MuiColorTheme: React.FC = () => {
  const theme = useTheme(); // Access Material-UI theme
  const [showPaletteColors, setShowPaletteColors] = useState(true);

  const paletteKeys = [  
    "primary",
    "secondary",
    "error",
    "warning",
    "info",
    "success",
  ] as const;

  return (
    <Container maxWidth="xl">
      <ButtonGroup variant="contained" style={{ marginBottom: "16px" }}>
        <Button
          onClick={() => setShowPaletteColors(true)}
          variant={showPaletteColors ? "contained" : "text"}
        >
          Palette Colors
        </Button>
        <Button
          onClick={() => setShowPaletteColors(false)}
          variant={!showPaletteColors ? "contained" : "text"}
        >
          Color from @mui/material/colors
        </Button>
      </ButtonGroup>

      {showPaletteColors && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Color</TableCell>
                {colorShades.map((shade) => (
                  <TableCell key={shade.toString()}>{shade}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {colorNames.map((color) => (
                <TableRow key={color}>
                  <TableCell>{color}</TableCell>
                  {colorShades.map((shade) => {
                    const colorValue = getColorValue(color, shade);
                    return (
                      <ColorTableCell
                        key={`${color}-${shade}`}
                        bgcolor={colorValue ? colorValue : "#fff"}
                      >
                        {colorValue ? shade : "N/A"}
                      </ColorTableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={colorShades.length + 1} align="center">
                  Footer Content
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      )}
      {!showPaletteColors && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Color</TableCell>
                <TableCell>Main</TableCell>
                <TableCell>Dark</TableCell>
                <TableCell>Light</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paletteKeys.map((key) => {
                const mainColor = theme.palette[key].main;
                const darkColor = theme.palette[key].dark;
                const lightColor = theme.palette[key].light;

                return (
                  <TableRow key={key}>
                    <TableCell>{key}</TableCell>
                    <TableCell
                      style={{
                        backgroundColor: mainColor,
                        color: theme.palette.getContrastText(mainColor),
                        padding: "8px",
                      }}
                    >
                      {mainColor}
                    </TableCell>
                    <TableCell
                      style={{
                        backgroundColor: darkColor,
                        color: theme.palette.getContrastText(darkColor),
                        padding: "8px",
                      }}
                    >
                      {darkColor}
                    </TableCell>
                    <TableCell
                      style={{
                        backgroundColor: lightColor,
                        color: theme.palette.getContrastText(lightColor),
                        padding: "8px",
                      }}
                    >
                      {lightColor}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default MuiColorTheme;
