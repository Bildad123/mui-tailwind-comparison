import { Button, ButtonGroup, Container, Paper } from "@mui/material";
import ResponsiveTableTailwind from "./ResponsiveTableTailwind";
import TailwindBreakpoints from "./TailwindBreakpoints";
import { useState } from "react";

const ResponsivenessTailwind = () => {
  const [activeSection, setActiveSection] = useState<
    | "breakpointTable"
    | "responsiveBreakpointDemo"
    | "responsiveTableDemo"
    | null
  >(null);

  const handleSectionChange = (
    section:
      | "breakpointTable"
      | "responsiveBreakpointDemo"
      | "responsiveTableDemo"
      | null
  ) => {
    setActiveSection(section);
  };
  return (
    <Container maxWidth={"xl"}>
      <ButtonGroup
        variant="contained"
        aria-label="responsive filter buttons"
        sx={{ mb: 3 }}
      >
        <Button
          variant={activeSection === "breakpointTable" ? "contained" : "text"}
          onClick={() => handleSectionChange("breakpointTable")}
        >
          Breakpoint Table
        </Button>
        <Button
          variant={
            activeSection === "responsiveBreakpointDemo" ? "contained" : "text"
          }
          onClick={() => handleSectionChange("responsiveBreakpointDemo")}
        >
          Reponsive Breakpoint Demo
        </Button>
        <Button
          variant={
            activeSection === "responsiveTableDemo" ? "contained" : "text"
          }
          onClick={() => handleSectionChange("responsiveTableDemo")}
        >
          Responsive Table Demo
        </Button>
      </ButtonGroup>
      {activeSection === "responsiveBreakpointDemo" && (
        <>
          <div className="flex-grow">
            <div className="grid grid-cols-12 gap-4">
              {/* First Grid Item */}
              <div className="col-span-12 sm:col-span-9 md:col-span-6 lg:col-span-3">
                <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg border border-gray-200 dark:border-gray-700 p-3">
                  <p className="text-center font-bold">lg:3 md:6 sm:9</p>
                </div>
              </div>

              {/* Second Grid Item */}
              <div className="col-span-12 sm:col-span-3 md:col-span-6 lg:col-span-9">
                <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg border border-gray-200 dark:border-gray-700 p-3">
                  <p className="text-center font-bold">lg:9 md:6 sm:3</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {activeSection === "responsiveTableDemo" && (
        <Paper>
          <ResponsiveTableTailwind />
        </Paper>
      )}
      {activeSection === "breakpointTable" && (
        <>
          <Paper>
            <TailwindBreakpoints />
          </Paper>
        </>
      )}
    </Container>
  );
};

export default ResponsivenessTailwind;
