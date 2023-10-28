const pool = require("../db/connect");
const { findUserById, addNewCar, getCarsData, getPaginatedCarsData } = require("../db/queries");

const getDashboardStats = async (req, res) => {
    const page = req.query.page || 1;
    const limit = 5;
    const offset = limit * (page -1);

    const userData = await pool.query(findUserById, [req.user.userId]);
    const { name } = userData.rows[0];
    const allCars = await pool.query(getCarsData, [req.user.userId]);
    const cars = await pool.query(getPaginatedCarsData, [req.user.userId, limit, offset]);
    const carsCount = allCars.rows.length;
    const totalPages = Math.ceil(carsCount/limit);
    res.status(200).json({
        name,
        cars: cars.rows,
        totalCars: carsCount,
        pagination: {
            perPage: limit,
            currentPage: page,
            totalPages
        }
    })
};

const getAllCars = () => {

};

const addCar = async (req, res) => {
    const { make, category, color, registration_no, model } = req.body;

    pool.query(addNewCar, [make, category, color, registration_no, model, req.user.userId], async (err, result) =>{
        if(result){
            res.status(201).send("Car data is added successfully");
        }
    })
};

module.exports = {
    getDashboardStats,
    getAllCars,
    addCar
}
