const queries = {
    createNewUser: "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
    findUserByEmail: "SELECT * FROM users where email = $1",
    findUserById: "SELECT * FROM users where id = $1",
    addNewCar: "INSERT INTO cars (make, category, color, registration_no, model, user_id) VALUES ($1, $2, $3, $4, $5, $6)",
    getPaginatedCarsData: "SELECT * FROM cars where user_id = $1 LIMIT $2 OFFSET $3",
    getCarsData: "SELECT * FROM cars where user_id = $1",
    getCarData: "SELECT * FROM cars where id = $1",
    deleteCarRecord: "DELETE FROM cars where id = $1",
    updateCarData: "UPDATE cars SET make = $1, category = $2, color = $3, registration_no = $4, model = $5 WHERE id = $6"
}

module.exports = queries;
