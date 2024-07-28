import { Button, ButtonGroup, Container } from "@mui/material";
import { useState } from "react";

const Imagery = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1549388604-817d15aa0110';
  const image = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
  const [activeSection, setActiveSection] = useState<
  | "resizingAndCropping"
  | "profileImage"
  | null
>(null);

const handleSectionChange = (
  section:
  | "resizingAndCropping"
  | "profileImage"
  | null
) => {
  setActiveSection(section);
};

  return (
    <Container maxWidth={"xl"}>
        
       <ButtonGroup variant="contained" aria-label="imagery demo buttons" sx={{my:3}}>
        <Button
          variant={activeSection === "profileImage" ? "contained" : "text"}
          onClick={() => handleSectionChange("profileImage")}
        >
          Profile Image
        </Button>
        <Button
          variant={activeSection === "resizingAndCropping" ? "contained" : "text"}
          onClick={() => handleSectionChange("resizingAndCropping")}
        >
          Resizing and Cropping
        </Button>
      
      </ButtonGroup>
      {activeSection === "profileImage" && (
        <>
          <div className="flex flex-wrap gap-10 justify-center font-roboto">
            <div className="flex flex-col items-center justify-center text-center mx-4">
              <div className="flex items-center justify-center h-16 w-16 bg-gray-400 rounded-none mb-2">
                {image}
              </div>
              <span className="text-sm">rounded-none</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center mx-4">
              <div className="flex items-center justify-center h-16 w-16 bg-gray-400 rounded-sm mb-2">
                {image}
              </div>
              <span className="text-sm">rounded-sm</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center mx-4">
              <div className="flex items-center justify-center h-16 w-16 bg-gray-400 rounded mb-2">
                {image}
              </div>
              <span className="text-sm">rounded</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center mx-4">
              <div className="flex items-center justify-center h-16 w-16 bg-gray-400 rounded-md mb-2">
                {image}
              </div>
              <span className="text-sm">rounded-md</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center mx-4">
              <div className="flex items-center justify-center h-16 w-16 bg-gray-400 rounded-lg mb-2">
                {image}
              </div>
              <span className="text-sm">rounded-lg</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center mx-4">
              <div className="flex items-center justify-center h-16 w-16 bg-gray-400 rounded-xl mb-2">
                {image}
              </div>
              <span className="text-sm">rounded-xl</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center mx-4">
              <div className="flex items-center justify-center h-16 w-16 bg-gray-400 rounded-2xl mb-2">
                {image}
              </div>
              <span className="text-sm">rounded-2xl</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center mx-4">
              <div className="flex items-center justify-center h-16 w-16 bg-gray-400 rounded-3xl mb-2">
                {image}
              </div>
              <span className="text-sm">rounded-3xl</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center mx-4">
              <div className="flex items-center justify-center h-16 w-16 bg-gray-400 rounded-full mb-2">
                {image}
              </div>
              <span className="text-sm">rounded-full</span>
            </div>
          </div>
        </>
      )}

      {activeSection === "resizingAndCropping" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {/* object-contain */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-300 h-300">
                <div
                  className="bg-gray-100 rounded-lg overflow-hidden p-2"
                  style={{ width: "300px", height: "300px" }}
                >
                  <img
                    src={`${imageUrl}?w=300&fit=crop&auto=format`}
                    alt="Sample"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-center text-sm mt-2 font-medium">
                object-contain
              </p>
            </div>

            {/* object-cover */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-300 h-300">
                <div
                  className="bg-gray-100 rounded-lg overflow-hidden p-2"
                  style={{ width: "300px", height: "300px" }}
                >
                  <img
                    src={`${imageUrl}?w=300&fit=crop&auto=format`}
                    alt="Sample"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-center text-sm mt-2 font-medium">
                object-cover
              </p>
            </div>

            {/* object-fill */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-300 h-300">
                <div
                  className="bg-gray-100 rounded-lg overflow-hidden p-2"
                  style={{ width: "300px", height: "300px" }}
                >
                  <img
                    src={`${imageUrl}?w=300&fit=crop&auto=format`}
                    alt="Sample"
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>
              <p className="text-center text-sm mt-2 font-medium">
                object-fill
              </p>
            </div>

            {/* object-none */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-300 h-300">
                <div
                  className="bg-gray-100 rounded-lg overflow-hidden p-2"
                  style={{ width: "300px", height: "300px" }}
                >
                  <img
                    src={`${imageUrl}?w=300&fit=crop&auto=format`}
                    alt="Sample"
                    className="w-full h-full object-none"
                  />
                </div>
              </div>
              <p className="text-center text-sm mt-2 font-medium">
                object-none
              </p>
            </div>

            {/* object-scale-down */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-300 h-300">
                <div
                  className="bg-gray-100 rounded-lg overflow-hidden"
                  style={{ width: "300px", height: "300px" }}
                >
                  <img
                    src={`${imageUrl}?w=300&fit=crop&auto=format`}
                    alt="Sample"
                    className="w-full h-full object-scale-down"
                  />
                </div>
              </div>
              <p className="text-center text-sm mt-2 font-medium">
                object-scale-down
              </p>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Imagery;
