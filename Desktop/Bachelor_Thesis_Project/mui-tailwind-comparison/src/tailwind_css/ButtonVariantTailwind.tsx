import { Container } from "@mui/material";

const Button = () => {
  return (
    <Container maxWidth="xl">
      <div className="flex flex-row gap-7 justify-center items-center">
        <button className="btn bg-blue-600 text-white hover:bg-blue-700">
          Contained
        </button>
        <button className="btn text-blue-600 hover:text-blue-700">Text</button>
        <button className="btn btn-outlined">Outlined</button>
      </div>
    </Container>
  );
};

export default Button;
