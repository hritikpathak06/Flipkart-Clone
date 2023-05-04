const Product = require("./model/productSchema")
const {products} = require('./constants/data')


const DefaultData = async() => {
   try{
       await Product.deleteMany({});
      await Product.insertMany(products)
      console.log("Data inserted to the database successfully")
   }catch(err){
    console.log("Error while inserting deafult data")
   }
}

module.exports = DefaultData