import { Container} from "@mui/material";

const ButtonColorTailwind = () => {
  return (
    <Container maxWidth="xl"> 
      <div className="flex flex-row gap-7 justify-center items-center">
        <button className="btn text-white bg-blue-600 hover:bg-blue-700 hover:shadow-md">
          Primary
        </button>
        <button className="btn text-white bg-teal-600 hover:bg-teal-700 hover:shadow-md">
          Secondary
        </button>
        <button className="btn text-white bg-green-700 hover:bg-green-800 hover:shadow-md">
          Success
        </button>
        <button className="btn text-white bg-red-600 hover:bg-red-700 hover:shadow-md">
          Error
        </button>
        <button className="btn text-white bg-blue-500 hover:bg-blue-600 hover:shadow-md">
          Info
        </button>
        <button className="btn text-white bg-orange-600 hover:bg-orange-700 hover:shadow-md">
          Warning
        </button>
      </div>
    </Container>
  );
};

export default ButtonColorTailwind;
