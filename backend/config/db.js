import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://suhaibkhan:khan123@cluster0.iujyogq.mongodb.net/RESUME')
    .then(() => console.log('DB CONNECT'))
}