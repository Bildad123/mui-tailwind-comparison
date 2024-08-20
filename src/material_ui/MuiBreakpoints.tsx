import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const breakpoints = [
  { prefix: "xs", minWidth: "0px" },
  { prefix: "sm", minWidth: "600px" },
  { prefix: "md", minWidth: "900px" },
  { prefix: "lg", minWidth: "1200px" },
  { prefix: "xl", minWidth: "1536px" },
];

const MuiBreakpoints = () => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Breakpoint Prefix</TableCell>
            <TableCell align="center">Minimum Width</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {breakpoints.map((breakpoint) => (
            <TableRow key={breakpoint.prefix}>
              <TableCell component="th" scope="row">
                {breakpoint.prefix}
              </TableCell>
              <TableCell align="center">{breakpoint.minWidth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default MuiBreakpoints;
