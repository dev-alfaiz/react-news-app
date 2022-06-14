const getEnvString = (property) => {
  const value = process.env[`REACT_APP_${property}`];
  if (value === undefined) {
    throw new Error(`Environment variable ${property} is undefined`);
  }
  return value;
};

export const API_KEY = getEnvString("API_KEY");
