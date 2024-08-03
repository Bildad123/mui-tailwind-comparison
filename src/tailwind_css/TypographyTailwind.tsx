import { useState } from "react";
import { Container, Box, Button, ButtonGroup } from "@mui/material";

const TypographyMui = () => {
  const [activeState, setActiveState] = useState<
    | "fontSize"
    | "fontWeight"
    | "fontStyle"
    | "textTransform"
    | "textAlign"
    | null
  >(null);

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 3 }}>
        <ButtonGroup variant="contained">
          <Button
            onClick={() =>
              setActiveState(activeState === "fontSize" ? null : "fontSize")
            }
            variant={activeState === "fontSize" ? "contained" : "text"}
          >
            Font Size
          </Button>
          <Button
            onClick={() =>
              setActiveState(activeState === "fontWeight" ? null : "fontWeight")
            }
            variant={activeState === "fontWeight" ? "contained" : "text"}
          >
            Font Weight
          </Button>
          <Button
            onClick={() =>
              setActiveState(activeState === "fontStyle" ? null : "fontStyle")
            }
            variant={activeState === "fontStyle" ? "contained" : "text"}
          >
            Font Style
          </Button>
          <Button
            onClick={() =>
              setActiveState(
                activeState === "textTransform" ? null : "textTransform"
              )
            }
            variant={activeState === "textTransform" ? "contained" : "text"}
          >
            Text Transform
          </Button>

          <Button
            onClick={() =>
              setActiveState(activeState === "textAlign" ? null : "textAlign")
            }
            variant={activeState === "textAlign" ? "contained" : "text"}
          >
            Text Align
          </Button>
        </ButtonGroup>

        <div className="flex  justify-center min-h-screen">
          <div className="font-roboto">
            <div className="inline-block text-left p-4 rounded-lg">
              {activeState === "fontSize" && (
                <>
                  <p className="text-6xl">Size 6xl</p>
                  <p className="text-5xl">Size 5xl</p>
                  <p className="text-4xl">Size 4xl</p>
                  <p className="text-3xl">Size 3xl</p>
                  <p className="text-2xl">Size 2xl</p>
                  <p className="text-xl">Size xl</p>
                  <p className="text-lg">Size lg</p>
                  <p className="text-base">Size base</p>
                  <p className="text-sm">Size sm</p>
                  <p className="text-xs">Size xs</p>
                </>
              )}
              {activeState === "fontWeight" && (
                <>
                  <p className="font-thin">Thin Weight</p>
                  <p className="font-extralight">Extralight Weight</p>
                  <p className="font-light">Light Weight</p>
                  <p className="font-normal">Normal Weight</p>
                  <p className="font-medium">Medium Weight</p>
                  <p className="font-semibold">Semi-bold Weight</p>
                  <p className="font-bold">Bold Weight</p>
                  <p className="font-extrabold">Extrabold Weight</p>
                  <p className="font-black">Black Weight</p>
                </>
              )}
              {activeState === "fontStyle" && (
                <>
                  <p className="italic">Italic font style</p>
                  <p className="not-italic">Non-italic font style</p>
                </>
              )}
              {activeState === "textTransform" && (
                <>
                  <p className="normal-case">normal-case text transform</p>
                  <p className="uppercase">uppercase text transform</p>
                  <p className="lowercase">lowercase text transform</p>
                  <p className="capitalize">capitalize text transform</p>
                </>
              )}
              {activeState === "textAlign" && (
                <>
                  <div className="space-y-4">
                    <div className="flex space-x-8">
                      <div className="text-left border-2 p-2">
                        <div className="font-black">Left</div>
                        So I started to walk into the water. I won't lie to you
                        boys, I was terrified. But I pressed on, and as I made
                        my way past the breakers a strange calm came over me.
                      </div>
                      <div className="text-right border-2 p-2">
                        <div className="font-black">Right</div>
                        So I started to walk into the water. I won't lie to you
                        boys, I was terrified. But I pressed on, and as I made
                        my way past the breakers a strange calm came over me.
                      </div>
                    </div>

                    <div className="flex space-x-6">
                      <div className="text-justify border-2 p-2">
                        <div className="font-black">Justify</div>
                        So I started to walk into the water. I won't lie to you
                        boys, I was terrified. But I pressed on, and as I made
                        my way past the breakers a strange calm came over me.
                      </div>
                      <div className="text-center border-2 p-2">
                        <div className="font-black">Center</div>
                        So I started to walk into the water. I won't lie to you
                        boys, I was terrified. But I pressed on, and as I made
                        my way past the breakers a strange calm came over me.
                      </div>
                    </div>

                    <div className="flex space-x-6">
                      <div className="text-left border-2 p-2">
                        <div className="font-black">Start</div>
                        So I started to walk into the water. I won't lie to you
                        boys, I was terrified. But I pressed on, and as I made
                        my way past the breakers a strange calm came over me.
                      </div>
                      <div className="text-right border-2 p-2">
                        <div className="font-black">End</div>
                        So I started to walk into the water. I won't lie to you
                        boys, I was terrified. But I pressed on, and as I made
                        my way past the breakers a strange calm came over me.
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default TypographyMui;
