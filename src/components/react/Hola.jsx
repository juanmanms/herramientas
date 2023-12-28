require('dotenv').config();

const showEnvVariable = () => {
  const myVariable = process.env.googleMapsApiKey;
  console.log(`My Variable: ${myVariable}`);

  return <h2> hola amigo </h2>;
};

showEnvVariable();
