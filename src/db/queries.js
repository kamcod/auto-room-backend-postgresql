const createNewUser = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";
const findUserByEmail = "SELECT * FROM users where email = $1";

module.exports = {
    createNewUser,
    findUserByEmail
}
