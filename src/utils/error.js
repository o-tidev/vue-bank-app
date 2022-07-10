const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'user with that email wasnt found',
    INVALID_PASSWORD: 'invalid password'
}

export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'unknown error'
}