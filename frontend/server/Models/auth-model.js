// import moment from "moment-timezone";
import mongoose from "mongoose";


const AddUserSchema = new mongoose.Schema({
  name: { type: String, required: true, default: " " },
  email: { type: String, required: true, default: " " },
  password: { type: String, required: true, default: "" },
  isAdmin: { type: Boolean, default: false },
  pending: [{ type: String, default: "" }],
  friends: [{ type: String, default: "" }],
  invitations: [
    {
      invitation: { type: String, default: "" },
      date: { type: Date, default: Date.now},
    //   time: { type: Date, default: () => moment.tz('ASia/Kolkata').toDate() },
    },
  ],
},{
    timestamps:true
});

const AddUserModel = mongoose.model("AddUser", AddUserSchema);

export default AddUserModel;
