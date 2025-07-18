const placementDetails = require("../../models/Placement/details.model.js")

const getDetails = async (req, res) => {
    try {
        let user = await placementDetails.find(req.body);
        console.log(user,'request')
        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: "No Such details Found" });
        }
        const data = {
            success: true,
            message: "placement  Details Found!",
            user,
        };
        res.json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const addDetails = async (req, res) => {
    try {
        console.log("request")
        let user = await placementDetails.findOne({ employeeId: req.body.employeeId });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "placement With This EmployeeId Already Exists",
            });
        }
        
     
        user = await placementDetails.create({ ...req.body, profile: req.file.filename });
        const data = {
            success: true,
            message: "placement Details Added!",
            user,
        };
        res.json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const updateDetails = async (req, res) => {
    try {
        let user;
        if (req.file) {
            user = await placementDetails.findByIdAndUpdate(req.params.id, { ...req.body, profile: req.file.filename });
        } else {
            user = await placementDetails.findByIdAndUpdate(req.params.id, req.body);
        }
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "No placement Found",
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


const deleteDetails = async (req, res) => {
    try {
        let user = await placementDetails.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "No placement Found",
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

const getCount = async (req, res) => {
    try {
        let user = await placementDetails.count(req.body);
        const data = {
            success: true,
            message: "Count Successfull!",
            user,
        };
        res.json(data);
    } catch (error) {
        res
            .status(500)
            .json({ success: false, message: "Internal Server Error", error });
    }
}

module.exports = { getDetails, addDetails, updateDetails, deleteDetails, getCount }