// connecting to the database
import mongoose from "mongoose";
const connectToDb = () => {
  const db_username = process.env.DB_USERNAME;
  const db_password = process.env.DB_PASSWORD;
  const CONNECTION_URL = `mongodb+srv://${db_username}:${db_password}@moviefinder.r81cs.mongodb.net/?retryWrites=true&w=majority`;
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose
    .connect(CONNECTION_URL, connectionParams)
    .then(() => {
      console.log("Connected to the database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. n${err}`);
    });
};

export default connectToDb;
