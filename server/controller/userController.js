import User from "../model/userModel.js"

export const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        if (!userData) {
            return res.status(404).json({ msg: "User data not found" });
        }
        const savedDataga = await userData.save();
        res.status(200).json({ savedDataga });

    }
    catch (error) {
        res.status(500).json({ error: error });
    }

}

export const getAll = async (req, res) => {
    try {
        const userData = await User.find();;
        if (!userData) {
            return res.status(404).json({ msg: "User data not found" });
        }
        res.status(200).json(userData)
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
};

// get One
export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await User.findById(id);
        if (!userExists) {
            return res.status(400).json({ msg: "User not Found" });
        }
        res.status(200).json(userExists);
    }
    catch (error) {

        res.status(500).json({ error: error })
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist)
            return res.status(401).json({ msg: "User not Found" });
        const UpdateData = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(UpdateData);
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
}

// Delete a User 
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist)
            return res.status(404).json({ msg: "User not Exist" });

        await User.findByIdAndDelete(id);
        res.status(200).json({ msg: "User deleted" });
    }
    catch (error) {
        res.status(500).json({ error: error })
    }

}