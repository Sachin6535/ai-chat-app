const mongoose=require("mongoose");
const MONGO_URI= "mongodb://127.0.0.1:27017/SaarthiAI"
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;