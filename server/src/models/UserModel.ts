import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  user_id: string;   // Firebase UID
  first_name: string;
  last_name: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  user_id: { type: String, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, { timestamps: true });

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
