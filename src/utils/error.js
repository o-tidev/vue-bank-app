// defining the error codes
const ERROR_CODES = {
  EMAIL_NOT_FOUND: "User with that email wasnt found",
  INVALID_PASSWORD: "Invalid password",
};

// exporting error.js as a hook
export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : "Unknown error";
}
