import mongoose, { ConnectOptions } from "mongoose"; 

// Connect DB
export const connectDB =  async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          } as ConnectOptions).then(() => {
              console.log("Mongoose connected successfully!");
          });
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}