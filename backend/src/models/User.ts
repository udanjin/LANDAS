import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string; // hashed
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
