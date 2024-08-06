import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const ResponsiveTableMui = () => {
  const items: {
    id: number;
    name: string;
    created: Date;
    high: number;
    low: number;
    average: number;
  }[] = [
    {
      id: 1,
      name: "First Item",
      created: new Date("2024-01-15T08:30:00Z"),
      high: 2935,
      low: 1924,
      average: 2429.5,
    },
    {
      id: 2,
      name: "Second Item",
      created: new Date("2024-02-20T09:45:00Z"),
      high: 439,
      low: 231,
      average: 335,
    },
    {
      id: 3,
      name: "Third Item",
      created: new Date("2024-03-10T10:00:00Z"),
      high: 1210,
      low: 890,
      average: 1050,
    },
    {
      id: 4,
      name: "Fourth Item",
      created: new Date("2024-04-05T11:15:00Z"),
      high: 745,
      low: 450,
      average: 597.5,
    },
    {
      id: 5,
      name: "Fifth Item",
      created: new Date("2024-05-25T12:30:00Z"),
      high: 990,
      low: 600,
      average: 795,
    },
  ];

  return (
    <Paper>
      <div style={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                Created
              </TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                High
              </TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                Low
              </TableCell>
              <TableCell>Average</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                  {item.created.toDateString()}
                </TableCell>
                <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                  {item.high}
                </TableCell>
                <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                  {item.low}
                </TableCell>
                <TableCell>{item.average}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
};

export default ResponsiveTableMui;
