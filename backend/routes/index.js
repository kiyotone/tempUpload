const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const UploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProduct = require('../controller/product/getCategoryProductOne')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const getProductDetails = require('../controller/product/getProductDetails')
const addToCartController = require('../controller/user/addToCartController')
const countAddToCartProduct = require('../controller/user/countAddToCartProduct')
const addToCartViewProduct  = require('../controller/user/addToCartViewProduct')
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct')
const searchProduct = require('../controller/product/searchProduct')
const filterProductController = require('../controller/product/filterProduct')
const createAppointmentController = require('../controller/appointment/createAppointment')
const deleteAppointmentController = require('../controller/appointment/deleteAppointment')
const viewAppointmentController = require('../controller/appointment/viewAppointment')
const addRatingController = require('../controller/rating/addRating')
const myRatingsController = require('../controller/rating/myRatings')
const productRatingsController = require('../controller/rating/productRatings')
const deleteRatingController = require('../controller/rating/deleteRating')
const forgotPasswordController = require('../controller/user/forgotPassword')
const passwordRecoveryController = require('../controller/user/recoverPassword')


router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

//admin panel 
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

//product
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)

//user add to cart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)

// Appointment
router.post("/create-appointment",authToken, createAppointmentController)
router.get("/view-appointment",authToken, viewAppointmentController)
router.post("/delete-appointment",authToken, deleteAppointmentController)

// Rating
router.post("/add-rating",authToken, addRatingController)
router.get("/my-ratings",authToken, myRatingsController)
router.get("/product-ratings", productRatingsController)
router.post("/delete-rating",authToken, deleteRatingController)

// Password Recovery
router.post("/forgot-password",forgotPasswordController)
router.post("/recover-password",passwordRecoveryController)

module.exports = router