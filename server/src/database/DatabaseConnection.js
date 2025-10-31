import mongoose from "mongoose";

const databaseConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database is connected Successfully")
    }
    catch(err){
       console.log("Database is not connected \n Error: ", err.message)
    }
}

export default databaseConnection;