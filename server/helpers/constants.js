require('dotenv').config()

const httpCode = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
}

const SALT_WORK_FACTOR = 8

const SECRET_KEY = process.env.JWT_SECRET

module.exports = {
    httpCode,
    SALT_WORK_FACTOR,
    SECRET_KEY,
}
