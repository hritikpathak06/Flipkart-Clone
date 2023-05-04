const mongoose = require('mongoose')

const uri = "mongodb+srv://phritik06:Bkndb0mkSAtbDcUi@flipkart.bcimnfd.mongodb.net/Flipkart?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log("Something went wrong in database"))