const productModel = require("../../models/productModel")
const enjectRating = require("../../helpers/enjectRating")

const filterProductController = async(req,res)=>{
 try{
        const categoryList = req?.body?.category || []

        const product = await productModel.find({
            category :  {
                "$in" : categoryList
            }
        })

        const productsWithRating = []
        for (let i = 0; i < product.length; i++) {
            const productWithRating = await enjectRating(product[i])
            productsWithRating.push(productWithRating)
        }

        res.json({
            data : productsWithRating,
            message : "product",
            error : false,
            success : true
        })
 }catch(err){
    res.json({
        message : err.message || err,
        error : true,
        success : false
    })
 }
}


module.exports = filterProductController