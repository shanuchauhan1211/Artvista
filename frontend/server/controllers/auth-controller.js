import AddUserModel from "../Models/auth-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const CreateUser = async (req, res) => {
  const { name, email, password, confirm } = req.body;
  try {
    const NewUser = await AddUserModel.findOne({ name: name });
    if (NewUser) {
      return res.status(400).json({ message: "User Already exist." });
    }

    if (password != confirm) {
      return res.status(400).json({ message: "Password Don't Match" });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    const newAddUser = await AddUserModel.create({
      name,
      email,
      password: hashpassword,
      confirm,
    });
    //  const token = jwt.sign({name:newAddUser.name,id:newAddUser.id },'test');

    return res.status(200).json({ user: newAddUser, token });
  } catch (error) {
    console.error("Error Creating New User");
    return res.status(400).json("internal error");
  }
};

const getAllUser = async (req, res) => {
  try {
    const AllUser = await AddUserModel.find();
    return res.status(200).json(AllUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const AddPending = async (req, res) => {
  const { id } = req.params;
  const { pending } = req.body;
  try {
    const user = await AddUserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Assuming `pending` is an array, push the new pending item into it
    user.pending.push(pending);
    await user.save();

    return res.status(200).json({ message: "Pending added successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

async function AddInvitation(req, res) {
  const { id } = req.params;
  const { invitation } = req.body;
  try {
    const user = await AddUserModel.findById(id);
    if (!user) {
      return res.status(400).json({ message: "Not a valid User" });
    }
    user.invitations.push({invitation : invitation});
    await user.save();
    return res.status(200).json({ message: "New Invitation" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const GetInvitations = async (req, res) => {
  const { id } = req.params;
  try {
    const InvitaionsForYou = await AddUserModel.findById(id);
    if (!InvitaionsForYou) {
      return res.status(404).json({ message: "User not valid" });
    }

    return res.status(200).json(InvitaionsForYou.invitations);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// const AddPending =async(req,res)=>{
//   const {id} = req.params;
//   console.log(id);
//   const {pending} = req.body;
//   try {
//     const User = await AddUserModel.find({id});
//     if (!User) {
//       return res
//         .status(404)
//         .json({ message: "File with given ID not found!!" });
//     }
//     else{

//       await AddUserModel.findByIdAndUpdate({_id:id},{pending,});
//       return res.status(200).json({ message: "Card updated Successfully!!" });

//     }
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
//   }

const logIn = async (req, res) => {
  try {
    const { name, password } = req.body;
    console.log(`Name: ${name} , Password: ${password}`);
    const NewUser = await AddUserModel.findOne({ name: name });

    if (!NewUser) {
      return res.status(404).json({ message: " Invalid account NO data " });
    }
    const isPasswordCorrect = await bcrypt.compare(password, NewUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect Password!" });
    } else {
      const token = jwt.sign(
        {
          name: NewUser.name,
          id: NewUser.id,
          isAdmin: NewUser.isAdmin,
          pending: NewUser.pending,
        },
        "test"
      );
      res.status(200).json({ result: NewUser, token });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to server using route ");
  } catch (error) {
    console.log(error);
  }
};

export {
  home,
  CreateUser,
  logIn,
  getAllUser,
  AddPending,
  AddInvitation,
  GetInvitations,
};
