const pool = require("../db/connect");
const { badRequestError } = require("../errors/index");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const { findUserById, addNewCar, getPaginatedCarsData, getCarData, deleteCarRecord, updateCarData } = require("../db/queries");

const getDashboardStats = async (req, res) => {
    const page = req.query.page || 1;
    const limit = 5;
    const offset = limit * (page -1);

    const userData = await pool.query(findUserById, [req.user.userId]);
    const { name } = userData.rows[0];
    const allCars = await pool.query('SELECT COUNT(*) FROM users');
    const cars = await pool.query(getPaginatedCarsData, [req.user.userId, limit, offset]);
    const carsCount = allCars.rows[0].count;
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

const getAllCars = async (req, res) => {
    const page = req.query.page || 1;
    const limit = 5;
    const offset = limit * (page -1);

    const allCars = await pool.query('SELECT COUNT(*) FROM users');
    const cars = await pool.query(getPaginatedCarsData, [req.user.userId, limit, offset]);
    const carsCount = allCars.rows[0].count;
    const totalPages = Math.ceil(carsCount/limit);
    res.status(200).json({
        data: cars.rows,
        pagination: {
            perPage: limit,
            currentPage: page,
            totalPages
        }
    })
};

const getCar = async (req, res, next) => {
    const car = await pool.query(getCarData, [req.params.id]);
    if(car.rows.length === 0){
        return next(new badRequestError("No Record Found"))
    }
    res.status(200).json({
        data: car.rows,
    })
};

const editCar = async (req, res, next) => {
    const {
        body: {make, category, color, registration_no, model},
        params: {id: dataId}
    } = req;
    if(make === '' || model === '' || registration_no === '' || color === '' || category === ''){
        return next(new badRequestError('Title and description can not be empty'));
    }
    pool.query(updateCarData, [make, category, color, registration_no, model, dataId])
        .then(result => {
            if(result.rowCount === 0){
                return next(new badRequestError("No Record Found!"))
            }
            res.status(200).json({
                status: "updated"
            })
        })
}

const deleteCar = async (req, res, next) => {
    const {id: postId} = req.params;
    pool.query(deleteCarRecord, [postId])
        .then(result => {
            if(result.rowCount === 0){
                return next(new badRequestError("No Record Found!"))
            }
            res.status(200).json({
                id: postId,
                status: "deleted"
            })
        })
        .catch(err => {
            console.log('.............', err);
        });
}

const createPaymentIntent = async (req, res) => {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
}

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
    addCar,
    getCar,
    editCar,
    deleteCar,
    createPaymentIntent
}
