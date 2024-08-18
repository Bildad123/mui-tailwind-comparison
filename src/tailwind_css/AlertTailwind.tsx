import { Button, ButtonGroup, Container } from "@mui/material";
import { useState } from "react";

const AlertTailwind = () => {
  const [activeSection, setActiveSection] = useState<
    "DefaultAlert" | "Severity" | "Variants" | null
  >(null);

  const handleSectionChange = (
    section: "DefaultAlert" | "Severity" | "Variants" | null
  ) => {
    setActiveSection(section);
  };

  return (
    <Container>
      <ButtonGroup
        variant="contained"
        aria-label="alert demo buttons"
        sx={{ mb: 2 }}
        
      >
        <Button
          variant={activeSection === "DefaultAlert" ? "contained" : "text"}
          onClick={() => handleSectionChange("DefaultAlert")}
        >
          Default Alert
        </Button>
        <Button
          variant={activeSection === "Severity" ? "contained" : "text"}
          onClick={() => handleSectionChange("Severity")}
        >
          Severity
        </Button>
        <Button
          variant={activeSection === "Variants" ? "contained" : "text"}
          onClick={() => handleSectionChange("Variants")}
        >
          Variants
        </Button>
      </ButtonGroup>

      <div className="m-4 font-roboto">
        {activeSection === "DefaultAlert" && (
          <>
            {" "}
            {/* Default Alert */}
            <div className=" bg-green-100  text-green-700 p-3 rounded">
              <p>This is a success Alert.</p>
            </div>
          </>
        )}
        {/* Severity Alerts */}
        {activeSection === "Severity" && (
          <div className="space-y-4">
            {/* Success Alert */}
            <div className="flex items-start bg-green-100  text-green-700 p-3 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-green-500 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <p>This is a success Alert.</p>
            </div>

            {/* Info Alert */}
            <div className="flex items-start bg-blue-100  text-blue-700 p-3 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-blue-500 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              <p>This is an info Alert.</p>
            </div>

            {/* Warning Alert */}
            <div className="flex items-start bg-yellow-100  text-yellow-700 p-3 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-yellow-500 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
              <p>This is a warning Alert.</p>
            </div>

            {/* Error Alert */}
            <div className="flex items-start bg-red-100  text-red-700 p-3 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-red-500 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
              <p>This is an error Alert.</p>
            </div>
          </div>
        )}

        {/* Variants Alerts */}
        {activeSection === "Variants" && (
          <div className="space-y-10">
            {/* Success Alerts with Variants */}
            <div className="space-y-3">
              <div className="flex items-start bg-green-600 text-white p-3 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-white mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>This is a filled success Alert.</p>
              </div>
              <div className="flex items-start bg-green-100 border border-green-500 text-green-700 p-3 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-green-500 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>This is an outlined success Alert.</p>
              </div>
            </div>

            {/* Info Alerts with Variants */}
            <div className="space-y-3">
              <div className="flex items-start bg-blue-600 text-white p-3 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-white mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                <p>This is a filled info Alert.</p>
              </div>
              <div className="flex items-start bg-blue-100 border border-blue-500 text-blue-700 p-3 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-blue-500 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                <p>This is an outlined info Alert.</p>
              </div>
            </div>

            {/* Warning Alerts with Variants */}
            <div className="space-y-3">
              <div className="flex items-start bg-yellow-600 text-white p-3 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-white mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
                <p>This is a filled warning Alert.</p>
              </div>
              <div className="flex items-start bg-yellow-100 border border-yellow-500 text-yellow-700 p-3 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-yellow-500 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
                <p>This is an outlined warning Alert.</p>
              </div>
            </div>

            {/* Error Alerts with Variants */}
            <div className="space-y-3">
              <div className="flex items-start bg-red-600 text-white p-3 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-white mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <p>This is a filled error Alert.</p>
              </div>
              <div className="flex items-start bg-red-100 border border-red-500 text-red-700 p-3 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-red-500 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <p>This is an outlined error Alert.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default AlertTailwind;
