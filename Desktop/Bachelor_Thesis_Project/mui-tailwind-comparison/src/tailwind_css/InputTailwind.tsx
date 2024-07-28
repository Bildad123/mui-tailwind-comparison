import { Button, ButtonGroup, Container } from "@mui/material";
import { useState } from "react";

const InputTailwind = () => {
  const [activeSection, setActiveSection] = useState<
    "variant" | "startAdornment" | "endAdornment" | null
  >(null);

  const handleSectionChange = (
    section: "variant" | "startAdornment" | "endAdornment" | null
  ) => {
    setActiveSection(section);
  };

  return (
    <Container maxWidth={"xl"}>
      <ButtonGroup
        variant="contained"
        aria-label="input demo buttons"
        sx={{ my: 5 }}
      >
        <Button
          variant={activeSection === "variant" ? "contained" : "text"}
          onClick={() => handleSectionChange("variant")}
        >
          Variant
        </Button>
        <Button
          variant={activeSection === "startAdornment" ? "contained" : "text"}
          onClick={() => handleSectionChange("startAdornment")}
        >
          Start Adornment
        </Button>
        <Button
          variant={activeSection === "endAdornment" ? "contained" : "text"}
          onClick={() => handleSectionChange("endAdornment")}
        >
          End Adornment
        </Button>
      </ButtonGroup>

      <div className="w-full max-w-screen-xl flex justify-center">
        <div className="flex flex-row space-x-5 justify-between w-2/4">
          {/* Input fields */}
          {activeSection === "variant" && (
            <div className="flex flex-col space-y-5">
              {/* Outlined Input */}
              <div className="relative w-[28rem]">
                <input
                  type="text"
                  id="outlined-input"
                  placeholder=" "
                  className="peer block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <label
                  htmlFor="outlined-input"
                  className="absolute top-2 left-3 text-gray-500 transition-transform duration-300 transform -translate-y-4 scale-75 origin-top-left z-20 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-indigo-600"
                >
                  Outlined
                </label>
              </div>

              {/* Standard Input */}
              <div className="relative w-[28rem]">
                <input
                  type="text"
                  id="standard-input"
                  placeholder=" "
                  className="peer block w-full px-3 py-3 border-b-2 border-gray-300 rounded-none shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <label
                  htmlFor="standard-input"
                  className="absolute top-0 left-3 text-gray-500 transition-transform duration-300 transform -translate-y-1.5 scale-75 origin-top-left peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-0.5 peer-focus:scale-75 peer-focus:text-indigo-600 pt-1"
                >
                  Standard
                </label>
              </div>

              {/* Filled Input */}
              <div className="relative w-[28rem]">
                <input
                  type="text"
                  id="filled-input"
                  placeholder=" "
                  className="peer block w-full px-3 py-3 border-b-2 border-gray-300 bg-gray-100 rounded-none shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <label
                  htmlFor="filled-input"
                  className="absolute top-0 left-3 text-gray-500 transition-transform duration-300 transform -translate-y-1.5 scale-75 origin-top-left peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-0.5 peer-focus:scale-75 peer-focus:text-indigo-600 pt-1"
                >
                  Filled
                </label>
              </div>
            </div>
          )}

          {activeSection === "startAdornment" && (
            <div className="flex flex-col space-y-5">
              <div className="relative w-[28rem]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="outlined-input"
                  placeholder=" "
                  className="peer block w-full pl-10 px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <label
                  htmlFor="outlined-input"
                  className="absolute top-2 left-10 text-gray-500 transition-transform duration-300 transform -translate-y-4 scale-75 origin-top-left z-20 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-indigo-600 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:text-indigo-600"
                >
                  Outlined
                </label>
              </div>

              <div className="relative w-[28rem]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="standard-input"
                  placeholder=" "
                  className="peer block w-full pl-10 px-3 py-3 border-b-2 border-gray-300 rounded-none shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <label
                  htmlFor="standard-input"
                  className="absolute top-1 left-10 text-gray-500 transition-transform duration-300 transform -translate-y-3 scale-75 origin-top-left peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-indigo-600"
                >
                  Standard
                </label>
              </div>
              <div className="relative w-[28rem]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="filled-input"
                  placeholder=" "
                  className="peer block w-full pl-10 px-3 py-3 border-b-2 border-gray-300 bg-gray-100 rounded-none shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <label
                  htmlFor="filled-input"
                  className="absolute top-0 left-10 text-gray-500 transition-transform duration-300 transform -translate-y-3 scale-75 origin-top-left peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-75 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-indigo-600"
                >
                  Filled
                </label>
              </div>
            </div>
          )}
          {activeSection === "endAdornment" && (
            <div className="flex flex-col space-y-5">
              <div className="relative w-[28rem]">
                <input
                  type="text"
                  id="outlined-input"
                  placeholder=" "
                  className="peer block w-full pr-10 px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <label
                  htmlFor="outlined-input"
                  className="absolute top-2 left-3 text-gray-500 transition-transform duration-300 transform -translate-y-4 scale-75 origin-top-left z-20 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-indigo-600"
                >
                  Outlined
                </label>
              </div>

              <div className="relative w-[28rem]">
                <input
                  type="text"
                  id="standard-input"
                  placeholder=" "
                  className="peer block w-full pr-10 px-3 py-3 border-b-2 border-gray-300 rounded-none shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <label
                  htmlFor="standard-input"
                  className="absolute top-0 left-3 text-gray-500 transition-transform duration-300 transform -translate-y-1.5 scale-75 origin-top-left peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-0.5 peer-focus:scale-75 peer-focus:text-indigo-600 pt-1"
                >
                  Standard
                </label>
              </div>

              <div className="relative w-[28rem]">
                <input
                  type="text"
                  id="filled-input"
                  placeholder=" "
                  className="peer block w-full pr-10 px-3 py-3 border-b-2 border-gray-300 bg-gray-100 rounded-none shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <label
                  htmlFor="filled-input"
                  className="absolute top-0 left-3 text-gray-500 transition-transform duration-300 transform -translate-y-1.5 scale-75 origin-top-left peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-0.5 peer-focus:scale-75 peer-focus:text-indigo-600 pt-1"
                >
                  Filled
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default InputTailwind;
