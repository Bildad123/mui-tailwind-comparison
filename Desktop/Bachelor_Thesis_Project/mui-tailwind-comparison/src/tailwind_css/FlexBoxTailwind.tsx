import { ButtonGroup, Button, Container } from "@mui/material";
import { useState } from "react";

const containerStyle = "flex items-center p-2 mb-4 bg-gray-100 shadow-md"; // Tailwind CSS classes for Paper-like styling
const itemStyle =
  "w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm m-1";

const FlexBoxTailwind = () => {
  const [activeSection, setActiveSection] = useState<
    | "flexDirection"
    | "flexWrap"
    | "justifyContent"
    | "alignItems"
    | "flexGrow"
    | "flexShrink"
    | null
  >(null);

  const handleSectionChange = (
    section:
      | "flexDirection"
      | "flexWrap"
      | "justifyContent"
      | "alignItems"
      | "flexGrow"
      | "flexShrink"
      | null
  ) => {
    setActiveSection(section);
  };

  return (
    <>
      <Container maxWidth={"xl"}>
        {/* Updated ButtonGroup with variant "outlined" */}
        <ButtonGroup
          variant="contained"
          aria-label="flex direction demo buttons"
        >
          <Button
            variant={activeSection === "flexDirection" ? "contained" : "text"}
            onClick={() => handleSectionChange("flexDirection")}
          >
            Flex Direction
          </Button>
          <Button
            variant={activeSection === "flexWrap" ? "contained" : "text"}
            onClick={() => handleSectionChange("flexWrap")}
          >
            Flex Wrap
          </Button>
          <Button
            variant={activeSection === "justifyContent" ? "contained" : "text"}
            onClick={() => handleSectionChange("justifyContent")}
          >
            Justify Content
          </Button>
          <Button
            variant={activeSection === "alignItems" ? "contained" : "text"}
            onClick={() => handleSectionChange("alignItems")}
          >
            Align Items
          </Button>
          <Button
            variant={activeSection === "flexGrow" ? "contained" : "text"}
            onClick={() => handleSectionChange("flexGrow")}
          >
            Flex Grow
          </Button>
          <Button
            variant={activeSection === "flexShrink" ? "contained" : "text"}
            onClick={() => handleSectionChange("flexShrink")}
          >
            Flex Shrink
          </Button>
        </ButtonGroup>

        {activeSection === "flexDirection" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-roboto my-5">
              {/* Row with default 'row' flex direction */}
              <div className="col-span-1 sm:col-span-1 md:col-span-1">
                <div className={`${containerStyle}`}>
                  <div className="flex">
                    <div className={`${itemStyle}`}>1</div>
                    <div className={`${itemStyle}`}>2</div>
                    <div className={`${itemStyle}`}>3</div>
                  </div>
                  <p className="text-sm text-center mt-2">row</p>
                </div>
              </div>

              {/* Column with 'column' flex direction */}
              <div className="col-span-1 sm:col-span-1 md:col-span-1">
                <div className={`${containerStyle}`}>
                  <div className="flex flex-col">
                    <div className={`${itemStyle}`}>1</div>
                    <div className={`${itemStyle}`}>2</div>
                    <div className={`${itemStyle}`}>3</div>
                  </div>
                  <p className="text-sm text-center mt-2">column</p>
                </div>
              </div>

              {/* Reverse row with 'row-reverse' flex direction */}
              <div className="col-span-1 sm:col-span-1 md:col-span-1">
                <div className={`${containerStyle}`}>
                  <div className="flex flex-row-reverse">
                    <div className={`${itemStyle}`}>1</div>
                    <div className={`${itemStyle}`}>2</div>
                    <div className={`${itemStyle}`}>3</div>
                  </div>
                  <p className="text-sm text-center mt-2">row-reverse</p>
                </div>
              </div>

              {/* Reverse column with 'column-reverse' flex direction */}
              <div className="col-span-1 sm:col-span-1 md:col-span-1">
                <div className={`${containerStyle}`}>
                  <div className="flex flex-col-reverse">
                    <div className={`${itemStyle}`}>1</div>
                    <div className={`${itemStyle}`}>2</div>
                    <div className={`${itemStyle}`}>3</div>
                  </div>
                  <p className="text-sm text-center mt-2">column-reverse</p>
                </div>
              </div>
            </div>
          </>
        )}
        {activeSection === "flexWrap" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 font-roboto my-5">
              {/* Flex wrap example */}
              <div className="col-span-1 flex justify-center items-center">
                <div className={containerStyle} style={{ maxWidth: "280px" }}>
                  <div className="flex flex-wrap justify-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                      <div key={item} className={itemStyle}>
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-center mt-2">flex-wrap</p>
                </div>
              </div>

              {/* No flex wrap example */}
              <div className="col-span-1 flex justify-center items-center">
                <div className={containerStyle} style={{ maxWidth: "280px" }}>
                  <div className="flex flex-nowrap justify-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                      <div key={item} className={itemStyle}>
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-center mt-2">flex-nowrap</p>
                </div>
              </div>
            </div>
          </>
        )}
        {activeSection === "justifyContent" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 font-roboto p-10">
              {/* flex-start */}
              <div className="col-span-1">
                <p className="text-center text-sm mt-2">flex-start</p>
                <div className={`${containerStyle} justify-start flex-wrap`}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className={itemStyle}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* flex-end */}
              <div className="col-span-1">
                <p className="text-center text-sm mt-2">flex-end</p>
                <div className={`${containerStyle} justify-end flex-wrap`}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className={itemStyle}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* center */}
              <div className="col-span-1">
                <p className="text-center text-sm mt-2">center</p>
                <div className={`${containerStyle} justify-center flex-wrap`}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className={itemStyle}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* space-between */}
              <div className="col-span-1">
                <p className="text-center text-sm mt-2">space-between</p>
                <div className={`${containerStyle} justify-between flex-wrap`}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className={itemStyle}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* space-around */}
              <div className="col-span-1">
                <p className="text-center text-sm mt-2">space-around</p>
                <div className={`${containerStyle} justify-around flex-wrap`}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className={itemStyle}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* space-evenly */}
              <div className="col-span-1">
                <p className="text-center text-sm mt-2">space-evenly</p>
                <div className={`${containerStyle} justify-evenly flex-wrap`}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className={itemStyle}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
        {activeSection === "alignItems" && (
          <>
            {" "}
            <div className="space-y-9 p-10">
              {/* flex-start */}
              <div className="w-full">
                <p className="text-center text-sm mt-2">flex-start</p>
                <div
                  className={`flex p-2 mb-4 bg-gray-100 shadow-md items-start`}
                  style={{ height: "150px" }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className={itemStyle}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* flex-end */}
              <div className="w-full">
                <p className="text-center text-sm mt-2">flex-end</p>
                <div
                  className={`flex p-2 mb-4 bg-gray-100 shadow-md items-end`}
                  style={{ height: "150px" }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className={itemStyle}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* center */}
              <div className="w-full">
                <p className="text-center text-sm mt-2">center</p>
                <div
                  className={`flex p-2 mb-4 bg-gray-100 shadow-md items-center`}
                  style={{ height: "150px" }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className={itemStyle}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
        {activeSection === "flexGrow" && (
          <>
            {" "}
            <div className="space-y-6 p-8">
              {/* flex-shrink */}
              <div className="w-full">
                <p className="text-center text-sm mt-2">flex-Grow</p>
                <div className={`${containerStyle}`}>
                  <div className={`${itemStyle} flex-grow-0`}>1</div>
                  <div className={`${itemStyle} flex-grow`}>2</div>
                  <div className={`${itemStyle} flex-grow-0`}>3</div>
                </div>
              </div>

              {/* No flex-shrink */}
              <div className="w-full">
                <p className="text-center text-sm mt-2">No flex-Grow</p>
                <div className={`${containerStyle}`}>
                  <div className={`${itemStyle}`}>1</div>
                  <div className={`${itemStyle}`}>2</div>
                  <div className={`${itemStyle}`}>3</div>
                </div>
              </div>
            </div>
          </>
        )}
        {activeSection === "flexShrink" && (
          <>
            <div className="space-y-6 p-8">
              {/* With flex-shrink */}
              <div className="w-full">
                <p className="text-center text-sm mt-2">With flex-shrink</p>
                <div className={`${containerStyle}`}>
                  <div
                    className={`${itemStyle} w-45% flex-shrink-0`}
                    style={{ width: "45%" }}
                  >
                    1
                  </div>
                  <div
                    className={`${itemStyle} w-45% flex-shrink-2`}
                    style={{ width: "45%" }}
                  >
                    2
                  </div>
                  <div
                    className={`${itemStyle} w-45% flex-shrink-0`}
                    style={{ width: "45%" }}
                  >
                    3
                  </div>
                </div>
              </div>

              {/* Without flex-shrink */}
              <div className="w-full">
                <p className="text-center text-sm mt-2">Without flex-shrink</p>
                <div className={`${containerStyle}`}>
                  <div className={`${itemStyle}`} style={{ width: "45%" }}>
                    1
                  </div>
                  <div className={`${itemStyle}`} style={{ width: "45%" }}>
                    2
                  </div>
                  <div className={`${itemStyle}`} style={{ width: "45%" }}>
                    3
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default FlexBoxTailwind;
