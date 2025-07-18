const placementCredential = require("../../models/Placement/credential.model.js");

const loginHandler = async (req, res) => {
    let { loginid, password } = req.body;
    try {
        let user = await placementCredential.findOne({ loginid });
        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: "Wrong Credentials" });
        }
        if (password !== user.password) {
            return res
                .status(400)
                .json({ success: false, message: "Wrong Credentials" });
        }
        const data = {
            success: true,
            message: "Login Successfull!",
            loginid: user.loginid,
            id: user.id,
        };
        res.json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const registerHandler = async (req, res) => {
    let { loginid, password } = req.body;
    try {
        let user = await placementCredential.findOne({ loginid });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User With This LoginId Already Exists",
            });
        }
        user = await placementCredential.create({
            loginid,
            password,
        });
        const data = {
            success: true,
            message: "Register Successfull!",
            loginid: user.loginid,
            id: user.id,
        };
        res.json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
const updateHandler = async (req, res) => {
    try {
        let user = await placementCredential.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "No User Exists!",
            });
        }
        const data = {
            success: true,
            message: "Updated Successfull!",
        };
        res.json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const deleteHandler = async (req, res) => {
    try {
        let user = await placementCredential.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "No User Exists!",
            });
        }
        const data = {
            success: true,
            message: "Deleted Successfull!",
        };
        res.json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

module.exports = { loginHandler, registerHandler, updateHandler, deleteHandler }